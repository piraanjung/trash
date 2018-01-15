import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { BuyKayaServiceProvider } from '../../providers/buy-kaya-service/buy-kaya-service';
import { BuyerKayaPurchaseCompletedPage } from '../../pages/buyer-kaya-purchase-completed/buyer-kaya-purchase-completed'

@IonicPage({
  // "name": "buyer-kaya-purchase-list"
})
@Component({
  selector: 'page-buyer-kaya-purchase-list',
  templateUrl: 'buyer-kaya-purchase-list.html',
})
export class BuyerKayaPurchaseListPage {

  user: any = {}
  items: any = []
  address: string = 'เทศบาลตำบลพังโคน สกลนคร'
  total_purchase_kaya: any

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController,
    private BuyKayaService: BuyKayaServiceProvider,
    private toastCtrl: ToastController) { }

  ionViewDidLoad() {
    this.user = this.navParams.get('user')
    this.user = (typeof this.user != 'undefined' ? this.user : 0)
    let items = localStorage.getItem("purchase_kaya_list")
    this.items = JSON.parse(items)

    let total_purchase_kaya = (localStorage.getItem("total_purchase_kaya") == null ? 0 : localStorage.getItem("total_purchase_kaya"))
    this.total_purchase_kaya = total_purchase_kaya
  }

  set_kaya_invoice() {
    let confirm = this.alertCtrl.create({
      title: 'แจ้งเตือน',
      message: 'คุณต้องการบันทึกข้อมูลการซื้อขยะหรือไม่ ?',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            // console.log('Disagree clicked');
          }
        },
        {
          text: 'ตกลง',
          handler: () => {
            // console.log('Agree clicked');
            // this.goto_kaya_purchase_completed()
            this.set_kaya_profile()
          }
        }
      ]
    });
    confirm.present();
  }

  goto_kaya_categories() {
    this.navCtrl.pop()
  }

  goto_kaya_purchase_completed() {
    this.presentToast()
    this.navCtrl.push(BuyerKayaPurchaseCompletedPage)
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'บันทึกรายการสำเร็จ',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  set_kaya_profile() {
    console.log(this.user.id)
    let param = {
      items: this.items,
      seller_id: (typeof this.user != 'undefined' ? this.user.id : 0),
      buyer_id: 1,
      total_purchase_kaya: this.total_purchase_kaya,
      kaya_type_id: 1,
      acc_bank_id: this.user.account_bank_id || 0,
    }
    
    this.BuyKayaService.set_kaya_profile(param).subscribe(res => {
      this.goto_kaya_purchase_completed()
    })
  }

  remove_item(id) {
    this.items.splice(id, 1)
    this.calculator_total(this.items)
    localStorage.setItem('purchase_kaya_list', JSON.stringify(this.items))
  }

  calculator_total(items) {
    let total = 0;
    items.forEach((value) => {
      total = total + value.total
    });

    this.total_purchase_kaya = total
    localStorage.setItem('total_purchase_kaya', this.total_purchase_kaya)
  }

}
