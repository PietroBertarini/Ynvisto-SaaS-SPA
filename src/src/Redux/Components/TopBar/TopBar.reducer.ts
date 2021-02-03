import { TTopBarActionTypes, ITopBarState, ETopBarTypes } from './TopBar.types';

const INITIAL_STATE : ITopBarState = {
  notifications: [],
  wallets: [],
  activeWallet: 'Todos',
  activePeriod: 'Dia',
};

export default function topBarReducer(
  state: ITopBarState = INITIAL_STATE, action: TTopBarActionTypes,
) {
  switch (action.type) {
    case ETopBarTypes.CHANGE_ACTIVE_PERIOD:
      return {
        ...state,
        activePeriod: action.payload,
      };
    case ETopBarTypes.CHANGE_ACTIVE_WALLET:
      return {
        ...state,
        activeWallet: action.payload,
      };
    default:
      return state;
  }
}
