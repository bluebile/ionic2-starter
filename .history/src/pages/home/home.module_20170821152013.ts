import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { MuralIonicModule, MuralComponent } from '@mbamobi/mural-ionic';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    MuralIonicModule.forRoot()
  ],
  exports: [
    HomePage
  ],
  entryComponents: [
    MuralComponent
  ]
})
export class HomeModule {}
