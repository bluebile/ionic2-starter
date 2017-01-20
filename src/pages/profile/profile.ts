import { Login } from "../pages";
import { User } from '../../providers/providers';
import { Component } from '@angular/core';
import { App } from 'ionic-angular';

@Component({
	selector: 'page-profile',
	templateUrl: 'profile.html'
})
export class ProfilePage {

	constructor(private user: User, private app: App,) {
	}

	logout() {
		this.user.confirmLogout().then(() => {
			this.app.getActiveNav().setRoot(Login);
		}).catch(() => {
			// clicado no botao nao
		});
	}
}


