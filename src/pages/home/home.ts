import { CardPage } from './card/card';
import { UserListPage } from './user-list/user-list';
import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {

  tabCard: any;
  tabUserList: any;
  tabProfile: any;

  constructor() {
    this.tabCard = CardPage;
    this.tabUserList = UserListPage;
  }
}
