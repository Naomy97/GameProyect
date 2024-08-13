import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AsyncPipe, NgIf } from "@angular/common";
import { LoginService } from "../../services/login.service";
import { ShopcarService } from "../../services/shopcar.service";
import { Observable } from "rxjs";

@Component({
	selector: "app-nav",
	standalone: true,
	imports: [RouterLink, AsyncPipe, NgIf], // <-- Importa AsyncPipe y NgIf
	templateUrl: "./nav.component.html",
	styleUrls: ["./nav.component.css"]
})
export class NavComponent {
	loginService = inject(LoginService);
	shopcarService = inject(ShopcarService);

	// Observable para el conteo del carrito
	cartCount$: Observable<number> = this.shopcarService.getPurchaseCount();

	// Observable para el estado de inicio de sesión
	isLoggedIn$ = this.loginService.isLoggedIn$;
}
