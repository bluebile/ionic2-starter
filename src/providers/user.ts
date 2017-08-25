import { Config } from '@mbamobi/configuration';
import { Injectable } from '@angular/core';
import { Http } from '@mbamobi/http';

@Injectable()
export class User {

  private data: any;
  private idStorage: string = '_appAuthLocalstorage';

  constructor(public http: Http, public config: Config) {}

  login(username: string, password: string) {
    return new Promise((resolve) => {
      const user = {
        apiKey: this.config.get('mmApiKey'),
        dsIdentity: username,
        user: {
          user: username,
          test: password.length
        }
      };
      localStorage.setItem(this.idStorage, JSON.stringify(user));
      this.data = user;
      resolve();
    });
  }

  logout() {
    return new Promise((resolve) => {
      if (this.getData()) {
        localStorage.removeItem(this.idStorage);
        resolve();
      }
    });
  }

  has() {
    let data = localStorage.getItem(this.idStorage);
    if (data) {
      this.data = JSON.parse(data);
      return true;
    }
    return false;
  }

  getData() {
    return this.data;
  }

  getUserIdentity() {
    if (this.getData()) {
      return this.getData()['dsIdentity'];
    }
    return null;
  }

  getApiKey() {
    return this.getData()['apiKey'];
  }

}
