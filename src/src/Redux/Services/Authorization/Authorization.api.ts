import { AxiosResponse } from 'axios';
import api from '../../api';
import User from '../../../Classes/User/User.class';
import { ILogin } from './Authorization.types';
import { IApiError } from '../../api.types';
import { constructErrorFromApi } from '../Api.utils';

/**
 * Authenticate and get user data.
 * @param loginData email and key of user.
 */
export function* authenticate(loginData: ILogin):
    Generator<Promise<AxiosResponse<any>>, User | IApiError, AxiosResponse> {
  try {
    const apiResponse = yield api.post('Authorization/Authenticate', loginData, {
      withCredentials: true,
    });
    return User.fromApiModel(apiResponse.data);
  } catch (errorFromApi) {
    return constructErrorFromApi(errorFromApi);
  }
}

export function* refreshTokenCall() {
  try {
    const apiResponse = yield api.post('Authorization/RefreshToken', undefined, {
      withCredentials: true,
    });
    return User.fromApiModel(apiResponse.data);
  } catch (errorFromApi) {
    return constructErrorFromApi(errorFromApi);
  }
}

/**
 * Refresh auth token and ge a newt user data.
 * @param loginData email and key of user.
 */
