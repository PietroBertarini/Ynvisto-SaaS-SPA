export enum ApiErrorCode {
  BrokerNoteImportingError = 'BrokerNoteImportingError',
  BrokerNoteImportingWarning = 'BrokerNoteImportingWarning',
  UnknownError = 'UnknownError',
}

export interface IApiError extends IApiErrorModel {
  httpStatusCode?: number,
}

export interface IApiErrorModel{
  errorMessage: string,
  errorCode: ApiErrorCode
}
