import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { LoginService } from "../../services/login.service";
import { PostService } from "../../services/post.service";
import { Post } from "../../interfaces/post";

@Component({
	selector: "app-community",
	standalone: true,
	imports: [FormsModule, CommonModule, ReactiveFormsModule],
	templateUrl: "./community.component.html",
	styleUrl: "./community.component.css"
})
export class CommunityComponent implements OnInit {
	loginService = inject(LoginService);

	constructor(private fb: FormBuilder, private postService: PostService, private toastrService: ToastrService) {
		this.postForm = this.fb.group({
			content: ["", Validators.required],
			rating: [null, [Validators.required, Validators.min(1)]]
		});
	}
	name: string = "";
	postForm!: FormGroup;
	posts: any[] = [];
	newPostContent: string = "";
	newPostRating: number | null = null;

	ngOnInit() {
		const token: any = localStorage.getItem("token");
		if (token) {
			this.loginService.validateToken(token).subscribe((response: any) => {
				if (response.result === "Good!") {
					this.name = response.data.name;
					this.toastrService.success(`Hello ${this.name},  This is the community forum, we are waiting for your comment!`);
				} else {
					this.loginService.logout();
				}
			});
		} else {
			this.loginService.logout();
		}
		this.loadPosts();
	}

	addPost(): void {
		if (this.postForm.valid) {
			const post = this.postForm.value;

			this.postService.createPost(post).subscribe(
				() => {
					this.loadPosts();
					this.postForm.reset();
					this.toastrService.success("Post created successfully!");
				},
				(error) => {
					console.error("Error creating post:", error);
					this.toastrService.error("Failed to create post.");
				}
			);
		} else {
			this.toastrService.warning("Please fill out the form correctly.");
		}
	}

	loadPosts(): void {
		this.postService.readAllPost().subscribe(
			(data) => {
				this.posts = data;
				/* this.toastrService.info("Posts loaded successfully!"); */
			},
			(error) => {
				console.error("Error loading posts:", error);
				this.toastrService.error("Failed to load posts.");
			}
		);
	}
	deletePost(postId: number) {
		this.postService.deletePost(postId).subscribe(
			() => {
				this.loadPosts();
			},
			(error) => {
				console.error("Failed to delete post:", error);
			}
		);
	}
}
