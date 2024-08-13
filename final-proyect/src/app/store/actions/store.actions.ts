import { createAction, props } from "@ngrx/store";
import { Game } from "../../interfaces/storeModel"; // Asegúrate de que esta ruta sea correcta

// Acción para iniciar la carga de juegos
export const loadGames = createAction("[Store] Load Games");

// Acción para manejar la carga exitosa de juegos
export const loadGamesSuccess = createAction(
	"[Store] Load Games Success",
	props<{ games: Game[] }>() // Asegúrate de que `games` esté tipado como un arreglo de `Game`
);

// Acción para manejar un error en la carga de juegos
export const loadGamesFailure = createAction("[Store] Load Games Failure", props<{ error: any }>());

// Acción para iniciar la compra de un juego
export const buyGame = createAction(
	"[Store] Buy Game",
	props<{ gameId: string }>() // Asegúrate de que `gameId` esté correctamente tipado
);

// Acción para manejar una compra exitosa
export const buyGameSuccess = createAction(
	"[Store] Buy Game Success",
	props<{ game: Game }>() // `game` debería ser de tipo `Game`
);

// Acción para manejar un error en la compra de un juego
export const buyGameFailure = createAction("[Store] Buy Game Failure", props<{ error: any }>());
