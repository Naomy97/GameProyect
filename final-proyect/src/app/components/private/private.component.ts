import { Component, inject } from "@angular/core";
import { LoginService } from "../../services/login.service";

@Component({
	selector: "app-private",
	standalone: true,
	imports: [],
	templateUrl: "./private.component.html",
	styleUrl: "./private.component.css"
})
export class PrivateComponent {
	loginService = inject(LoginService);

	name: string = "";
	ngOnInit() {
		const token: any = localStorage.getItem("token");
		console.log("token: ", token);
		if (token) {
			this.loginService.validateToken(token).subscribe((response: any) => {
				console.log("response: ", response);
				if (response.result === "Good!") {
					this.name = response.data.name;
				} else {
					console.log("token is not valid");
				}
			});
		} else {
			console.log("don't exist token");
		}
	}
}
