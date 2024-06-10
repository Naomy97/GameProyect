import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from "@angular/forms";

@Component({
	selector: "app-login",
	standalone: true,
	imports: [FormsModule, ReactiveFormsModule],
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.css"
})
export class LoginComponent {
	formCredentials = new FormGroup({
		username: new FormControl(""),
		password: new FormControl("")
	});
	handleShipping() {
		console.log("formCredentials: "), this.formCredentials.value;
	}
}
