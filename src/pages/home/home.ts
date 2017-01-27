import { ProfilePage } from '../profile/profile';
import { CardPage } from './card/card';
import { UserListPage } from './userlist/userList';
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
    this.tabProfile = ProfilePage;
  }


  public logout()
  {
    console.log('Logout');
  }
}
