import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { User } from '../../providers';

@IonicPage({
  name: 'home'
})
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public user: User) {}
}
