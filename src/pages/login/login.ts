import { User } from '../../providers/providers';
import { Masks, Validators as ValidatorsInternal } from '../../util';
import { Home, RecoveryPasswordPage, Termo } from '../pages';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { App, LoadingController, ToastController } from 'ionic-angular';
import { GoogleAnalytics } from 'ionic-native';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  form: FormGroup;

  mask = Masks.cpf;

  constructor(formBuilder: FormBuilder,
            private app: App,
            private loadingCtrl: LoadingController,
            private storage: Storage,
            private toastCtrl: ToastController,
            private user: User) {
    this.form = formBuilder.group({
      cpf: [ '', Validators.compose([ Validators.required, ValidatorsInternal.cpf ]) ],
      password: [ '', Validators.compose([ Validators.required ]) ],
    });

    GoogleAnalytics.trackView('Login') .then(() => {
      console.log('Sucesso ao registrar o acesso a página Login ( Analytics )');
    }).catch(e => console.log('Error ao registrar acesso a página login ( Analytics )', e));
  }

  validate(): boolean {
    if (this.form.valid) {
      return true;
    }

    let msg = '';

    if (this.form.controls[ 'cpf' ].hasError('required')) {
      msg = 'O CPF é obrigatório!';
    } else if (this.form.controls[ 'cpf' ].hasError('invalid')) {
      msg = 'CPF inválido.';
    } else if (this.form.controls[ 'password' ].hasError('required')) {
      msg = 'A senha é obrigatória';
    }

    const toast = this.toastCtrl.create({
        message: msg,
        duration: 3001,
        position: 'top'
    });

    toast.present();

    return false;
  }

  login(formData: any): void {
    if (!this.validate()) {
      return;
    }

    const loading = this.loadingCtrl.create();
    loading.present();

    this.user.login(formData.cpf.replace(/\D/g, ''), formData.password).then(() => {
      loading.dismiss();
      if (Termo) {
        this.showTermo();
        return;
      }
      this.app.getActiveNav().setRoot(Home);
    }).catch(() => {
      loading.dismiss();
    });
  }

  showTermo() {
    this.storage.get('_termo').then((data) => {
      if (data === true) {
        this.app.getActiveNav().setRoot(Home);
        return;
      }

      this.app.getActiveNav().setRoot(Termo);
    });
  }

  recoveyPassword() {
    this.app.getActiveNav().push(RecoveryPasswordPage);
  }
}
