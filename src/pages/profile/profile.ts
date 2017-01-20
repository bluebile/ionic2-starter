import { User } from '../../providers/providers';
import { Login } from '../pages';
import { Component } from '@angular/core';
import { App } from 'ionic-angular';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {

    constructor(private app: App, private user: User) {
    }

    logout() {
        this.user.confirmLogout().then(() => {
            this.app.getActiveNav().setRoot(Login);
        }).catch(() => {
            // clicado no botao nao
        });
    }
}
