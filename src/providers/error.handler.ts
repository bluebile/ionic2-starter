import { EnvToken } from '../app/app.env';
import { ErrorHandler as ErrorHandlerAngular, forwardRef, Inject, Injectable, } from '@angular/core';
import { Response } from '@angular/http';
import { HttpException } from '@ramonornela/http';
import { NoConnectionException } from '@ramonornela/http-plugins-ionic';
import { IonicErrorHandler, ModalController, ToastController } from 'ionic-angular';

@Injectable()
export class ErrorHandler extends IonicErrorHandler implements ErrorHandlerAngular {

  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
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
