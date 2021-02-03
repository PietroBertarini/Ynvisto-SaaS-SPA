import { IApiError } from '../../api.types';
import User from '../../../Classes/User/User.class';

export enum EAuthActions {
    LOGIN_START = 'LOGIN_START',
    REFRESH_TOKEN = 'REFRESH_TOKEN',
    GET_USER_SUCCESS = 'GET_USER_SUCCESS',
    GET_USER_FAILURE = 'GET_USER_FAILURE',
    USER_LOGOUT = 'USER_LOGOUT',
    UPDATE_SPREADSHEET_ADM = 'UPDATE_SPREADSHEET_ADM',
    CLEAN_USER_ERROR = 'CLEAN_USER_ERROR',
    CLEAN_USER = 'CLEAN_USER',
}

export interface ILoginStart {
    type: typeof EAuthActions.LOGIN_START
    payload: ILogin,
}

export interface IRefreshToken {
    type: typeof EAuthActions.REFRESH_TOKEN
}
export interface ISetSpreadsheetAdm {
    type: typeof EAuthActions.UPDATE_SPREADSHEET_ADM
    payload: string,
}
export interface ICleanUserError {
    type: typeof EAuthActions.CLEAN_USER_ERROR
}

export interface ICleanUser {
    type: typeof EAuthActions.CLEAN_USER
}
export interface IFetchLogoutClean {
    type: typeof EAuthActions.USER_LOGOUT
}

export interface IGetUserSuccess {
    type: typeof EAuthActions.GET_USER_SUCCESS
    payload: User,
}

export interface IGetUserFailure {
    type: typeof EAuthActions.GET_USER_FAILURE
    payload: any
}

export type AuthorizationActionTypes =
    ILoginStart |
    IGetUserSuccess |
    IGetUserFailure |
    IFetchLogoutClean |
    ICleanUserError |
    ISetSpreadsheetAdm |
    IRefreshToken |
    ICleanUser

export interface IAuthorizationState {
    user?: User,
    isFetching: boolean,
    error?: IApiError
    spreadsheetAdmin?: string
}
export interface ILogin {
    email: string,
    key: string,
}
