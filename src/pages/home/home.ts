import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'home'
})
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {

  tabCard: any;
  tabUserList: any;
  tabProfile: any;

  constructor() {
    this.tabCard = 'home-card';
    this.tabUserList = 'home-userList';
  }
}
