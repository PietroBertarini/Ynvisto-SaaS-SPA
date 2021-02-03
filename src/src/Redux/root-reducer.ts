import { combineReducers } from 'redux';
import { persistReducer, createTransform } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import topBarReducer from './Components/TopBar/TopBar.reducer';
import { ITopBarState } from './Components/TopBar/TopBar.types';
import { IMyStocksState } from './Services/MyStocks/MyStocks.types';
import myStocksReducer from './Services/MyStocks/MyStocks.reducer';
import taxReportsReducer, { ITaxReportsState } from './Services/TaxReports/TaxReports.reducer';
import { IAuthorizationState } from './Services/Authorization/Authorization.types';
import authorizationReducer from './Services/Authorization/Authorization.reducer';
import irpfReducer, { IIRPFState } from './Services/IRPF/IRPF.reducer';
import User from '../Classes/User/User.class';
//

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const SetTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState: any, key) => ({ ...inboundState }),
  // transform state being rehydrated
  (outboundState : IAuthorizationState, key) => ({ ...outboundState, user: User.fromStorage(outboundState.user) }),
  // define which reducers this transform gets called for.
  { whitelist: ['authorization'] },
);
// To add a state at persist, just add the reducer inside whitelist.
const persistConfig = {
  key: 'root',
  storage,
  migrate: (state) => Promise.resolve(state),
  transforms: [SetTransform],
  // taxReports: we dont wanna save old taxReports
  blacklist: ['taxReports', 'irpf'],
};
// To store a state into master State, just add your reducer into State Interface.
export interface State {
    topBar: ITopBarState,
    myStocks: IMyStocksState,
    taxReports: ITaxReportsState,
    authorization: IAuthorizationState,
    irpf: IIRPFState,
}
// To store a reducer into appReducer, just add the reducer into combineReducer.
const appReducer = combineReducers({
  topBar: topBarReducer,
  myStocks: myStocksReducer,
  taxReports: taxReportsReducer,
  authorization: authorizationReducer,
  irpf: irpfReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
