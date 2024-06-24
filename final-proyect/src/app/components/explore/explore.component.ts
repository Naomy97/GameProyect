import { Component, OnInit } from "@angular/core";
import { LibraryService } from "../../services/library.service";

@Component({
	selector: "app-explore",
	standalone: true,
	imports: [],
	templateUrl: "./explore.component.html",
	styleUrl: "./explore.component.css"
})
export class ExploreComponent implements OnInit {
	public datos: any;

	constructor(private libraryService: LibraryService) {}

	ngOnInit(): void {
		this.libraryService.readAllGames().subscribe(
			(response) => {
				this.datos = response;
				console.log(this.datos);
			},
			(error) => {
				console.error("Error al obtener los datos:", error);
			}
		);
	}
}
