import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import { SellerSideMenuProvider } from '../../providers/seller-side-menu/seller-side-menu';
import { BuyerSideMenuProvider } from '../../providers/buyer-side-menu/buyer-side-menu';

@NgModule({
  declarations: [
    MainPage
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
  ],
  providers: [SellerSideMenuProvider, BuyerSideMenuProvider]
})
export class MainPageModule { }
