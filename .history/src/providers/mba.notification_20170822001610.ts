import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '@mbamobi/configuration';
import 'rxjs/add/operator/map';

export const ONESIGNAL_USER_ID = 'onesignal_userid';

@Injectable()
export class MbaNotificationProvider {

  constructor(private http: Http, private config: Config) {}

  registerClient(params: any) {
    return this.http.request('notification-register-client', params);
  }

}
