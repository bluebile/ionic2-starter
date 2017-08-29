import { Mural, MuralIonicModule } from '@mbamobi/mural-ionic';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MuralPage } from './mural';

@NgModule({
  declarations: [
    MuralPage
  ],
  imports: [
    IonicPageModule.forChild(MuralPage),
    MuralIonicModule.forRoot()
  ],
  entryComponents: [
    Mural
  ]
})
export class MuralPageModule {}
