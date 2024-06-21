import { Component, inject, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { LoginService } from "../../services/login.service";
import { SupportService } from "../../services/support.service";

@Component({
	selector: "app-support",
	standalone: true,
	imports: [FormsModule, ReactiveFormsModule],
	templateUrl: "./support.component.html",
	styleUrl: "./support.component.css"
})
export class SupportComponent implements OnInit {
	constructor(private fb: FormBuilder, private supportService: SupportService) {
		this.myForm = this.fb.group({
			name: ["", Validators.required],
			contactEmail: ["", [Validators.required]],
			phoneNumber: ["", Validators.required],
			message: ["", Validators.required],
			image: [null]
		});
	}

	router = inject(Router);
	toastrService = inject(ToastrService);
	loginService = inject(LoginService);

	name: string = "";
	id: string = "";
	myForm: FormGroup;
	fileToUpload: File | null = null;

	ngOnInit(): void {
		const token: any = localStorage.getItem("token");
		if (token) {
			this.loginService.validateToken(token).subscribe((response: any) => {
				if (response.result === "Good!") {
					this.name = response.data.name;
					this.toastrService.info(`Hello, Please leave your message to support you!`);
					this.id = response.data.id;
					console.log(this.id);
				} else {
					this.loginService.logout();
				}
			});
		} else {
			this.loginService.logout();
		}
	}
	onFileChange(event: any): void {
		if (event.target.files.length > 0) {
			this.fileToUpload = event.target.files[0];
		}
	}
	onSubmit(): void {
		if (this.myForm.valid) {
			const formData = new FormData();
			formData.append("name", this.myForm.get("name")?.value);
			formData.append("contactEmail", this.myForm.get("contactEmail")?.value);
			formData.append("phoneNumber", this.myForm.get("phoneNumber")?.value);
			formData.append("message", this.myForm.get("message")?.value);

			if (this.fileToUpload) {
				formData.append("image", this.fileToUpload);
			}

			this.supportService.sendRequest(formData).subscribe(
				(response) => {
					console.log("Datos enviados con éxito:", response);
				},
				(error) => {
					console.error("Error al enviar los datos:", error);
				}
			);
		}
	}
}
