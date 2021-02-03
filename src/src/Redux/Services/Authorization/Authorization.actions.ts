import {
  EAuthActions,
  ICleanUserError,
  IFetchLogoutClean, IGetUserFailure,
  ILoginStart,
  IGetUserSuccess,
  ILogin, ISetSpreadsheetAdm, IRefreshToken, ICleanUser,
} from './Authorization.types';
import { IApiError } from '../../api.types';
import User from '../../../Classes/User/User.class';

export const loginRequest = (login: ILogin) : ILoginStart => ({
  type: EAuthActions.LOGIN_START,
  payload: login,
});

export const requestRefreshToken = () : IRefreshToken => ({
  type: EAuthActions.REFRESH_TOKEN,
});

export const setSpreadSheetAdm = (spreadsheetId: string) : ISetSpreadsheetAdm => ({
  type: EAuthActions.UPDATE_SPREADSHEET_ADM,
  payload: spreadsheetId,
});
export const userLogout = () : IFetchLogoutClean => ({
  type: EAuthActions.USER_LOGOUT,
});
export const loginCleanErrors = () : ICleanUserError => ({
  type: EAuthActions.CLEAN_USER_ERROR,
});
export const cleanUser = () : ICleanUser => ({
  type: EAuthActions.CLEAN_USER,
});

export const getUserSuccess = (user: User) :
    IGetUserSuccess => ({
  type: EAuthActions.GET_USER_SUCCESS,
  payload: user,
});

export const getUserFailure = (error: IApiError) : IGetUserFailure => ({
  type: EAuthActions.GET_USER_FAILURE,
  payload: error,
});
