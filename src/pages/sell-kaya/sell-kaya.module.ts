import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellKayaPage } from './sell-kaya';
import { SellKayaServiceProvider } from '../../providers/sell-kaya-service/sell-kaya-service';
import { PurchaseProductSlidePageModule } from '../purchase-product-slide/purchase-product-slide.module';

@NgModule({
  declarations: [
    SellKayaPage,
  ],
  imports: [
    IonicPageModule.forChild(SellKayaPage),
    PurchaseProductSlidePageModule
  ],
  providers: [SellKayaServiceProvider]
})
export class SellKayaPageModule { }
