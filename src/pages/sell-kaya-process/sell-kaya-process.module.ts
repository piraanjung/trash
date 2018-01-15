import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellKayaProcessPage } from './sell-kaya-process';
import { QRCodeModule } from 'angular2-qrcode';
@NgModule({
  declarations: [
    SellKayaProcessPage,
  ],
  imports: [
    IonicPageModule.forChild(SellKayaProcessPage),
    QRCodeModule
  ],
})
export class SellKayaProcessPageModule {}
