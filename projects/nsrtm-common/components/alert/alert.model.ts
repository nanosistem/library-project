export interface ErrorCampo {
  campo?: string;
  mensaje?: string;
}

export interface ErrorModel {
  codigo: string;
  mensaje: string;
  errores?: ErrorCampo[];
}

export interface Alerta {
  message?: string;
  classname?: string;
  delay?: number;
  title?: string;
  errores?: ErrorCampo[];
}

export type IHttpResponseError = {
  codigo?: string;
  errores?: ErrorCampo[];
  mensaje?: string;
  tipMen?: number;
};

export enum TIPO_MENSAJE_ERR_VAL {
  DANGER = 0,
  WARNING = 1,
  INFO = 2,
}
