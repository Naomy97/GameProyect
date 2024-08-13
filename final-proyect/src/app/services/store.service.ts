import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Game } from "../interfaces/storeModel";

@Injectable({
	providedIn: "root"
})
export class StoreService {
	constructor(private httpClient: HttpClient) {}

	API_URL = "http://3.15.166.13:3000/games";

	readGames(): Observable<Game[]> {
		return this.httpClient.get<Game[]>(this.API_URL);
	}

	buyGame(gameId: string): Observable<any> {
		const url = `${this.API_URL}/id`;
		return this.httpClient.get(url, {});
	}
}
