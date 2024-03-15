import { PartialRootState } from './configureStore';
import { initialCalcState, CalcState } from './calculator/reducer';

const getPreloadedCalcState = (): CalcState => {
    return {
        ...initialCalcState,
    };
};

const getPreloadedState = (): PartialRootState => {
    return {
        calculator: getPreloadedCalcState(),
    };
};

export default getPreloadedState;
