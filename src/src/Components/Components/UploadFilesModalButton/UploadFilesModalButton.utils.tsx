import Swal from 'sweetalert2';
import '../../../Theme/sweetalert2/sweetalert2.scss';
import '../../../Theme/filepond.min.css';
import { commitBatch } from '../../../Redux/Services/BrokerNotesBatch/BrokerNotesBatch.api';
import { ApiErrorCode, IApiError } from '../../../Redux/api.types';
import { CommitBatchRequest } from '../../../Redux/Services/BrokerNotesBatch/BrokerNotesBatch.types';
import { multinesErrorToHtml } from '../../../Redux/Services/Api.utils';

const StartProcessing = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
});
const SuccessProcessing = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 9000,
  timerProgressBar: true,
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
  onAfterClose: () => {
    window.location.reload();
  },
});
const StartError = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: true,
  confirmButtonText: 'Detalhes',
});

export async function uploadFiles(guid: string) {
  StartProcessing.fire({
    icon: 'info',
    title: 'Processando as notas de corretagem',
  });
  const commitResult = await commitBatch({ batchId: guid } as CommitBatchRequest);
  const error = commitResult as IApiError;
  if (!error?.errorCode) {
    await SuccessProcessing.fire({
      icon: 'success',
      title: 'Notas Importadas!',
    });
    return;
  }

  if (error?.errorCode === ApiErrorCode.BrokerNoteImportingWarning) {
    StartError.fire({
      icon: 'warning',
      title: 'Alerta em algumas notas',
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          icon: 'warning',
          title: 'Alerta!',
          html: multinesErrorToHtml(error.errorMessage),
          onAfterClose: () => {
            window.location.reload();
          },
        });
      }
    });
    return;
  }

  StartError.fire({
    icon: 'error',
    title: 'Erro na importação de algumas notas ',
  }).then((result) => {
    if (result.value) {
      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        html: multinesErrorToHtml(error.errorMessage),
        onAfterClose: () => {
          window.location.reload();
        },
      });
    }
  });
}
