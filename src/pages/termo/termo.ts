import { Home } from '../pages';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { App } from 'ionic-angular';

export const KEY = '_termo';

@Component({
  selector: 'page-termo',
  templateUrl: 'termo.html'
})
export class TermoPage {
  constructor(
    private app: App,
    private storage: Storage
  ) {}

  accept() {
    this.storage.set(KEY, true);
    this.app.getActiveNav().setRoot(Home);
  }
}
