import { Injectable } from "@angular/core";
import { Fruta } from "@frutas/api-interfaces";
import { FrutasService } from "@frutas/core-data";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import * as FrutasActions from './frutas.actions'
import { filter, map, tap  } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class FrutasEffects {
    loadFruta$ = createEffect(() =>
    this.actions$.pipe(
        ofType(FrutasActions.loadFruta),
        fetch({
            run: (action) =>
                this.frutasService
                    .find(action.frutaId)
                    .pipe(
                        map((fruta: Fruta) => FrutasActions.loadFrutaSuccess({ fruta }))
                    ),
                onError: (action, error) => FrutasActions.loadFrutaFailed({ error })    
        })

    ) )

    loadFrutas$ = createEffect(() =>
    this.actions$.pipe(
        ofType(FrutasActions.loadFrutas),
        fetch({
            run: () =>
            this.frutasService
                .all()
                .pipe(
                    map((frutas: Fruta[]) =>
                        FrutasActions.loadFrutasSuccess({ frutas })
                    )
                ),
            onError: (action, error) => FrutasActions.deleteFrutaFailed({ error })    
        })

    )
    )

    updateFruta$ = createEffect(() =>
    this.actions$.pipe(
        ofType(FrutasActions.updateFruta),
        pessimisticUpdate({
            run: (action) =>
            this.frutasService
            .update(action.fruta)
            .pipe(
                map((fruta: Fruta) => FrutasActions.updateFrutaSuccess({ fruta })
                )
            ),
        onError: (action, error) => FrutasActions.updateFrutaFailed({ error })    
        })

    ) )

    deleteFruta$ = createEffect(() =>
    this.actions$.pipe(
        ofType(FrutasActions.deleteFruta),
        pessimisticUpdate({
            run: (action) =>
            this.frutasService
            .delete(action.fruta)
            .pipe(
                map(() => FrutasActions.createFrutaSuccess({ fruta: action.fruta })
                )
            ),
        onError: (action, error) => FrutasActions.deleteFrutaFailed({ error })    
        })
    )
    )

    createFruta$ = createEffect(() =>
    this.actions$.pipe(
        ofType(FrutasActions.createFruta),
        pessimisticUpdate({
            run: (action) =>
            this.frutasService
            .create(action.fruta)
            .pipe(
                map((fruta: Fruta) => FrutasActions.createFrutaSuccess({ fruta })
                )
            ),
        onError: (action, error) => FrutasActions.createFrutaFailed({ error })    
        })
    ))

constructor(private actions$: Actions, private frutasService: FrutasService) {}    
}