import { Component } from '@angular/core';
import { ToastController, NavController } from 'ionic-angular';
import { GoogleAnalytics } from 'ionic-native';

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

      // Vamos registrar evento de click no GoogleAnalytics
      // TrackEvent(category, action, label, value, newSession)
      GoogleAnalytics.trackEvent('Recuperação de senha', 'Click', 'Requisitou nova senha');

      let toast = this.toastCtrl.create({
        message: 'E-mail enviado com sucesso!',
        duration: 3000,
        position: 'top'
      });

      toast.present();
      this.navCtrl.pop();
  }

    ngAfterViewInit() {
        // Vamos registrar o evento de abertura de tela
        GoogleAnalytics.trackView('Recuperação de senha');
    }
}
