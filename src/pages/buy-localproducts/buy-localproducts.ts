import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuyLocalproductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  "name" : "buy-localproducts",
})
@Component({
  selector: 'page-buy-localproducts',
  templateUrl: 'buy-localproducts.html',
})
export class BuyLocalproductsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyLocalproductsPage');
  }

  goToBuyLocalProductInfo(){
    this.navCtrl.push("buy-localproducts-info");
  }

}
