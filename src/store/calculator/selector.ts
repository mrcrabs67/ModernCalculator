import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../configureStore';

export const errorCodeSelector = createSelector(
    (state: RootState) => state.calculator.errorCode,
    (errorCode) => errorCode
);
export const historyStateSelector = createSelector(
    (state: RootState) => state.calculator.history,
    (history) => history
);
export const rubUsdSelector = createSelector(
    (state: RootState) => state.calculator.rubUsd,
    (rubUsd) => rubUsd
);
