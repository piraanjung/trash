import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BuyersServiceProvider } from '../../providers/buyers-service/buyers-service';
import { ToastController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Storage } from '@ionic/storage';


@IonicPage({
  // "name": "buy-kaya-matching",
  // "segment": "buy-kaya-matching"
})

@Component({
  selector: 'page-buy-kaya-matching',
  templateUrl: 'buy-kaya-matching.html',
})
export class BuyKayaMatchingPage {

  user: any={};
  has_user: boolean = false

  items: any={};
  // address: string = 'เทศบาลตำบลพังโคน สกลนคร';
  catName: string = "";
  catId: number;
  sellercode: string = "";
  seller_matching_by: string = "qrcode";

  public scannedText: string;
  public buttonText: string;
  public loading: boolean;
  private eventId: number;
  public eventTitle: string;
  data = {}
  option: BarcodeScannerOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private buyersService: BuyersServiceProvider,
    private toastCtrl: ToastController,
    private barcodeScanner: BarcodeScanner,
    private storage: Storage) { }

  ionViewDidLoad() {
    this.eventId = this.navParams.get('eventId');
    this.eventTitle = this.navParams.get('eventTitle');

    this.buttonText = "Scan";
    this.loading = false;

    let catType = this.navParams.get('cat_type');
    if (catType == "localgovernment") {
      this.catName = "เทศบาล";
      this.catId = 1;
    }
    if (catType == "school") {
      this.catName = "โรงเรียน";
      this.catId = 2;
    }
    if (catType == "hospital") {
      this.catName = "โรงพยาบาล";
      this.catId = 3;
    }
    //this.get_buyers()
  }

  searchSeller() {
    if (this.sellercode == "") {
      this.presentToast("ใส่รหัสผู้ขายขยะ");
    } else {

      let sellercode = this.sellercode;
      // console.log("sellercode=" + sellercode + "   catId=" + this.catId)
      this.search_user(sellercode)
    }

  }


  itemSelected(item: any) {
    this.navCtrl.push('buyer-profile', {
      user: item,
    });
  }

  getItems(ev: any) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      // this.get_buyers()
    }
  }

  Scanqrcode() {
    this.option = {
      preferFrontCamera: false,
      prompt: "สแกน QR CODE"
    }
    this.barcodeScanner.scan(this.option).then((barcodeData) => {
      this.data = barcodeData.text
      this.search_user(this.data)
    }, (err) => {
      // An error occurred
      console.log(err)
    });

  }


  presentToast(txt) {
    let toast = this.toastCtrl.create({
      message: txt,
      duration: 2000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }


  search_user(sellercode) {
    this.buyersService.get_buyer_profile_by_category(sellercode, this.catId).subscribe(res => {
      this.user = res
      this.items = res
      
      //this.user={
        //name : res['name'],
        //second_name : res['second_name'],
        //mobile : res['mobile'],
        //user_cat_id :res['user_cat_id'],
        //office_id :res['office_id']
      //}
      this.storage.set('current_seller', this.user);
      console.log(this.user)
      if (JSON.stringify(this.user) == '{}') {
        this.presentToast("ไม่พบข้อมูล")
        this.sellercode = ""
        this.has_user = false
      } else {
        this.has_user = true
      }
    }, (error: any) => {
      this.presentToast("กรุณาใส่รหัสผู้ขายขยะ");
    })
  }

  goto_kaya_categories(item: any) {
    this.navCtrl.push('buyer-kaya-categories', {
      user: this.user,
    });
  }

  clearPhoneNumber() {
    this.sellercode = ""
  }
}
