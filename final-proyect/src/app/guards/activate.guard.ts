import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { LoginService } from "../services/login.service";

export const activateGuard: CanActivateFn = (route, state) => {
	const router = inject(Router);
	const toastrService = inject(ToastrService);
	const loginService = inject(LoginService);

	if (loginService.isLogin()) {
		return true;
	} else {
		toastrService.info("First you have to be logged in!");
		router.navigateByUrl("/login");
		return false;
	}
};
