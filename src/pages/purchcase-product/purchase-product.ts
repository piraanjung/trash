import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { PurchaseProductService } from "./purchase-product.service";
// import { ProductsService } from "../products/products.service";

/**
 * Generated class for the PurchaseProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'purchase-product'
})

@Component({
  selector: 'purchase-product',
  templateUrl: 'purchase-product.html',
  // providers: [PurchaseProductService, ProductsService]
})

export class PurchaseProductPage {

  images: any = []
  item: any = []
  products: any = []

  constructor(public navCtrl: NavController, public navParams: NavParams, ) {
  }

  ionViewDidLoad() {
    this.images = [
      { img: "./assets/item_images/slide1.jpg" },
      { img: "./assets/item_images/slide2.jpg" },
      { img: "./assets/item_images/slide3.jpg" },
      { img: "./assets/item_images/slide4.jpg" },
      { img: "./assets/item_images/slide5.jpg" },
    ]

    // this.productsService.get_products().subscribe(res => {
    //   this.products = res["results"];
    // });
  }

  go_to_promotions() {
    this.navCtrl.push('promotions')
  }

  get_product_details() {
    this.navCtrl.push('product-details')
  }
  go_to_productcategory(category){
    this.navCtrl.push('purchase-product-category', {
      cat : category
    })
  }

}
