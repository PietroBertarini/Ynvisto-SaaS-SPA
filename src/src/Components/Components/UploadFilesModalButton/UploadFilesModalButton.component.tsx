import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React, { useState } from 'react';
import {
  ListItem, SvgIcon, DialogContent, DialogContentText, DialogTitle, DialogActions, Button, Dialog,
} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

import { v4 as uuidv4 } from 'uuid';

import { useStyles } from './UploadFilesModalButton.styles';
import { uploadFiles } from './UploadFilesModalButton.utils';

// Register the plugins
registerPlugin(FilePondPluginFileValidateSize, FilePondPluginFileValidateType);

export interface OwnProps {
    /**
     * Showing text of button
     */
    label: string;
    /**
     * Image Icon path of button
     */
    iconPath: any;
}

/**
 * Component from @LeftMenu that show a model for input some files
 * goes to a @path link.
 * @param label: The showing text from button
 * @param iconPath: IconPath to render at the left of @label.
 */
function UploadFilesModalButton({
  label, iconPath,
} : OwnProps) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [guid, setGuid] = useState('');
  const [files, setFiles] = useState([]);
  const [someFileError, setSomeFileError] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setSomeFileError(false);
    setFiles([]);
    setGuid(uuidv4());
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ListItem button className={classes.listItem} onClick={handleOpen}>
        <ListItemIcon style={{ minWidth: 40 }}>
          <SvgIcon style={{ color: '#B1B1B1' }} component={iconPath} viewBox="0 0 600 476.6" />
        </ListItemIcon>
        <ListItemText primary={label} style={{ color: '#B1B1B1' }} />
      </ListItem>
      <Dialog
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          color: '#fff',
        }}
      >
        <div className={classes.paper}>

          <DialogTitle className={classes.header}>Upload de Nota [BETA]</DialogTitle>
          <DialogContent>
            <DialogContentText className={classes.text}>
              Envie apenas arquivos .pdf no padrão SINACOR. Caso tenha dúvidas, entre em contato com a nossa equipe.
            </DialogContentText>

            <FilePond
              files={files}
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
              onupdatefiles={setFiles}
              allowMultiple
              acceptedFileTypes={['application/pdf']}
              labelFileTypeNotAllowed="Tipo do arquivo inválido"
              fileValidateTypeLabelExpectedTypes="Apenas arquivos .pdf"
              // maxFiles={50}
              maxFileSize="25MB"
              onprocessfiles={async () => {
                handleClose();
                await uploadFiles(guid);
              }}
              labelMaxFileSize="O tamanho máximo do arquivo pode ser até {filesize}"
              server={{
                url: process.env.REACT_APP_API_ENDPOINT,
                // process: './process',
                process: (fieldName, file, metadata, load, error, progress, abort) => {
                  const formData = new FormData();
                  formData.append(fieldName, file, file.name);
                  formData.append('guid', guid);
                  const request = new XMLHttpRequest();
                  request.open('POST', `${process.env.REACT_APP_API_ENDPOINT}/BrokerNotes/Upload`);
                  // Setting computable to false switches the loading indicator to infinite mode
                  request.upload.onprogress = (e) => {
                    progress(e.lengthComputable, e.loaded, e.total);
                  };
                  request.onload = function () {
                    if (request.status >= 200 && request.status < 300) {
                      load(request.responseText);// the load method accepts either a string (id) or an object
                      setSomeFileError(true);
                    } else {
                      error('Erro durante o Upload!');
                    }
                  };

                  request.withCredentials = true;
                  request.send(formData);
                  // expose an abort method so the request can be cancelled
                  return {
                    abort: () => {
                      // This function is entered if the user has tapped the cancel button
                      request.abort();
                      // Let FilePond know the request has been cancelled
                      abort();
                    },
                  };
                },
                revert: null,
                fetch: null,
              }}
              name="files"
              labelIdle='Arraste e solte suas notas ou <span class="filepond--label-action">
                             procure em seu dispositivo</span>'
            />
            <DialogContentText className={classes.text}>
              Suporte a XP, Clear, Rico, Guide e EasyInvest.
            </DialogContentText>
            <DialogContentText className={classes.text}>
              Para outras corretoras, verifique a disponibilidade com a equipe da Ynvisto.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            { someFileError && files.length > 0 && (
              <Button
                onClick={async () => {
                  handleClose();
                  await uploadFiles(guid);
                }}
                className={classes.textButton}
                autoFocus
              >
                Continuar
              </Button>
            )}
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
export default UploadFilesModalButton;
