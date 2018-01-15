import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SellKayaProcessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  // name : 'sell-kaya-process'
})
@Component({
  selector: 'page-sell-kaya-process',
  templateUrl: 'sell-kaya-process.html',
})
export class SellKayaProcessPage {
  show_qr_code: boolean = false;
  
  seller_code:any =''
  user:any =[]
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellKayaProcessPage');
  }

  generate_qrcode(){
    this.storage.get('currentUser').then(res =>{
      this.user =res
      console.log(this.user.mobile)
      if(this.user.mobile != ""){
        this.seller_code = this.user.mobile
        this.show_qr_code = true
      }
      
    })
    
  }

}
