import { createAction, props } from "@ngrx/store";

export const addPurchase = createAction("[Shopcar] Add Purchase", props<{ purchase: any }>());

export const clearPurchases = createAction("[Shopcar] Clear Purchases");
