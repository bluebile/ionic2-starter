import { Component } from '@angular/core';
import { ToastController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-recovery-password',
  templateUrl: 'recoveryPassword.html'
})
export class RecoveryPasswordPage {
  constructor(private toastCtrl: ToastController, private navCtrl: NavController) {}

  /**
   * Função para recuperação de senha do usuário.
   */
  recoveryPassoword() {
      let toast = this.toastCtrl.create({
        message: 'E-mail enviado com sucesso!',
        duration: 3000,
        position: 'top'
      });

      toast.present();
      this.navCtrl.pop();
  }
}
