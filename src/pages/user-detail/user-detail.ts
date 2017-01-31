import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {UserModel} from "../../services/user/user.model";

@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html'
})
export class UserDetailPage {

  user: UserModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

     this.user  = this.navParams.get('user');
     console.log(this.user);
  }

}
