import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { Adapter, Authentication } from '../modules/authentication';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {

  rootPage: any;

  constructor(public platform: Platform, adapter: Adapter, auth: Authentication) {
    adapter.setIdentity('12345678')
      .setCredential('123456');

    auth.authenticate().catch(() => {
      console.log('error');
    });
    this.platform.ready().then(() => {
      StatusBar.styleDefault();

      Splashscreen.hide();

      this.rootPage = HomePage;
    });
  }
}
