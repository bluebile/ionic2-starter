import { Masks, Validators as ValidatorsInternal } from '../../util';
import { Home } from '../pages';
import { User } from '../../providers/providers';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { App, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  form: FormGroup;
  submitAttempted: boolean = false;

  mask = Masks.cpf;

  constructor(
    formBuilder: FormBuilder,
    private app: App,
    private toastCtrl: ToastController,
    private user: User
  ) {
    this.form = formBuilder.group({
      cpf: ['', Validators.compose([Validators.required, ValidatorsInternal.cpf ])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  validate(): boolean {
    if (this.form.valid) {
      return true;
    }

    let msg = '';

    if (this.form.controls['cpf'].hasError('required')) {
      msg = 'O CPF é obrigatório';
    } else if (this.form.controls['cpf'].hasError('invalid')) {
      msg = 'CPF inválido.';
    } else if (this.form.controls['password'].hasError('required')) {
      msg = 'A senha é obrigatória';
    }

    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

    toast.present();

    return false;
  }

  login(formData: any): void {
    this.submitAttempted = true;
    if (this.validate()) {
      this.user.login(formData.cpf.replace(/\D/g, ''), formData.password).then(() => {
        this.app.getActiveNav().setRoot(Home);
      });
    }
  }
}
