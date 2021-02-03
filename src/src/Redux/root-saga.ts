import { all, call } from 'redux-saga/effects';
import { myStocksSagas } from './Services/MyStocks/MyStocks.sagas';
import { taxReportsSagas } from './Services/TaxReports/TaxReports.sagas';
import { authorizationSagas } from './Services/Authorization/Authorization.sagas';

// Add all sagas into All[]
export default function* rootSaga() {
  yield all([call(myStocksSagas), call(taxReportsSagas), call(authorizationSagas)]);
}
