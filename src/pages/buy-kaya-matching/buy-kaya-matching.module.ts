import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyKayaMatchingPage } from './buy-kaya-matching';

import { BuyersServiceProvider } from '../../providers/buyers-service/buyers-service';

@NgModule({
  declarations: [
    BuyKayaMatchingPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyKayaMatchingPage)
  ],
  providers: [BuyersServiceProvider]
})
export class BuyKayaMatchingPageModule { }
