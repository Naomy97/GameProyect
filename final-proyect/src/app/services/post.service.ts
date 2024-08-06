import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root"
})
export class PostService {
	constructor(private httpClient: HttpClient) {}

	API_URL = "http://18.118.104.75:3000/post";

	createPost(post: any) {
		return this.httpClient.post(this.API_URL, post);
	}
	readAllPost() {
		return this.httpClient.get<any[]>(this.API_URL);
	}
	deletePost(id: number) {
		return this.httpClient.delete<void>(`${this.API_URL}/${id}`);
	}
}
