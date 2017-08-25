import { DeviceToken } from './app.env';
import { _oneSignalUser, _userRegistred, MbaNotificationProvider, User } from './../providers';
import { Component, Inject, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Config } from '@mbamobi/configuration';
import { OneSignal } from '@ionic-native/onesignal';
import { Storage } from '@ionic/storage';
import { AppVersion } from '@ionic-native/app-version';

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
    @Inject(DeviceToken) private deviceInfo,
    private appVersion: AppVersion,
    private user: User,
    private notification: MbaNotificationProvider,
    private storage: Storage
  ) {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });
  }

  ngAfterViewInit() {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.appVersion.getVersionNumber().then((version) => {
          this.deviceInfo['version'] = version;
          this.appVersion.getPackageName().then((appBundle) => {
            this.deviceInfo['bundle'] = appBundle;
            this.startNotification();
            this.openHome();
          });
        });
        return;
      }
      this.startNotification().then(() => this.choiceLoginOrHome());
    });
  }

  startNotification() {
    return new Promise((resolve) => {
      if (this.platform.is('cordova')) {
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
            this.storage.set(_oneSignalUser, ids.userId);
            resolve();
          }
        );
        return;
      }
      resolve();
    });
  }

  choiceLoginOrHome() {
    if (this.user.has()) {
      this.storage.get(_userRegistred).then((isRegistered) => {
        console.log(isRegistered);
        if (!isRegistered) {
          this.notification.registerNotificationDevice();
        }
        this.openHome();
      });
      return;
    }
    this.openLogin();
  }

  openLogin() {
    this.nav.setRoot('login').then(() => {
      setTimeout(() => {
        this.splashscreen.hide();
      }, 500);
    });
  }

  openHome() {
    this.nav.setRoot('home').then(() => {
      setTimeout(() => {
        this.splashscreen.hide();
      }, 500);
    });
  }
}
