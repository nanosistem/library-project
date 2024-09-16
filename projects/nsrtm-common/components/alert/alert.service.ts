import { Injectable } from '@angular/core';
import { Alerta, ErrorCampo, ErrorModel, IHttpResponseError, TIPO_MENSAJE_ERR_VAL } from './alert.model';

@Injectable({ providedIn: 'root' })
export class AlertService {
	toasts: Alerta[] = [];

	success(message: string, duration = 5000) {
		this.show(message, 'bg-alert-success mb-1', duration);
	}

	error(
		message: string = 'Error',
		errores: ErrorCampo[] = [],
		delay = 5000
	) {
		this.show(message, 'bg-alert-danger mb-1', delay, errores);
	}

	errorModel(errorModel: ErrorModel) {
		const message: string = `${errorModel.codigo} - ${errorModel.mensaje}`;
		this.show(message, 'bg-alert-danger mb-1', 10000, errorModel.errores);
	}

	warning(
		message: string,
		errores: ErrorCampo[] = [],
		duration = 6000
	) {
		this.show(message, 'bg-alert-warning mb-1', duration, errores);
	}

	info(message: string = '', errores: ErrorCampo[] = [], delay = 5000) {
		this.show(message, 'bg-alert-info mb-1', delay, errores);
	}

	show(
		message: string,
		clasname: string,
		delay: number,
		errores?: ErrorCampo[]
	) {
		this.toasts.push({
			message: message,
			classname: clasname,
			delay: delay,
			errores: errores,
		});
	}

	/**
	 * @deprecated Usar metodo generic().
	 */
	showAlertErrGeneric(error: IHttpResponseError, delay = 5000) {
		this.handleHttpError(error, delay);
	}

  handleHttpError(error: IHttpResponseError, delay = 5000) {
		const tipoMensaje = error?.tipMen ?? TIPO_MENSAJE_ERR_VAL.DANGER;
		const mensaje = error?.mensaje ?? 'Hubo un error';
		const errores = error?.errores ?? [];

		if (tipoMensaje === TIPO_MENSAJE_ERR_VAL.INFO)
			return this.info(mensaje, errores, delay);
		if (tipoMensaje === TIPO_MENSAJE_ERR_VAL.WARNING)
			return this.warning(mensaje, errores, delay);
		if (tipoMensaje === TIPO_MENSAJE_ERR_VAL.DANGER)
			return this.error(mensaje, errores, delay);
		return this.error(mensaje, errores, delay);
	}

	remove(toast: any | null) {
		this.toasts = this.toasts.filter((t) => t != toast);
	}
}


