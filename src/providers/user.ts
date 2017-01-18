import { Injectable } from '@angular/core';
import { Adapter, Authentication } from '@mbamobi/authentication';
import { Events } from 'ionic-angular';

export const UserEvents = {
  LOGIN_SUCCESS: 'user.login.success',
  LOGIN_FAILURE: 'user.login.failure',
  LOGOUT: 'user.logout'
};

@Injectable()
export class User {
  constructor(
    private authAdapter: Adapter,
    private auth: Authentication,
    private events: Events) {}

  login(user: string, password: string) {
    this.authAdapter
        .setIdentity(user)
        .setCredential(password);

    return new Promise((resolve, reject) => {
      this.auth.authenticate().then((result) => {
        this.events.publish(UserEvents.LOGIN_SUCCESS, result);
        resolve(result);
      }).catch((err) => {
        this.events.publish(UserEvents.LOGIN_FAILURE, err);
        reject(err);
      });
    });
  }

  logout() {
    this.auth.clear();
    this.events.publish(UserEvents.LOGOUT, this.getData());
  }

  getData(): Object {
    return this.auth.getData();
  }
}
