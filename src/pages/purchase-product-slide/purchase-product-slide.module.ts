import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseProductSlidePage } from './purchase-product-slide';
import { PurchaseProductPageModule } from '../purchcase-product/purchase-product.module';

@NgModule({
  declarations: [
    PurchaseProductSlidePage,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseProductSlidePage),
    PurchaseProductPageModule
  ],
})
export class PurchaseProductSlidePageModule {}
