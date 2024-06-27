import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class ShopcarService {
	private purchasesSubject = new BehaviorSubject<any[]>([]);
	purchases$: Observable<any[]> = this.purchasesSubject.asObservable();

	addPurchase(purchase: any) {
		const currentPurchases = this.purchasesSubject.value;
		this.purchasesSubject.next([...currentPurchases, purchase]);
	}

	clearPurchases() {
		this.purchasesSubject.next([]);
	}
}
