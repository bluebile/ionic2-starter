import { Injectable } from '@angular/core';
import { Adapter, Authentication } from '@ramonornela/authentication';
import { Events } from 'ionic-angular';

export const LoginEvents = {
  SUCCESS: 'login.success',
  FAILURE: 'login.failure'
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

    return this.auth.authenticate().then((result) => {
      this.events.publish('login.success', result);
    }).catch((err) => {
      this.events.publish('login.error', err);
    });
  }

  logout() {
    this.auth.clear();
  }

  getData() {
    return this.auth.getData();
  }
}
