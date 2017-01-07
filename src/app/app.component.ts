import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Home } from '../pages/pages';

@Component({
  template: `<ion-nav></ion-nav>`
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  constructor(public platform: Platform) {
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
    this.nav.setRoot(Home).then(() => {
      Splashscreen.hide();
    });
  }
}
