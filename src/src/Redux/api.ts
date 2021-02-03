import axios, { AxiosResponse } from 'axios';

/**
 * Localhost YnvistoGateway api.
 */
const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

// /**
//  * Check if the one error have status 401.
//  * @param err: Caught error
//  */
// const isAuthError = (err: any): boolean => {
//   const axiosError = err as AxiosError;
//   // Whenever the erro is not from axios, we cannot try to repair it
//   if (!axiosError?.response) {
//     return false;
//   }
//
//   // Gets the error code from the axios response
//   const httpStatusCode = axiosError.response?.status;
//
//   // If the error code is Unauthorized, mark the error as Unauthorized error
//   return httpStatusCode === 401;
// };

/**
 * Always that callSafely catch error with status 401, will refresh
 * api token and call one more time.(Just 2 times), if this error occurs
 * again, than throw this error.
 * @param apiCall: Api with one method(get,post...)
 * @param authRetry: boolean to check if error 401 was caught one time.
 */
export function* callSafely<T>(apiCall: Promise<AxiosResponse<any>>, authRetry = false) {
  try {
    return yield apiCall;
  } catch (e) {
    if (!authRetry) {
      // TODO: Refresh token
      // yield callSafely(apiCall, true);
    }
    throw (e);
  }
}

export default api;
