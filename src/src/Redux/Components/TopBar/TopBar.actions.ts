import {
  ETopBarTypes, IChangeActivePeriod, IChangeActiveWallet,
} from './TopBar.types';

export const changeActivePeriod = (period: string) : IChangeActivePeriod => ({
  type: ETopBarTypes.CHANGE_ACTIVE_PERIOD,
  payload: period,
});

export const changeActiveWallet = (wallet: string) : IChangeActiveWallet => ({
  type: ETopBarTypes.CHANGE_ACTIVE_WALLET,
  payload: wallet,
});
