import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseProductPage } from './purchase-product';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    PurchaseProductPage,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseProductPage),
    HttpClientModule
  ],
})
export class PurchaseProductPageModule {}
