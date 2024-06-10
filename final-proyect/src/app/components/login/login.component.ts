import { Component, inject } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Credential } from "../../interfaces/credential";
import { LoginService } from "../../services/login.service";

const jwtHelperService = new JwtHelperService();

@Component({
	selector: "app-login",
	standalone: true,
	imports: [FormsModule, ReactiveFormsModule],
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.css"
})
export class LoginComponent {
	router = inject(Router);
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
					localStorage.setItem("token", response.data);
					this.router.navigateByUrl("/private");
				});
			}
		} else {
		}
	}
}
