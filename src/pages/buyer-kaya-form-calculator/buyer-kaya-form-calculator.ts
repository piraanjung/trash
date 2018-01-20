import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@IonicPage({
  "name": "buyer-kaya-form-calculator"
})
@Component({
  selector: 'page-buyer-kaya-form-calculator',
  templateUrl: 'buyer-kaya-form-calculator.html',
})
export class BuyerKayaFormCalculatorPage {
  shortname: any ='กก.';

  item: any = {}
  items: any = []
  user: any = {}
  total_purchase_kaya: any = 0
  kaya_name: string = '';
  est_price: number = 0
  amount: number 
  total: number = 0
  address: string = 'เทศบาลตำบลพังโคน สกลนคร';

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.user = this.navParams.get('user')
    this.user = (typeof this.user != 'undefined' ? this.user : 0)
    this.item = this.navParams.get('item')
    this.item = (typeof this.user != 'undefined' ? this.item : 0)

    let total_purchase_kaya = localStorage.getItem("total_purchase_kaya")
    this.total_purchase_kaya = (total_purchase_kaya == null ? 0 : total_purchase_kaya)

    // localStorage.removeItem("purchase_kaya_list");
    this.items = JSON.parse(localStorage.getItem("purchase_kaya_list"))
    console.log(this.item)
    if (typeof this.item != 'undefined') {
      this.kaya_name = this.item.name + ' [ ' + this.item.kaya_type_name + ' ]'
      this.est_price = this.item.est_price
      this.shortname = this.item.short_name
    }

  }

  calculator(event) {
    this.amount = event
    this.total = this.est_price * this.amount;
  }

  set_purchase_kaya_list() {
    if (this.items == null || this.items.length <= 0) {
      this.items = []
      console.log(typeof this.items)
    }
    if(typeof this.items == 'string'){
      this.items = []
    }
    console.log(typeof this.items)

    this.items.push({
      id: this.item.id,
      name: this.item.name,
      est_price: this.item.est_price,
      amount: this.amount,
      total: this.total,
      unit: this.item.unit,
      short_name: this.item.short_name,
      kaya_type_name: this.item.kaya_type_name
    })

    this.total_purchase_kaya = this.total + parseFloat(this.total_purchase_kaya)

    localStorage.setItem('total_purchase_kaya', this.total_purchase_kaya)
    localStorage.setItem('purchase_kaya_list', JSON.stringify(this.items))

    this.presentToast()
    this.navCtrl.pop()
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'บันทึกรายการสำเร็จ',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

}
