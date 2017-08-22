import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export const USER_ID = 'onesignal_userid';

@Injectable()
export class MbaNotificationProvider {

  constructor(public http: Http) {
    console.log('Hello MbaNotificationProvider Provider');
  }

}
