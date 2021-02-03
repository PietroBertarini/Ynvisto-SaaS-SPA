import authorizationReducer, { INITIAL_STATE } from '../../../../Redux/Services/Authorization/Authorization.reducer';
import {
  EAuthActions,
  IAuthorizationState,
  AuthorizationActionTypes,
} from '../../../../Redux/Services/Authorization/Authorization.types';
import User from '../../../../Classes/User/User.class';

describe('loading state tests', () => {
  let currState: IAuthorizationState;

  beforeEach(() => {
    currState = INITIAL_STATE;
  });

  const dispatch = (action: AuthorizationActionTypes) => {
    currState = authorizationReducer(currState, action);
  };

  describe('Loading commit test', () => {
    beforeEach(() => {
      dispatch({ type: EAuthActions.LOGIN_START, payload: { email: 'blob@blob.com', key: '123' } });
    });

    it('should not mutate loading state back to false', () => {
      dispatch({ type: EAuthActions.CLEAN_USER });
      dispatch({ type: EAuthActions.UPDATE_SPREADSHEET_ADM, payload: 'spd' });
      dispatch({ type: EAuthActions.CLEAN_USER_ERROR });

      expect(currState.isFetching).toBe(true);
    });

    it('should mutate loading state back to false on on get user success', () => {
      dispatch({
        type: EAuthActions.GET_USER_SUCCESS,
        payload: User.fromApiModel({
          expiration: '2020-11-16T02:17:19.5312297Z',
          subscriptionValidity: '2120-09-20T00:53:15.9495491',
          spreadsheetId: 's',
          role: 'ad',
          userName: 'UserName',
        }),
      });
      expect(currState.isFetching).toBe(false);
    });

    it('should mutate loading state back to false on on get user fail', () => {
      dispatch({
        type: EAuthActions.GET_USER_FAILURE,
        payload: 'Any',
      });
      expect(currState.isFetching).toBe(false);
    });
  });
});
