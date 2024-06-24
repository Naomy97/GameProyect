import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root"
})
export class StoreService {
	constructor(private httpClient: HttpClient) {}

	API_URL = "http://localhost:3000/games";

	readGames() {
		return this.httpClient.get(this.API_URL);
	}
}
