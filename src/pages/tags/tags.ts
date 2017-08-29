import { MbaNotificationProvider } from './../../providers/mba.notification';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'tags'
})
@Component({
  selector: 'page-tags',
  templateUrl: 'tags.html',
})
export class TagsPage {
  tags: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public mbaNotification: MbaNotificationProvider) {
  }

  ionViewDidLoad() {
    this.mbaNotification.listTags().then((res) => {
      this.tags = res.json();
    });
  }

}
