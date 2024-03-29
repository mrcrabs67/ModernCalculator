import { RootState, StoreDispatch, StoreGetState } from '../configureStore';
import { setErrorCode } from './reducer';
// import { API_URL_LIST, PASS } from '../../config';
// import { md5 } from 'js-md5';

const optionsCurr: any = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
};

const urlCurrencyRub =
    'https://api.currencyapi.com/v3/latest?apikey=cur_live_z4Gsj4avmy9YPHsmDsab1eCFGpE7ywJy9vYVD0kx&currencies=RUB';

export const fetchCurrencyRubUsd =
    () => async (dispatch: StoreDispatch, getState: StoreGetState) => {
        try {
            fetch(urlCurrencyRub).then((response) => {
                response.json();
            });
        } catch (e) {
            console.error(e);
        } finally {
            console.log('thunks');
        }
    };
