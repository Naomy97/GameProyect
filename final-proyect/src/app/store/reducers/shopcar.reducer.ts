import { createReducer, on, Action } from "@ngrx/store";
import { addPurchase, clearPurchases } from "../actions/shopcar.actions";
import { Purchase } from "../../interfaces/purchase"; // Asegúrate de que la ruta sea correcta

export const initialState: Purchase[] = [];

const _shopcarReducer = createReducer(
	initialState,
	on(addPurchase, (state: Purchase[], { purchase }) => [...state, purchase]),
	on(clearPurchases, () => [])
);

export function shopcarReducer(state: Purchase[] | undefined, action: Action) {
	return _shopcarReducer(state, action);
}
