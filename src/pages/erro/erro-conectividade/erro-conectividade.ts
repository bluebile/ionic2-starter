import { Component } from '@angular/core';
import { Http } from '@mbamobi/http';
import { Events, Platform, ToastController, ViewController } from 'ionic-angular';
import { Diagnostic, Network } from 'ionic-native';

@Component({
  selector: 'erro-conectividade',
  templateUrl: 'erro-conectividade.html'
})

export class ErroConectividadePage {

  isIos: boolean;

  constructor(
    private events: Events,
    private http: Http,
    private toastCtrl: ToastController,
    private viewCtrl: ViewController,
    platform: Platform
  ) {
    this.isIos = platform.is('ios');
  }

  retry() {
    if (Network.type === 'none') {
      const toast = this.toastCtrl.create({
        message: 'Verifique a conexão!',
        duration: 3000,
        position: 'top'
      });

      toast.present();

      return;
    }

    this.viewCtrl.dismiss(null, null, {
      animate: false
    });
    if (this.http.canRetry()) {
      this.http.retryRequest().subscribe((res) => {
        this.events.publish('connection.retry', res, this.http.getLastRequest());
      });
    }
  }

  settings() {
    Diagnostic.switchToWifiSettings();
  }
}
