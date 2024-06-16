import { Component, inject } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { LoginService } from "../../services/login.service";

@Component({
	selector: "app-support",
	standalone: true,
	imports: [],
	templateUrl: "./support.component.html",
	styleUrl: "./support.component.css"
})
export class SupportComponent {
	toastrService = inject(ToastrService);
	loginService = inject(LoginService);

	name: string = "";
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
}
