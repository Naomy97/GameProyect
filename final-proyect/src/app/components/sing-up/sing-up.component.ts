import { Component, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormGroup, Validators, FormBuilder } from "@angular/forms";
import { RegisterService } from "../../services/register.service";

@Component({
	selector: "app-sing-up",
	standalone: true,
	imports: [FormsModule, ReactiveFormsModule],
	templateUrl: "./sing-up.component.html",
	styleUrl: "./sing-up.component.css"
})
export class SingUpComponent implements OnInit {
	myForm: FormGroup;

	constructor(private fb: FormBuilder, private registerService: RegisterService) {
		this.myForm = this.fb.group({
			name: ["", Validators.required],
			lastName: ["", Validators.required],
			id: ["", Validators.required],
			city: ["", Validators.required],
			address: ["", Validators.required],
			phoneNumber: ["", Validators.required],
			gender: ["", Validators.required],
			email: ["", [Validators.required]],
			password: ["", Validators.required]
		});
	}

	ngOnInit(): void {}

	onSubmit(): void {
		if (this.myForm.valid) {
			const formData = new FormData();
			/* formData.append("name", this.myForm.get("name")?.value); */
			formData.append("name", "xxxxx");
			formData.append("lastName", this.myForm.get("lastName")?.value);
			formData.append("id", this.myForm.get("id")?.value);
			formData.append("city", this.myForm.get("city")?.value);
			formData.append("address", this.myForm.get("address")?.value);
			formData.append("phoneNumber", this.myForm.get("phoneNumber")?.value);
			formData.append("gender", this.myForm.get("gender")?.value);
			formData.append("email", this.myForm.get("email")?.value);
			formData.append("password", this.myForm.get("password")?.value);

			console.log("FormData:");
			formData.forEach((value, key) => {
				console.log(key + ": " + value);
			});

			this.registerService.createUser(formData).subscribe(
				(response) => {
					console.log("Datos enviados con éxito:", response);
				},
				(error) => {
					console.error("Error al enviar los datos:", error);
				}
			);
		}
	}
}
