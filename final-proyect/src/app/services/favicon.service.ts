import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class FaviconService {
	private favicons: string[] = ["assets/multimedia/favicon1.ico", "assets/multimedia/favicon2.png", "assets/multimedia/favicon3.png", "assets/multimedia/favicon4.png"];
	private currentFaviconIndex = 0;
	private linkElement: HTMLLinkElement;

	constructor() {
		this.linkElement = document.querySelector("#favicon") || this.createFaviconLinkElement();
	}

	private createFaviconLinkElement(): HTMLLinkElement {
		const linkElement = document.createElement("link");
		linkElement.id = "favicon";
		linkElement.rel = "icon";
		document.head.appendChild(linkElement);
		return linkElement;
	}

	public changeFavicon(): void {
		this.currentFaviconIndex = (this.currentFaviconIndex + 1) % this.favicons.length;
		this.linkElement.href = this.favicons[this.currentFaviconIndex];
	}
}
