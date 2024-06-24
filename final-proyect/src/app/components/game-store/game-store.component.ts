import { Component, inject, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { LoginService } from "../../services/login.service";
import { StoreService } from "../../services/store.service";

@Component({
	selector: "app-game-store",
	standalone: true,
	imports: [],
	templateUrl: "./game-store.component.html",
	styleUrl: "./game-store.component.css"
})
export class GameStoreComponent implements OnInit {
	toastrService = inject(ToastrService);
	loginService = inject(LoginService);

	constructor(private storeService: StoreService) {}

	name: string = "";

	public datos: any;

	ngOnInit(): void {
		const token: any = localStorage.getItem("token");
		if (token) {
			this.loginService.validateToken(token).subscribe((response: any) => {
				if (response.result === "Good!") {
					this.name = response.data.name;
					this.toastrService.success(`Hello, ${this.name} welcome to the game store!`);
				} else {
					this.loginService.logout();
				}
			});
		} else {
			this.loginService.logout();
		}
		this.storeService.readGames().subscribe(
			(response: any) => {
				this.datos = response.data;
			},
			(error) => {
				console.error("Error al obtener los datos:", error);
			}
		);
	}
}
