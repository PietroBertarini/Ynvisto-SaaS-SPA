export enum ETopBarTypes {
  CHANGE_ACTIVE_PERIOD = 'CHANGE_ACTIVE_PERIOD',
  CHANGE_ACTIVE_WALLET = 'CHANGE_ACTIVE_WALLET',
}

export interface IChangeActivePeriod {
  type: typeof ETopBarTypes.CHANGE_ACTIVE_PERIOD
  payload: string
}

export interface IChangeActiveWallet {
  type: typeof ETopBarTypes.CHANGE_ACTIVE_WALLET
  payload: string
}
export type TTopBarActionTypes =
    IChangeActivePeriod |
    IChangeActiveWallet

export interface ITopBarState {
  notifications: string[],
  wallets: string[],
  activeWallet: string,
  activePeriod: string,
}
export enum EPeriodType {
  DAILY,
  WEEK,
  MONTH,
  YEAR,
}
