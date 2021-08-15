import { createAction, props } from "@ngrx/store";
import { Fruta } from "@frutas/api-interfaces";

// Select Entity

export const selectFruta = createAction(
    '[FRUTAS] Select Fruta',
    props<{ frutaId: string}>()
);

// Load All Entitites

export const loadFrutas = createAction(
    '[FRUTAS] Load Frutas'
);

export const loadFrutasSuccess = createAction(
    '[FRUTAS] Load Frutas Success',
    props<{ frutas: Fruta[]}>()
);

export const loadFrutasFailed = createAction(
    '[FRUTAS] Load Frutas Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadFruta = createAction(
    '[FRUTAS] Load Fruta',
    props<{ frutaId: string}>()
);

export const loadFrutaSuccess = createAction(
    '[FRUTAS] Load Fruta Success',
    props<{ fruta: Fruta }>()
);

export const loadFrutaFailed = createAction(
    '[FRUTAS] Load Fruta Failed',
    props<{ error: any }>()
);

// Load Entity Update

export const updateFruta = createAction(
    '[FRUTAS] Update Fruta',
    props<{ fruta: Fruta}>()
);

export const updateFrutaSuccess = createAction(
    '[FRUTAS] Update Fruta Success',
    props<{ fruta: Fruta }>()
);

export const updateFrutaFailed = createAction(
    '[FRUTAS] Update Fruta Failed',
    props<{ error: any }>()
);

// Load Entity Delete

export const deleteFruta = createAction(
    '[FRUTAS] Delete Fruta',
    props<{ fruta: Fruta }>()
);

export const deleteFrutaSuccess = createAction(
    '[FRUTAS] Delete Fruta Success',
    props<{ fruta: Fruta}>()
);

export const deleteFrutaFailed = createAction(
    '[FRUTAS] Delete Fruta Failed',
    props<{ error: any}>()
);

// Load Entity Create

export const createFruta = createAction(
    '[FRUTAS] Create Fruta',
    props<{ fruta: Fruta }>()
);

export const createFrutaSuccess = createAction(
    '[FRUTAS] Create Fruta Success',
    props<{ fruta: Fruta }>()
);

export const createFrutaFailed = createAction(
    '[FRUTAS] Create Fruta Failed',
    props<{ error: any }>()
);