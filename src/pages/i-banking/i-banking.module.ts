import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IBankingPage } from './i-banking';

@NgModule({
  declarations: [
    IBankingPage,
  ],
  imports: [
    IonicPageModule.forChild(IBankingPage),
  ],
})
export class IBankingPageModule {}
