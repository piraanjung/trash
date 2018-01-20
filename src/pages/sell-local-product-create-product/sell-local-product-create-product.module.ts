import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellLocalProductCreateProductPage } from './sell-local-product-create-product';
import { Camera, CameraOptions } from '@ionic-native/camera';

@NgModule({
  declarations: [
    SellLocalProductCreateProductPage,
  ],
  imports: [
    IonicPageModule.forChild(SellLocalProductCreateProductPage),
  ],
  providers: [
    Camera
  ]
})
export class SellLocalProductCreateProductPageModule {}
