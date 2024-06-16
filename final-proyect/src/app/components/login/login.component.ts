import { Component, inject } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Credential } from "../../interfaces/credential";
import { LoginService } from "../../services/login.service";

@Component({
	selector: "app-login",
	standalone: true,
	imports: [FormsModule, ReactiveFormsModule],
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.css"
})
export class LoginComponent {
	router = inject(Router);
	toastrService = inject(ToastrService);
	loginService: LoginService = inject(LoginService);

	formCredentials = new FormGroup({
		username: new FormControl("", Validators.required),
		password: new FormControl("", Validators.required)
	});
	handleShipping() {
		if (this.formCredentials.valid) {
			const username = this.formCredentials.value.username;
			const password = this.formCredentials.value.password;

			if (typeof username === "string" && typeof password === "string") {
				const credential: Credential = {
					username,
					password
				};
				this.loginService.login(credential).subscribe((response: any) => {
					if (response.result === "Good!") {
						localStorage.setItem("token", response.data);
						this.router.navigateByUrl("/gamestore");
					} else {
						this.toastrService.warning("Invalid credentials");
					}
				});
			}
		} else {
			this.toastrService.error("All fields are required");
		}
	}
}
