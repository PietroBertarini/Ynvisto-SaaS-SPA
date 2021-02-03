import api from '../../api';
import { IApiError } from '../../api.types';
import { CommitBatchRequest } from './BrokerNotesBatch.types';
import { constructErrorFromApi } from '../Api.utils';

/**
 * commitBatch.
 * @param request
 */
export async function commitBatch(request : CommitBatchRequest): Promise<boolean | IApiError> {
  try {
    await api.post('BrokerNotes/CommitBatch', request, {
      withCredentials: true,
    });

    return true;
  } catch (errorFromApi) {
    return constructErrorFromApi(errorFromApi);
  }
}
