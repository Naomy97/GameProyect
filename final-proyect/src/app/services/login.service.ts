import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Credential } from "../interfaces/credential";

@Injectable({
	providedIn: "root"
})
export class LoginService {
	constructor() {}
	httpClient = inject(HttpClient);
	toastrService = inject(ToastrService);
	router = inject(Router);

	API_URL = "http://18.118.104.75:3000/login";
	redirectUrl: string | null = null;

	login(credential: Credential) {
		return this.httpClient.post(this.API_URL, credential);
	}

	validateToken(token: string) {
		return this.httpClient.get(`${this.API_URL}/${token}`);
	}

	isLogin() {
		const token = localStorage.getItem("token");
		if (token) {
			return true;
		} else {
			return false;
		}
	}

	logout() {
		this.toastrService.info("Thank you for using our services, see you later.!");
		localStorage.removeItem("token");
		this.router.navigate(["/"]);
	}
}
