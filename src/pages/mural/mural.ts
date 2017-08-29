import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { User } from '../../providers';

@IonicPage({
  name: 'mural'
})
@Component({
  selector: 'mural-page',
  templateUrl: 'mural.html'
})
export class MuralPage {
  constructor(public navCtrl: NavController, public user: User) {}
}
