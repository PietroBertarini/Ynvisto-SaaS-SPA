import api from '../../api';
import { IApiError } from '../../api.types';
import { constructErrorFromApi } from '../Api.utils';

export interface CreateDarfPaymentRequest {
  year: number,
  month: number
}

export interface IApiDarfPayment {
  id: number,

  /**
   * .NET Date string. i.e: "2020-11-03T00:00:00"
   */
  darfDate: string,

  userId: number,
}

export async function createDarfPayment(request: CreateDarfPaymentRequest) : Promise<IApiDarfPayment | IApiError> {
  try {
    const result = await api.post<IApiDarfPayment>('DarfPayment', request, {
      withCredentials: true,
    });

    return result.data;
  } catch (errorFromApi) {
    return constructErrorFromApi(errorFromApi);
  }
}

export async function deleteDarfPayment(darfPaymentId: number) : Promise<boolean | IApiError> {
  try {
    const result = await api.delete(`DarfPayment/${darfPaymentId}`, {
      withCredentials: true,
    });

    return result.data;
  } catch (errorFromApi) {
    return constructErrorFromApi(errorFromApi);
  }
}
