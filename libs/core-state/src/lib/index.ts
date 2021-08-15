import { ActionReducerMap } from "@ngrx/store";
import * as fromFrutas from './frutas/frutas.reducer';

export interface AppState {
[fromFrutas.FRUTAS_FEATURE_KEY]: fromFrutas.FrutasState
}

export const reducers: ActionReducerMap<AppState> = {
[fromFrutas.FRUTAS_FEATURE_KEY]: fromFrutas.frutasReducer
}