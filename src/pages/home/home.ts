import { Component } from '@angular/core';
import { ListPage } from "../list/list";
import { CardPage } from "../card/card";
import { ProfilePage } from "../profile/profile";

@Component({
    selector: 'home-page',
    templateUrl: 'home.html'
})
export class HomePage {

  private tabCard: any;
  private tabList: any;
  private tabProfile: any;

  constructor() {
    this.tabCard = CardPage;
    this.tabList = ListPage;
    this.tabProfile = ProfilePage;
  }
}
