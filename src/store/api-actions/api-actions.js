import {toast} from 'react-toastify';

import {getDate} from '../../utils';
import {loadCurrencyRate, setLoadState} from '../actions/converter-actions/converter-actions';

const fetchCurrencyRate = (date, from, to) => (dispatch, _getState, api) => (
  api.get(`${getDate(date, 'YYYY-MM-DD')}?from=${from}&to=${to}`)
    .then(({data}) => dispatch(loadCurrencyRate(data)))
    .catch(() => toast.error('Ошибка при загрузке курса валют'))
    .finally(() => dispatch(setLoadState(false)))
);

export default fetchCurrencyRate;
