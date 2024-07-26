import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root"
})
export class LibraryService {
	constructor(private httpClient: HttpClient) {}

	API_URL = "http://3.16.25.44:3000/library";

	readAllGames() {
		return this.httpClient.get(this.API_URL);
	}
}
