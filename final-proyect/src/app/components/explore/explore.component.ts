import { Component, OnInit } from "@angular/core";
import { LibraryService } from "../../services/library.service";

@Component({
	selector: "app-explore",
	standalone: true,
	imports: [],
	templateUrl: "./explore.component.html",
	styleUrls: ["./explore.component.css"]
})
export class ExploreComponent implements OnInit {
	public games: any; // Cambiado de 'datos' a 'games'

	constructor(private libraryService: LibraryService) {}

	ngOnInit(): void {
		this.libraryService.readAllGames().subscribe(
			(response) => {
				this.games = response; // Cambiado de 'datos' a 'games'
				console.log(this.games);
			},
			(error) => {
				console.error("Error al obtener los datos:", error);
			}
		);
	}
}
