import { User } from '../../providers/providers';
import { Component } from '@angular/core';

@Component({
    selector: 'home-page',
    templateUrl: 'home.html'
})
export class HomePage {

  constructor(private user: User) {}

  logout() {
    this.user.confirmLogout().then(() => {
      // confirmando
    }).catch(() => {
      // clicado no botao nao
    });
  }
}
