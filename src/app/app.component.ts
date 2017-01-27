import { Home, KeyStorageOnboard, Login, Onboard } from '../pages/pages';
import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Authentication } from '@mbamobi/authentication';
import { Nav, Platform } from 'ionic-angular';
import { Splashscreen, StatusBar, GoogleAnalytics } from 'ionic-native';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

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

    // troque o valor UA-90884928-1 por seu ID do google analytics
    GoogleAnalytics.startTrackerWithId('UA-90884928-1')
        .then(() => {
          console.log('Google analytics is ready now');
        }).catch(e => console.log('Error starting GoogleAnalytics', e));
  }

  ngAfterViewInit() {
    this.platform.ready().then(() => {
      this.openHome();
    });
  }

  openHome() {
    this.choiceHome().subscribe((page: any) => {
      this.nav.setRoot(page).then(() => {
        setTimeout(function(){
          Splashscreen.hide();
        }, 500);
      });
    });
  }

  choiceHome() {
    return new Observable<any>((observer: Observer<any>) => {
      if (Onboard) {
        this.storage.get(KeyStorageOnboard).then((data) => {
          if (!data) {
            observer.next(Onboard);
            observer.complete();
          }

          observer.next(this.choiceLoginOrHome());
          observer.complete();
        });
      } else {
        observer.next(this.choiceLoginOrHome());
        observer.complete();
      }
    });
  }

  choiceLoginOrHome(): any {
    if (Login) {
      if (!this.auth.has()) {
        return Login;
      }
    }

    return Home;
  }
}
