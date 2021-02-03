import topBarReducer from '../../../../Redux/Components/TopBar/TopBar.reducer';
import { ITopBarState } from '../../../../Redux/Components/TopBar/TopBar.types';
import {
  changeActivePeriod,
  changeActiveWallet,
} from '../../../../Redux/Components/TopBar/TopBar.actions';

const initialState : ITopBarState = {
  notifications: [],
  wallets: [],
  activeWallet: 'Todos',
  activePeriod: 'Dia',
};

test('Test change active period', () => {
  const newPeriod = 'New Period';
  const newState = topBarReducer(initialState, changeActivePeriod(newPeriod));
  expect(newState.activePeriod).toEqual(newPeriod);
});

test('Test change active wallet', () => {
  const newWallet = 'New Wallet';
  const newState = topBarReducer(initialState, changeActiveWallet(newWallet));
  expect(newState.activeWallet).toEqual(newWallet);
});
