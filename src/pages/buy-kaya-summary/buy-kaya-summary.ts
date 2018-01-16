import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Printer } from '@ionic-native/printer';


// import { BuyKayaPage } from '../buy-kaya/buy-kaya';

/**
 * Generated class for the BuyKayaSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  "name" : "buy-kaya-summary"
})
@Component({
  selector: 'page-buy-kaya-summary',
  templateUrl: 'buy-kaya-summary.html',
})
export class BuyKayaSummaryPage {
  organic_datas =[];
  recycle_datas =[];
  hazard_datas = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.organic_datas=[
      {
        'id':1,
        'name' : 'เศษอาหาร',
        'price' : 20,
        'unitcount' : 'กก.',
        'unit' : 'แต้ม',
        'total' : 2.5
      },
      {
        'id':2,
        'name' : 'ใบไม้',
        'price' : 10,
        'unitcount' : 'กก.',
        'unit' : 'แต้ม',
        'total' : 2
      },
    ];
    this.recycle_datas=[
      {
        'id':'r1',
        'name' : 'ขวด PET',
        'price' : 7,
        'unitcount' : 'กก.',
        'unit' : 'บาท',
        'total' : 2
      },
      {
        'id':'r2',
        'name' : 'กระดาษ',
        'price' : 10,
        'unitcount' : 'กก.',
        'unit' : 'บาท',
        'total' : 2.5
      },
    ];
    this.hazard_datas=[
      {
        'id':'h1',
        'name' : 'หลอดฟลูออเรสเซนต์',
        'price' : 200,
        'unitcount' : 'หลอด',
        'unit' : 'แต้ม',
        'total' : 2
      },
      {
        'id':'h2',
        'name' : 'ถ่านไฟฉาย AAA',
        'price' : 50,
        'unitcount' : 'ก้อน',
        'unit' : 'แต้ม',
        'total' : 2
      },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyKayaSummaryPage');
  }

  gotoBuyKaya(){
    this.navCtrl.push("buy-kaya");
  }

  // print(){
  //   if(this.printer.isAvailable()){
  //     console.log("ok")
  //     this.printer.print("_print")
  //   }else{
  //     console.log("no")
  //   }
  // }

}
