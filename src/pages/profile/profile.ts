import { User } from '../../providers';
import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { Login } from '../index';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(private app: App, private user: User) {}

  logout() {
    this.user.confirmLogout().then(() => {
      this.app.getRootNav().setRoot(Login);
    }).catch(() => {
      // clicado no botao nao
    });
  }
}
