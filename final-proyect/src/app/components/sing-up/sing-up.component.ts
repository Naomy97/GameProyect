import { Component, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormGroup, Validators, FormBuilder } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { HttpClient } from "@angular/common/http";
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

	constructor(private fb: FormBuilder, private http: HttpClient, private registerService: RegisterService, private toastrService: ToastrService) {
		this.myForm = this.fb.group({
			name: ["", Validators.required],
			lastName: ["", Validators.required],
			id: ["", Validators.required],
			city: ["", Validators.required],
			address: ["", Validators.required],
			phoneNumber: ["", Validators.required],
			gender: ["", Validators.required],
			email: ["", [Validators.required, Validators.email]],
			password: ["", Validators.required]
		});
	}

	ngOnInit(): void {
		this.toastrService.info(`We are very grateful that you can register with us!`);
	}

	onSubmit(): void {
		if (this.myForm.valid) {
			this.registerService.createUser(this.myForm.value).subscribe(
				(response) => {
					this.toastrService.success("Your data remains in our database, you can now log in");
					this.myForm.reset();
				},
				(error) => {
					this.toastrService.error("There was an error sending your information, please verify that everything is complete");
				}
			);
		} else {
			this.toastrService.warning("Please fill out the form correctly.");
		}
	}
}
