import { Component } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

const jwtHelperService = new JwtHelperService();

@Component({
	selector: "app-private",
	standalone: true,
	imports: [],
	templateUrl: "./private.component.html",
	styleUrl: "./private.component.css"
})
export class PrivateComponent {
	name: string = "";
	ngOnInit() {
		const token: any = localStorage.getItem("token");
		console.log("token: ", token);
		const decoded = jwtHelperService.decodeToken(token);
		console.log("decoded: ", decoded);
		this.name = decoded.name;
	}
}
