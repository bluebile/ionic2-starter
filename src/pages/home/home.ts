import { ProfilePage } from '../profile/profile';
import { CardPage } from './card/card';
import { ListPage } from './list/list';
import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {

  tabCard: any;
  tabList: any;
  tabProfile: any;

  constructor() {
    this.tabCard = CardPage;
    this.tabList = ListPage;
    this.tabProfile = ProfilePage;
  }
}
