import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { NavComponent } from "./components/nav/nav.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FaviconService } from "./services/favicon.service";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, NavComponent, FooterComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css"
})
export class AppComponent {
	constructor(private faviconService: FaviconService) {}

	ngOnInit(): void {
		setInterval(() => {
			this.faviconService.changeFavicon();
		}, 2000); // Cambia cada segundo
	}
}
