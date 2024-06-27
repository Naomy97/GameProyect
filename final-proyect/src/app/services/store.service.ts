import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class StoreService {
	constructor(private httpClient: HttpClient) {}

	API_URL = "http://localhost:3000/games";

	readGames() {
		return this.httpClient.get(this.API_URL);
	}

	buyGame(gameId: string): Observable<any> {
		const url = `${this.API_URL}/id`;
		return this.httpClient.get(url, {});
	}
}
