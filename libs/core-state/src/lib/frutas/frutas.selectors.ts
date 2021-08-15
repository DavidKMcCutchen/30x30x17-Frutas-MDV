import { emptyFruta } from "@frutas/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { frutasAdapter, FrutasState, FRUTAS_FEATURE_KEY } from "./frutas.reducer";

export const getFrutasState = createFeatureSelector<FrutasState>(FRUTAS_FEATURE_KEY);

const { selectAll, selectEntities } = frutasAdapter.getSelectors();

export const getFrutasLoaded = createSelector(
    getFrutasState,
    (state: FrutasState) => state.loaded
);

export const getFrutasError = createSelector(
    getFrutasState,
    (state: FrutasState) => state.error
);

export const getAllFrutas = createSelector(
    getFrutasState,
    (state: FrutasState) => selectAll(state)
);

export const getFrutasEntities = createSelector(
    getFrutasState,
    (state: FrutasState) => selectEntities(state)
);

export const getSelectedFrutasId = createSelector(
    getFrutasState,
    (state: FrutasState) => state.selectedId
);

export const getSelectedFruta = createSelector(
    getFrutasEntities,
    getSelectedFrutasId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyFruta
);