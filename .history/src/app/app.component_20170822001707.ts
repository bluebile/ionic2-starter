import { MbaNotification, _tagsStorageKey, _userRegistred } from './../providers/mba-notification';
import { Home, KeyStorageOnboard, Login, Onboard } from '../pages';
import { Component, ViewChild } from '@angular/core';
import { Authentication } from '@mbamobi/authentication';
import { Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Config } from '@mbamobi/configuration';
import { OneSignal } from '@ionic-native/onesignal';
import { Storage } from '@ionic/storage';
import { MbaNotificationProvider, ONESIGNAL_USER_ID } from '../providers/mba.notification';

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
    private notification: MbaNotificationProvider,
    private storage: Storage
  ) {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });
  }

  ngAfterViewInit() {
    this.platform.ready().then(() => {
      this.startNotification();
      this.openHome();
    });
  }

  startNotification() {
    this.storage.get(_userRegistred).then(
      (isResgistred) => {
      if (isResgistred) {
        return false;
      }
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
          this.registerNotificationDevice(ids);
        }
      );
    });
  }

  registerNotificationDevice(ids) {
    this.storage.get(_tagsStorageKey).then((tags) => {
      let params = {
        appBundle: this.config.get('appBundle'),
        dsIdentity: ids.userId,
        tags: JSON.parse(tags),
        devices: [ids.userId]
      };
      this.notification.registerClient(params).subscribe(
        () => {
          this.storage.set(_userRegistred, true);
          console.log('cliente registrado com sucesso');
        },
        (error) => {
           console.log('erro ao registrar cliente');
           console.log(error);
        }
      );
    });
  }

  openHome() {
    this.choiceHome().subscribe((page: any) => {
      this.nav.setRoot(page).then(() => {
        setTimeout(() => {
          this.splashscreen.hide();
        }, 500);
      });
    });
  }
}
