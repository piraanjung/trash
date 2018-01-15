import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IBankingPage } from '../../pages/i-banking/i-banking'
/**
 * Generated class for the IBankingBookbankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  // "name" : "i-banking-bookbank",
})
@Component({
  selector: 'page-i-banking-bookbank',
  templateUrl: 'i-banking-bookbank.html',
})
export class IBankingBookbankPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IBankingBookbankPage');
  }

  goToIBanking(){
    this.navCtrl.push(IBankingPage);
  }

  goToIBankingTransferMoney(){
    this.navCtrl.push("i-banking-transfer-money");
  }

}
