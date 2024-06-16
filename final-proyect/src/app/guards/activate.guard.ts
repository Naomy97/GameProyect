import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { inject, Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { LoginService } from "../services/login.service";

@Injectable({
	providedIn: "root"
})
export class activateGuard implements CanActivate {
	constructor(private loginService: LoginService, private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (this.loginService.isLogin()) {
			return true;
		} else {
			// Almacena la URL a la que el usuario intentó acceder
			this.loginService.redirectUrl = state.url;
			this.router.navigate(["/login"]);
			return false;
		}
	}
}

/* const router = inject(Router);
	const toastrService = inject(ToastrService);
	const loginService = inject(LoginService);

	if (loginService.isLogin()) {
		return true;
	} else {
		toastrService.info("First you have to be logged in!");
		router.navigateByUrl("/login");
		return false;
	} */
