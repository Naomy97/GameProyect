import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-trailers",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./trailers.component.html",
	styleUrl: "./trailers.component.css"
})
export class TrailersComponent {
	trailers = [
		{ title: "Trailer 1", url: "assets/multimedia/trailer1.webm" },
		{ title: "Trailer 2", url: "assets/multimedia/trailer2.mp4" },
		{ title: "Trailer 3", url: "assets/multimedia/trailer1.webm" },
		{ title: "Trailer 4", url: "assets/multimedia/trailer1.webm" },
		{ title: "Trailer 5", url: "assets/multimedia/trailer1.webm" },
		{ title: "Trailer 6", url: "assets/multimedia/trailer1.webm" },
		{ title: "Trailer 7", url: "assets/multimedia/trailer1.webm" },
		{ title: "Trailer 8", url: "assets/multimedia/trailer1.webm" },
		{ title: "Trailer 9", url: "assets/multimedia/trailer1.webm" },
		{ title: "Trailer 10", url: "assets/multimedia/trailer1.webm" }
	];

	selectedTrailer = this.trailers[0];

	selectTrailer(trailer: any) {
		this.selectedTrailer = trailer;
	}
}
