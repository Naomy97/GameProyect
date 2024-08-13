import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { StoreService } from "../../services/store.service";
import * as StoreActions from "../actions/store.actions";

@Injectable()
export class StoreEffects {
	constructor(private actions$: Actions, private storeService: StoreService) {}

	loadGames$ = createEffect(() =>
		this.actions$.pipe(
			ofType(StoreActions.loadGames),
			mergeMap(() =>
				this.storeService.readGames().pipe(
					map((games) => StoreActions.loadGamesSuccess({ games })),
					catchError((error) => of(StoreActions.loadGamesFailure({ error })))
				)
			)
		)
	);

	buyGame$ = createEffect(() =>
		this.actions$.pipe(
			ofType(StoreActions.buyGame),
			mergeMap((action) =>
				this.storeService.buyGame(action.gameId).pipe(
					map((game) => StoreActions.buyGameSuccess({ game })),
					catchError((error) => of(StoreActions.buyGameFailure({ error })))
				)
			)
		)
	);
}
