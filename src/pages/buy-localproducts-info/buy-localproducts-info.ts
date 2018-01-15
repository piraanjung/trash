import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuyLocalproductsInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  "name" : "buy-localproducts-info",
})
@Component({
  selector: 'page-buy-localproducts-info',
  templateUrl: 'buy-localproducts-info.html',
})
export class BuyLocalproductsInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyLocalproductsInfoPage');
  }

  goToBuyLocalProductConfirm(){
    this.navCtrl.push("buy-localproducts-confirm");
  }

}
