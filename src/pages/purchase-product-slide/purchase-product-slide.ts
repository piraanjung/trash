import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PurchaseProductPage } from '../../pages/purchcase-product/purchase-product'
/**
 * Generated class for the PurchaseProductSlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  // name : 'purchase-product-slide'
})
@Component({
  selector: 'page-purchase-product-slide',
  templateUrl: 'purchase-product-slide.html',
})
export class PurchaseProductSlidePage {

  slides = [
    {
      title: "ยินดีต้อนรับสู่ <br>Refuze Shopping Online",
      description: "แหล่งรวมสินค้าราคาถูก  โปรโมชั่นโดนใจ <br>สิทธิพิเศษสำหรับสมาชิก Refuze เท่านั้น",
      image: "./assets/imgs/purchase_product/purchase_product_slide1.png",
    },
    {
      title: "แลกซื้อสินค้าด้วยเงินขายขยะ",
      description: "<b>ท่านสามารถนำเงินสะสมจากการขายขยะ<br>มาแลกซื้อสินค้าในราคาพิเศษ<br>เพื่อสมาชิกเท่านั้น</b> ",
      image: "./assets/imgs/purchase_product/purchase_product_slide2.png",
    },
    {
      title: "หรือ ใช้แต้มสะสมแลกสินค้า",
      description: "<b>ท่านสามารถนำแต้มสะสมมาแลกซื้อสินค้า<br>โดยไม่ต้องจ่ายเงิน</b> ",
      image: "./assets/imgs/purchase_product/purchase_product_slide3.png",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseProductSlidePage');
  }

  goToPurchaseProduct(){
    this.navCtrl.push(PurchaseProductPage);
  }

}
