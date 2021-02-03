import Swal from 'sweetalert2';
import { IApiError } from '../../../Redux/api.types';
import { multinesErrorToHtml } from '../../../Redux/Services/Api.utils';
import { getReferralLink, getReferrelInfo, IReferralResponse } from '../../../Redux/Services/Referral/Referral.api';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const GET_LINK_DELAY = 600;

export const getLinkReferral = async () : Promise<string | IApiError> => {
  // Fires up a parallel delay that takes GET_LINK_DELAY milliseconds to complete
  const delayPromise = delay(GET_LINK_DELAY);
  const result = await getReferralLink();

  if ((result as IApiError).errorCode) {
    const linkError = result as IApiError;
    Swal.fire({
      icon: 'error',
      title: 'Um erro ocorreu ao tentar gerar o link de presente.',
      html: multinesErrorToHtml(linkError.errorMessage),
    });
  }

  // Ensures at least GET_LINK_DELAY milliseconds have passed. If API takes more than the minimum loading time, this
  // will be finished and resolve straight away. When API completes too fast, this ensures at least the configured time
  // will pass
  await delayPromise;

  return result;
};

export const getInfoReferral = async () : Promise<IReferralResponse | IApiError> => {
  const result = await getReferrelInfo();

  if ((result as IApiError).errorCode) {
    const linkError = result as IApiError;
    Swal.fire({
      icon: 'error',
      title: 'Um erro ocorreu ao tentar carregar esta página.',
      html: multinesErrorToHtml(linkError.errorMessage),
    });
  }

  return result;
};

export const copyInvite = (textCopy: string) => {
  // Creates a dummy element, so we can copy it's value to clipboard
  const dummy = document.createElement('textarea');
  document.body.appendChild(dummy);
  dummy.value = textCopy;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);

  Swal.fire({
    icon: 'success',
    title: 'O convite foi copiado para seu clipboard.',
  });
};
