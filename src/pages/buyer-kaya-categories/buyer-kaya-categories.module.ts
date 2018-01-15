import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyerKayaCategoriesPage } from './buyer-kaya-categories';
import { KayaListServiceProvider } from '../../providers/kaya-list-service/kaya-list-service';

@NgModule({
  declarations: [
    BuyerKayaCategoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyerKayaCategoriesPage),
  ],
  providers: [KayaListServiceProvider]
})
export class BuyerKayaCategoriesPageModule { }
