import {
    createSlice,
    // createSelector,
    PayloadAction,
    // createAsyncThunk
} from '@reduxjs/toolkit';

// import { RootState, StoreDispatch, StoreGetState } from '../configureStore';

export type CalcState = {
    productsIds: string[];
    products: object[];
    currentPageNumber: number;
    maxPageNumber: number;
    siblingCount: number;
    errorCode: string | null;
};

export const initialCalcState: CalcState = {
    productsIds: [],
    products: [],
    currentPageNumber: 1,
    maxPageNumber: 1,
    siblingCount: 1,
    errorCode: null,
};

const slice = createSlice({
    name: 'products',
    initialState: initialCalcState,
    reducers: {
        setProductsIds: (state, action: PayloadAction<string[]>) => {
            state.productsIds = action.payload;
        },
        setProducts: (state, action: PayloadAction<object[]>) => {
            state.products = action.payload;
        },
        setCurrentPageNumber: (state, action: PayloadAction<number>) => {
            state.currentPageNumber = action.payload;
        },
        setMaxPageNumber: (state, action: PayloadAction<number>) => {
            state.maxPageNumber = action.payload;
        },
        setErrorCode: (state, action: PayloadAction<string | null>) => {
            state.errorCode = action.payload;
        },
    },
});

const { reducer } = slice;

export const {
    setProductsIds,
    setProducts,
    setCurrentPageNumber,
    setMaxPageNumber,
    setErrorCode,
} = slice.actions;

export default reducer;
