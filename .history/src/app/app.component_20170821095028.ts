import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Config } from '@mbamobi/configuration';
import { OneSignal } from '@ionic-native/onesignal';
import { Storage } from '@ionic/storage';
import { MbaNotification } from '../providers/mba.notification';

@Component({
  template: `<ion-nav></ion-nav>`
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  constructor(
    private platform: Platform,
    private splashscreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal: OneSignal,
    private config: Config,
    private notification: MbaNotification,
    private storage: Storage
  ) {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });
  }

  ngAfterViewInit() {
    this.platform.ready().then(() => {
      let settings = {
        kOSSettingsKeyAutoPrompt: true,
        kOSSettingsKeyInAppLaunchURL: false
      };
      this.oneSignal.startInit(
        this.config.get('onesingalAppId'),
        this.config.get('googleProjectNumber')
      );
      this.oneSignal.iOSSettings(settings);
      this.oneSignal.endInit();
      this.oneSignal.getIds().then(
        (ids) => {
          this.notification.registerClient(ids.userId).subscribe(
            () => {
              console.log('cliente registrado com sucesso');
            },
            (error: any) => {
               console.log('erro ao registrar cliente');
               console.log(error);
            }
          );
        }
      );
      this.openHome();
    });
  }

  openHome() {
    this.nav.setRoot('home').then(() => {
      this.splashscreen.hide();
    });
  }
}
