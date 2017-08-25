import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MbaNotificationProvider, _userRegistred, User } from '../../providers';

@IonicPage({
  name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  form = {
    username: '',
    password: ''
  };

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public navParams: NavParams,
    public user: User,
    public notification: MbaNotificationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.user.login(this.form.username, this.form.password).then(() => {
      this.storage.get(_userRegistred).then((isRegistered) => {
        if (!isRegistered) {
          this.notification.registerNotificationDevice();
        }
        this.navCtrl.setRoot('home');
      });
    });
  }

  recoveyPassword() {
    console.log('recoveyPassword');
  }

}
