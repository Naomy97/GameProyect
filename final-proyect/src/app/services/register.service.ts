import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";

@Injectable({
	providedIn: "root"
})
export class RegisterService {
	constructor(private httpClient: HttpClient, private toastrService: ToastrService) {}

	API_URL = "http://18.118.104.75:3000/users";

	createUser(formData: FormData) {
		return this.httpClient.post(this.API_URL, formData);
	}
}
