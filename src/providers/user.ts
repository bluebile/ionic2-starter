import { Injectable } from '@angular/core';
import { Adapter, Authentication } from '@mbamobi/authentication';
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

    return new Promise((resolve, reject) => {
      this.auth.authenticate().then((result) => {
        this.events.publish(LoginEvents.SUCCESS, result);
        resolve(result);
      }).catch((err) => {
        this.events.publish(LoginEvents.FAILURE, err);
        reject(err);
      });
    });
  }

  logout() {
    this.auth.clear();
  }

  getData() {
    return this.auth.getData();
  }
}
