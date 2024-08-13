import { Component, inject, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { LoginService } from "../../services/login.service";
import { StoreService } from "../../services/store.service";
import { ShopcarService } from "../../services/shopcar.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-game-store",
	standalone: true,
	imports: [FormsModule, CommonModule],
	templateUrl: "./game-store.component.html",
	styleUrl: "./game-store.component.css"
})
export class GameStoreComponent implements OnInit {
	toastrService = inject(ToastrService);
	loginService = inject(LoginService);

	constructor(private storeService: StoreService, private shopcarService: ShopcarService, private router: Router) {}

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
	buyGame(gameId: any) {
		this.storeService.buyGame(gameId).subscribe(
			(response) => {
				this.shopcarService.addPurchase({ name: gameId.name, price: gameId.price.pc });
				/* this.router.navigate(["/shopcart"]); */
				this.toastrService.success(`Successfully purchased game`);
			},
			(error) => {
				// Manejar errores
				console.error("Error al comprar el juego:", error);
				alert("Error al comprar el juego");
			}
		);
	}
}
