import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Authentication } from '@ramonornela/authentication';
import { Home } from '../pages/pages';

@Component({
  template: `<ion-nav></ion-nav>`
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  constructor(private platform: Platform, private auth: Authentication) {
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
    if (!this.auth.has()) {
      console.log('renderizar tela de login');
    }
    this.nav.setRoot(Home).then(() => {
      Splashscreen.hide();
    });
  }
}
