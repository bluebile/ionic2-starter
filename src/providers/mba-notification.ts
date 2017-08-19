import { Config } from '@mbamobi/configuration';
import { Http } from '@mbamobi/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MbaNotification {
  constructor(private http: Http, private config: Config) {}

  registerClient(clientId) {
    let params = {
      appBundle: this.config.get('appBundle'),
      dsIdentity: clientId
    };
    return this.http.request('notification-register-client', params);
  }
}
