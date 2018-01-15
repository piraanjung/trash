import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IBankingBookbankPage } from './i-banking-bookbank';

@NgModule({
  declarations: [
    IBankingBookbankPage,
  ],
  imports: [
    IonicPageModule.forChild(IBankingBookbankPage),
  ],
})
export class IBankingBookbankPageModule {}
