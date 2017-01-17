import { Home, KeyStorageOnboard, Login, Onboard } from '../pages/pages';
import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Authentication } from '@mbamobi/authentication';
import { Nav, Platform } from 'ionic-angular';
import { Splashscreen, StatusBar } from 'ionic-native';

@Component({
  template: `<ion-nav></ion-nav>`
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  constructor(
    private auth: Authentication,
    private platform: Platform,
    private storage: Storage,
  ) {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }

  ngAfterViewInit() {
    this.platform.ready().then(() => {
      this.showHome();
    });
  }

  private showHome() {
    let page: any = Home;

    if (Onboard) {
      this.storage.get(KeyStorageOnboard).then((data) => {
        if (!data) {
          this.nav.setRoot(Onboard).then(() => {
            Splashscreen.hide();
          });
        }
      });
    }

    if (Login) {
      if (!this.auth.has()) {
        page = Login;
      }
   }

    this.nav.setRoot(page).then(() => {
      Splashscreen.hide();
    });
  }
}
