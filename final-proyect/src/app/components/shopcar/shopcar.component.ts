import { Component, OnInit } from "@angular/core";
import { ShopcarService } from "../../services/shopcar.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-shopcar",
	standalone: true,
	imports: [FormsModule, CommonModule],
	templateUrl: "./shopcar.component.html",
	styleUrl: "./shopcar.component.css"
})
export class ShopcarComponent {
	purchases: any[] = [];
	total: number = 0;

	constructor(private shopcarService: ShopcarService) {}

	ngOnInit(): void {
		this.shopcarService.purchases$.subscribe((purchases) => {
			this.purchases = purchases;
			this.total = this.purchases.reduce((acc, purchase) => acc + purchase.price, 0);
		});
	}

	clearPurchases() {
		this.shopcarService.clearPurchases();
	}
}
