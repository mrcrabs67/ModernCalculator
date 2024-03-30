import { RootState, StoreDispatch, StoreGetState } from '../configureStore';
import { setErrorCode, setRubUsd, setRubUsdConvert } from './reducer';
import { useSelector } from 'react-redux';
import {
    rubUsdSelector,
    rubUsdConvertSelector,
} from '@store/calculator/selector';

const urlCurrencyRub =
    'https://api.currencyapi.com/v3/latest?apikey=cur_live_z4Gsj4avmy9YPHsmDsab1eCFGpE7ywJy9vYVD0kx&currencies=RUB';

export const convertUsdRub =
    (Usd: number) =>
    async (dispatch: StoreDispatch, getState: StoreGetState) => {
        let result: number;
        try {
            result = Usd * useSelector(rubUsdSelector);
            dispatch(setRubUsdConvert(result));
            // return result;
        } catch (e) {
            console.error(e);
        }
    };
export const fetchCurrencyRubUsd =
    () => async (dispatch: StoreDispatch, getState: StoreGetState) => {
        try {
            fetch(urlCurrencyRub)
                .then((response) => response.json())
                .then((result) => {
                    const rubUsd: number = result.data?.RUB?.value;
                    console.log(rubUsd);
                    dispatch(setRubUsd(rubUsd));
                })
                .catch((e) => console.log(e));
        } catch (e) {
            console.error(e);
        } finally {
            console.log('finally');
        }
    };
