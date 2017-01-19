import { User } from '../../providers/providers';
import { Component } from '@angular/core';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  constructor(private user: User) {}

  logout() {
    this.user.confirmLogout().then(() => {
      // confirmando
    }).catch(() => {
      // clicado no botao nao
    });
  }
}
