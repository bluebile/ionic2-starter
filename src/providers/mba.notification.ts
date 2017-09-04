import { Storage } from '@ionic/storage';
import { Config } from '@mbamobi/configuration';
import { Http } from '@mbamobi/http';
import { Inject, Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { DeviceToken } from '../app/app.env';
import { User } from './user';

export const _tagsStorageKey = '_tagsStorageKey';
export const _userRegistred = '_userRegistred';
export const _oneSignalUser = '_onesignaluserid';

@Injectable()
export class MbaNotificationProvider {

  constructor(private http: Http, @Inject(DeviceToken) private deviceInfo, private config: Config, private storage: Storage, private user: User) {
    let headers = {
      Authorization: this.config.get('mmApiKey'),
      'Content-Type': 'application/json; charset=utf-8'
    };
    this.http.setDefaultRequestOptions({ headers });
  }

  registerClient(params: any) {
    params['noAppBundle'] = this.deviceInfo.bundle;
    return this.http.request('notification-register-client', params);
  }

  listTags() {
    return this.http.request('notification-list-tags', {
      dsIdentity: this.user.getUserIdentity(),
      noAppBundle: this.deviceInfo.bundle
    }).toPromise();
  }

  updatetags(tags) {
    return this.http.request('notification-update-tags', this.buildTagsParam(tags)).toPromise();
  }

  buildTagsParam(tags) {
    let params = {}, arr = [];
    for (let tag of tags) {
      if (tag['isUserTag']) {
        arr.push(tag['idTag']);
      }
    }
    params['tags'] = arr;
    params['dsIdentity'] = this.user.getUserIdentity();
    params['noAppBundle'] = this.deviceInfo.bundle;
    console.log(params);
    return params;
  }

  registerNotificationDevice() {
    this.storage.get(_oneSignalUser).then((deviceId) => {
      if (!deviceId) {
        deviceId = 'fake-client';
      }
      this.storage.get(_tagsStorageKey).then((tags) => {
        let params = {
          noAppBundle: this.deviceInfo.bundle,
          dsIdentity: this.user.getUserIdentity(),
          tags: JSON.parse(tags),
          devices: [deviceId]
        };
        this.registerClient(params).subscribe(
          () => {
            this.storage.set(_userRegistred, true);
            console.log('cliente registrado com sucesso');
          },
          (error) => {
             console.log('erro ao registrar cliente');
             console.log(error);
          }
        );
      });
    });
  }

}
