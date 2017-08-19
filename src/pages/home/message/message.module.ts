import { MessagePage } from './message';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    MessagePage
  ],
  imports: [
    IonicPageModule.forChild(MessagePage)
  ],
  exports: [
    MessagePage
  ]
})
export class MessageModule {}
