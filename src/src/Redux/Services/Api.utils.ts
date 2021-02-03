import { AxiosError } from 'axios';
import { ApiErrorCode, IApiError, IApiErrorModel } from '../api.types';

export function multinesErrorToHtml(errorMessage : string) : string {
  const errorText = errorMessage ? `<span>${errorMessage.replace(/\n/g, '<br><br>')}</span>`
    : 'Erro inesperado';
  return errorText;
}
export function constructErrorFromApi(errorFromApi): IApiError {
  const axiosError = errorFromApi as AxiosError;
  // Whenever the erro is not from axios, we cannot try get code and msg
  if (!axiosError?.response || !axiosError.response?.data) {
    return { errorMessage: 'Um erro inesperado ocorreu', errorCode: ApiErrorCode.UnknownError } as IApiError;
  }

  const apiData = errorFromApi.response.data as IApiErrorModel;

  const httpStatusCode = errorFromApi.response.status;
  const errorMessage = apiData.errorMessage ?? 'Um erro inesperado ocorreu';
  const errorCode = apiData.errorCode ?? ApiErrorCode.UnknownError;

  return { httpStatusCode, errorMessage, errorCode } as IApiError;
}
