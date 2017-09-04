import { Component, Inject } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { User } from '../../providers';
import { DeviceToken } from './../../app/app.env';

@IonicPage({
  name: 'mural'
})
@Component({
  selector: 'mural-page',
  templateUrl: 'mural.html'
})
export class MuralPage {
  constructor(public navCtrl: NavController, public user: User, @Inject(DeviceToken) public deviceInfo) {}
}
