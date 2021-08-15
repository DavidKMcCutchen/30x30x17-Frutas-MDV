import { Injectable } from "@angular/core";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { Fruta } from "@frutas/api-interfaces";
import { map, filter } from "rxjs/operators";
import * as FrutasActions from './frutas.actions';
import * as FrutasSelectors from './frutas.selectors';
import * as fromFrutas from './frutas.reducer';

@Injectable({
    providedIn: 'root',
})

export class FrutasFacade {
    allFrutas$ = this.store.pipe(
        map((state) => FrutasSelectors.getAllFrutas(state)),
    )
    selectedFrutas$ = this.store.pipe(select(FrutasSelectors.getSelectedFruta));
    loaded$ = this.store.pipe(select(FrutasSelectors.getFrutasLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === FrutasActions.createFruta({} as any) .type  ||
        action.type === FrutasActions.deleteFruta({} as any) .type  ||
        action.type === FrutasActions.updateFruta({} as any) .type
        ),
    )

    selectFruta(frutaId: string) {
        this.dispatch(FrutasActions.selectFruta({ frutaId }))
    }

    loadFrutas() {
        this.dispatch(FrutasActions.loadFrutas())
    }

    loadFruta(frutaId: string) {
        this.dispatch(FrutasActions.loadFruta({ frutaId }))
    }

    saveFruta(fruta: Fruta) {
        fruta.id ? this.updateFruta(fruta) : this.createFruta(fruta)
    }

    createFruta(fruta: Fruta) {
        this.dispatch(FrutasActions.createFruta({ fruta }));
    }
    
    updateFruta(fruta: Fruta) {
        this.dispatch(FrutasActions.updateFruta({ fruta }));
    }
    
    deleteFruta(fruta: Fruta) {
        this.dispatch(FrutasActions.deleteFruta({ fruta }))
    }
    
    dispatch(action: Action) {
        this.store.dispatch(action)
    } 

    constructor(
        private store: Store<fromFrutas.FrutasPartialState>,
        private actions$: ActionsSubject
    ) {}
}