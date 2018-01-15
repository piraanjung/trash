import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyerKayaPurchaseListPage } from './buyer-kaya-purchase-list';
import { BuyKayaServiceProvider } from '../../providers/buy-kaya-service/buy-kaya-service';

@NgModule({
  declarations: [
    BuyerKayaPurchaseListPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyerKayaPurchaseListPage),
  ],
  providers: [BuyKayaServiceProvider]
})
export class BuyerKayaPurchaseListPageModule { }
