import { forwardRef, Injectable, Inject, ErrorHandler as ErrorHandlerAngular } from '@angular/core';
import { IonicErrorHandler, ModalController, ToastController } from 'ionic-angular';
import { Response } from '@angular/http';
import { HttpException } from '@ramonornela/http';
import { NoConnectionException } from '@ramonornela/http-plugins-ionic';
import { EnvToken } from '../app/app.env';

@Injectable()
export class ErrorHandler extends IonicErrorHandler implements ErrorHandlerAngular {

  constructor(
    private modalCtrl: ModalController,
    private toast: ToastController
    @Inject(forwardRef(() => EnvToken)) private env: string
  ) {
    super();
  }

  handleError(error: any): void {

    let originalError = error;

    if (error.rejection) {
      originalError = error.rejection;
    }

    if (originalError instanceof Response) { // workaround pular exception subscribe ou promise
      return;
    }

    if (originalError instanceof NoConnectionException) {
      let toast = this.toastCtrl.create({
        message: 'Sem conexão',
        duration: 4000,
        position: 'top'
      });

      toast.present();
    }

    if (originalError instanceof HttpException) {
      let toast = this.toastCtrl.create({
        message: originalError.message,
        duration: 4000,
        position: 'top'
      });

      toast.present();
    }

    if ('dev' === this.env) {
      super.handleError(error);
    }
  }
}

export const ERROR_HANDLER = {
  provide: ErrorHandlerAngular, useClass: ErrorHandler
};
