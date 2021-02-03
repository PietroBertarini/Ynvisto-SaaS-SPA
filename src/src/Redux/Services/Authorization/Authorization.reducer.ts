import { EAuthActions, IAuthorizationState, AuthorizationActionTypes } from './Authorization.types';

export const INITIAL_STATE : IAuthorizationState = {
  user: undefined,
  isFetching: false,
  error: undefined,
  spreadsheetAdmin: undefined,
};

export default function authorizationReducer(
  state: IAuthorizationState = INITIAL_STATE, action: AuthorizationActionTypes,
):IAuthorizationState {
  switch (action.type) {
    case EAuthActions.LOGIN_START:
      return {
        ...state,
        isFetching: true,
      };
    case EAuthActions.UPDATE_SPREADSHEET_ADM:
      return {
        ...state,
        spreadsheetAdmin: action.payload,
      };
    case EAuthActions.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        error: undefined,
      };
    case EAuthActions.GET_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
        user: undefined,
      };
    case EAuthActions.CLEAN_USER:
      return {
        ...state,
        error: undefined,
        user: undefined,
      };
    case EAuthActions.CLEAN_USER_ERROR:
      return {
        ...state,
        error: undefined,
      };
    default:
      return state;
  }
}
