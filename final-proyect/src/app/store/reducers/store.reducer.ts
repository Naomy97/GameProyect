import { createReducer, on, Action } from "@ngrx/store";
import { loadGamesSuccess, loadGamesFailure, buyGameSuccess, buyGameFailure } from "../actions/store.actions";
import { StoreState, Game } from "../../interfaces/storeModel"; // Asegúrate de que la ruta sea correcta

export const initialState: StoreState = {
	games: [],
	error: null
};

const _storeReducer = createReducer(
	initialState,
	on(loadGamesSuccess, (state, { games }) => ({
		...state,
		games
	})),
	on(loadGamesFailure, (state, { error }) => ({
		...state,
		error
	})),
	on(buyGameSuccess, (state, { game }) => ({
		...state,
		games: state.games.map((g) => (g.id === game.id ? game : g))
	})),
	on(buyGameFailure, (state, { error }) => ({
		...state,
		error
	}))
);

export function storeReducer(state: StoreState | undefined, action: Action) {
	return _storeReducer(state, action);
}
