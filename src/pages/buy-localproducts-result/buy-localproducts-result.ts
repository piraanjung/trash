import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuyLocalproductsResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  "name" : "buy-localproducts-result",
})
@Component({
  selector: 'page-buy-localproducts-result',
  templateUrl: 'buy-localproducts-result.html',
})
export class BuyLocalproductsResultPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyLocalproductsResultPage');
  }

  goToLocalProducts(){
    this.navCtrl.push("localproducts");
  }

  goToBuyLocalProducts(){
    this.navCtrl.push("buy-localproducts");
  }

}
