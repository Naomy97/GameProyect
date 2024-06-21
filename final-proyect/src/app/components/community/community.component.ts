import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { LoginService } from "../../services/login.service";
import { Post } from "../../interfaces/post";

@Component({
	selector: "app-community",
	standalone: true,
	imports: [FormsModule, CommonModule],
	templateUrl: "./community.component.html",
	styleUrl: "./community.component.css"
})
export class CommunityComponent {
	toastrService = inject(ToastrService);
	loginService = inject(LoginService);

	name: string = "";
	posts: Post[] = [];
	newPostContent: string = "";
	newPostRating: number | null = null;

	ngOnInit() {
		const token: any = localStorage.getItem("token");
		if (token) {
			this.loginService.validateToken(token).subscribe((response: any) => {
				if (response.result === "Good!") {
					this.name = response.data.name;
					this.toastrService.success(`Hello, ${this.name}!`);
				} else {
					this.loginService.logout();
				}
			});
		} else {
			this.loginService.logout();
		}
	}

	addPost() {
		if (this.newPostContent.trim() && this.newPostRating !== null) {
			const newPost: Post = {
				content: this.newPostContent,
				rating: this.newPostRating
			};
			this.posts.push(newPost);
			this.newPostContent = "";
			this.newPostRating = null;
		}
	}
}
