import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellLocalProductDashboardPage } from './sell-local-product-dashboard';

@NgModule({
  declarations: [
    SellLocalProductDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(SellLocalProductDashboardPage),
  ],
})
export class SellLocalProductDashboardPageModule {}
