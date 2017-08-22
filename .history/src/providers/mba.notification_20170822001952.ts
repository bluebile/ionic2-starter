import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export const _tagsStorageKey = '_tagsStorageKey';
export const _userRegistred = '_userRegistred';


@Injectable()
export class MbaNotificationProvider {

  constructor(private http: Http) {}

  registerClient(params: any) {
    params['appBundle'] = this.config.get('appBundle');
    return this.http.request('notification-register-client', params);
  }

  updatetags(params) {
    return this.http.request('notification-update-tags', params);
  }

}
