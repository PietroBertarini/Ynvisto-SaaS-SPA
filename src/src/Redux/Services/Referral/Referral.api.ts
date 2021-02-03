import api from '../../api';
import { IApiError } from '../../api.types';
import { constructErrorFromApi } from '../Api.utils';

export interface IReferralResponse {
  redeemedInvites: number,
  remainingInvites: number,
}

export async function getReferralLink() : Promise<string | IApiError> {
  try {
    const result = await api.get('Referral/GetLink', {
      withCredentials: true,
    });

    return result.data;
  } catch (errorFromApi) {
    return constructErrorFromApi(errorFromApi);
  }
}

export async function getReferrelInfo() : Promise<IReferralResponse | IApiError> {
  try {
    const result = await api.get('Referral/GetReferralInfo', {
      withCredentials: true,
    });

    return result.data;
  } catch (errorFromApi) {
    return constructErrorFromApi(errorFromApi);
  }
}
