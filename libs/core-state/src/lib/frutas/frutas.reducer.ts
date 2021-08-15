import { Fruta } from "@frutas/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as FrutasActions from './frutas.actions';

export const FRUTAS_FEATURE_KEY = 'frutas';

export interface FrutasState extends EntityState<Fruta>{
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface FrutasPartialState {
    readonly [FRUTAS_FEATURE_KEY]: FrutasState
};

export const frutasAdapter: EntityAdapter<Fruta> = createEntityAdapter<Fruta>();

export const initialFrutaState: FrutasState = frutasAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailure = (state, {error}): FrutasState => ({ ...state, error });

const onDispatch = (state, action): FrutasState => ({ 
    ...state,
    loaded: false,
    error: null
});

const _frutasReducer = createReducer(
    initialFrutaState,
    on(
        FrutasActions.loadFrutaFailed,
        FrutasActions.loadFrutasFailed,
        FrutasActions.deleteFrutaFailed,
        FrutasActions.updateFrutaFailed,
        FrutasActions.createFrutaFailed,
        onFailure
    ),
    on(
        FrutasActions.loadFruta,
        FrutasActions.loadFrutas,
        FrutasActions.deleteFruta,
        FrutasActions.updateFruta,
        FrutasActions.createFruta,
        onDispatch
    ),
    on(
        FrutasActions.loadFrutaSuccess, (state, {fruta}) =>
        frutasAdapter.upsertOne(fruta, {...state, loaded: true})
    ),
    on(
        FrutasActions.selectFruta, (state, { frutaId }) => ({
            ...state,
            selectedId: frutaId
        })
    ),
    on(
        FrutasActions.loadFrutasSuccess, (state, { frutas }) =>
        frutasAdapter.setAll(frutas, {...state, loaded: true })
    ),
    on(
        FrutasActions.deleteFrutaSuccess, (state, { fruta }) =>
        frutasAdapter.removeOne(fruta.id, {...state, loaded: true })
    ),
    on(
        FrutasActions.updateFrutaSuccess, (state, { fruta }) =>
        frutasAdapter.updateOne(
            {id: fruta.id, changes: fruta},
            {...state, loaded: true}
        )
    ),
    on(
        FrutasActions.createFrutaSuccess, (state, { fruta }) =>
        frutasAdapter.addOne(fruta, {...state, loaded: true })
    ),
)

export function frutasReducer(
    state: FrutasState | undefined,
    action: Action
) {
    return _frutasReducer(state, action)
}
