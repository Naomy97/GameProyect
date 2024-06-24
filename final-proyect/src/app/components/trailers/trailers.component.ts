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
		{ title: "Trailer 1", url: "assets/multimedia/trailer1.mp4" },
		{ title: "Trailer 2", url: "assets/multimedia/trailer2.mp4" },
		{ title: "Trailer 3", url: "assets/multimedia/trailer3.mp4" },
		{ title: "Trailer 4", url: "assets/multimedia/trailer4.mp4" },
		{ title: "Trailer 5", url: "assets/multimedia/trailer5.mp4" },
		{ title: "Trailer 6", url: "assets/multimedia/trailer6.mp4" },
		{ title: "Trailer 7", url: "assets/multimedia/trailer7.mp4" },
		{ title: "Trailer 8", url: "assets/multimedia/trailer8.mp4" },
		{ title: "Trailer 9", url: "assets/multimedia/trailer9.mp4" },
		{ title: "Trailer 10", url: "assets/multimedia/trailer10.mp4" }
	];

	selectedTrailer = this.trailers[0];

	selectTrailer(trailer: any) {
		this.selectedTrailer = trailer;
	}
}
