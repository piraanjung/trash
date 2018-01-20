import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SellLocalProductDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  "name":"sell-local-product-dashboard"
})
@Component({
  selector: 'page-sell-local-product-dashboard',
  templateUrl: 'sell-local-product-dashboard.html',
})
export class SellLocalProductDashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellLocalProductDashboardPage');
  }

  createProducts(){
    this.navCtrl.push('sell-local-product-create-product')
  }

}
