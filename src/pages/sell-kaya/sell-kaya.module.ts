import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellKayaPage } from './sell-kaya';
import { SellKayaServiceProvider } from '../../providers/sell-kaya-service/sell-kaya-service';

@NgModule({
  declarations: [
    SellKayaPage,
  ],
  imports: [
    IonicPageModule.forChild(SellKayaPage),
  ],
  providers: [SellKayaServiceProvider]
})
export class SellKayaPageModule { }
