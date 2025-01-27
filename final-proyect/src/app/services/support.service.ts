import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";

@Injectable({
	providedIn: "root"
})
export class SupportService {
	constructor(private httpClient: HttpClient, private toastrService: ToastrService) {}

	API_URL = "http://3.15.166.13:3000/support";

	sendRequest(formData: FormData) {
		return this.httpClient.post(this.API_URL, formData);
	}
}
