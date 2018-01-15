import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuyLocalproductsConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  "name" : "buy-localproducts-confirm",
})
@Component({
  selector: 'page-buy-localproducts-confirm',
  templateUrl: 'buy-localproducts-confirm.html',
})
export class BuyLocalproductsConfirmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyLocalproductsConfirmPage');
  }

  goToBuyLocalProductResult(){
    this.navCtrl.push("buy-localproducts-result");
  }

}
