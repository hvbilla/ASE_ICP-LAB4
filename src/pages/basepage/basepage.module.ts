import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasepagePage } from './basepage';

@NgModule({
  declarations: [
    BasepagePage,
  ],
  imports: [
    IonicPageModule.forChild(BasepagePage),
  ],
})

export class BasepagePageModule {}
