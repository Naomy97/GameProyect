import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Credential } from "../interfaces/credential";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { ChangeDetectorRef } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class LoginService {
	httpClient = inject(HttpClient);
	toastrService = inject(ToastrService);
	router = inject(Router);

	API_URL = "http://3.15.166.13:3000/login";
	redirectUrl: string | null = null;

	private isLoggedInSubject = new BehaviorSubject<boolean>(true);
	isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

	login(credential: Credential) {
		return this.httpClient.post(this.API_URL, credential).pipe(
			tap((response: any) => {
				if (response && response.token) {
					localStorage.setItem("token", response.token);
					this.isLoggedInSubject.next(true);
				}
			})
		);
	}
	/* login(credential: Credential) {
		return this.httpClient.post(this.API_URL, credential);
	} */

	validateToken(token: string) {
		return this.httpClient.get(`${this.API_URL}/${token}`);
	}

	isLogin(): boolean {
		const token = localStorage.getItem("token");
		if (token) {
			// Si existe un token y el valor de isLoggedInSubject es verdadero, devuelve true.
			if (this.isLoggedInSubject.value) {
				return true;
			}
			// Si el token existe pero isLoggedInSubject.value es falso, devuelves true de todas formas.
			return true;
		} else {
			return false; // Si no hay token, devuelve false.
		}
	}

	logout() {
		this.toastrService.info("Thank you for using our services, see you later.!");
		localStorage.removeItem("token");
		this.isLoggedInSubject.next(false);
		this.router.navigate(["/"]);
	}
}
