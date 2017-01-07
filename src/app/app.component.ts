import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { HttpAdapter, Authentication } from '../modules/authentication';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {

  rootPage: any;

  constructor(public platform: Platform, adapter: HttpAdapter) {
    adapter.setUrl('login')
      .setIdentity('12345678')
      .setCredential('123456');

    adapter.authenticate();
    this.platform.ready().then(() => {
      StatusBar.styleDefault();

      Splashscreen.hide();

      this.rootPage = HomePage;
    });
  }
}
