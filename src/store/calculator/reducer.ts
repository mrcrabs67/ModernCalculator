import {
    createSlice,
    // createSelector,
    PayloadAction,
    // createAsyncThunk
} from '@reduxjs/toolkit';

// import { RootState, StoreDispatch, StoreGetState } from '../configureStore';

export type CalcState = {
    history: string[];
    errorCode: string | null;
    rubUsd: number | null;
};

export const initialCalcState: CalcState = {
    history: [],
    errorCode: null,
    rubUsd: null,
};

const slice = createSlice({
    name: 'calculator',
    initialState: initialCalcState,
    reducers: {
        setHistory: (state, action: PayloadAction<string>) => {
            state.history = [...state.history, action.payload];
            // state.history.push(action.payload);
        },
        setErrorCode: (state, action: PayloadAction<string | null>) => {
            state.errorCode = action.payload;
        },
        setRubUsd: (state, action: PayloadAction<number | null>) => {
            state.rubUsd = action.payload;
        },
    },
});

const { reducer } = slice;

export const { setHistory, setErrorCode, setRubUsd } = slice.actions;

export default reducer;
