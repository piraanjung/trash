import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage({
  "name": "buyer-kaya-purchase-completed"
})
@Component({
  selector: 'page-buyer-kaya-purchase-completed',
  templateUrl: 'buyer-kaya-purchase-completed.html',
})
export class BuyerKayaPurchaseCompletedPage {

  user: any = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, 
   private storage :Storage) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad BuyerKayaPurchaseCompletedPage');
    this.storage.get('current_seller').then((val) => {
      this.user = val
    });
    console.log(this.user)
    localStorage.removeItem("purchase_kaya_list");
    localStorage.removeItem("total_purchase_kaya");
    localStorage.getItem('purchase_kaya_list');
  }

  goto_kaya_categories() {
    // this.navCtrl.push('buy-kaya-choose-category')
    this.navCtrl.push("buy-kaya-matching")
  }

  goto_main_page() {
    this.navCtrl.push("buy-kaya")
  }

}
