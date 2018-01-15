import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BuyKayaMatchingPage } from '../../pages/buy-kaya-matching/buy-kaya-matching';


@IonicPage()
@Component({
  selector: 'page-buy-kaya',
  templateUrl: 'buy-kaya.html',
})
export class BuyKayaPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private storage: Storage) {
  }

  goto_buyer(cat:string) {
    // this.navCtrl.push('buy-kaya-choose-category');
    this.navCtrl.push(BuyKayaMatchingPage);
  }

  gotoCustomerAppointment() {
    this.navCtrl.push("buy-kaya-appointment");
  }

  gotoSettings() {
    this.navCtrl.push("buyer-setting");
  }

  ionViewDidLoad() {

    this.storage.get('currentUser').then((res) => {
      // console.log(res);
     // if (res == null) this.navCtrl.push('login');
    });
    // localStorage.removeItem("purchase_kaya_list")
    // localStorage.removeItem("total_purchase_kaya")
  }

}