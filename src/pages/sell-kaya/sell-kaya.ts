import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SellKayaServiceProvider } from '../../providers/sell-kaya-service/sell-kaya-service';
/**
 * Generated class for the SellKayaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  "name" : "sell-kaya",
})
@Component({
  selector: 'page-sell-kaya',
  templateUrl: 'sell-kaya.html',
})
export class SellKayaPage {
  balance: any;
  point: any;
  point_info: any=[];
  bank_info:any = [];
  currentuser:any =[]
  shouldWidth: number;
  s: string;
  sty: string;
  w: number;
  h: number;
  height2: number;
  width2: number;
  shouldHeight: number;
  curr_user_id: any;
  current_user_id: Promise<any>;
  curUser: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  
    private storage: Storage, private sellkayaService : SellKayaServiceProvider) {
      this.get_user_info();
      // หา ratio ของ screen
      this.shouldHeight = document.body.clientHeight ;
      this.shouldWidth = document.body.clientWidth ;
      // let v = window.devicePixelRatio;
      console.log(this.shouldHeight)
      this.set_image_ratio(this.shouldHeight)
    
  }
  localproduct(){
    this.navCtrl.push("buy-localproducts");
  }
  goToSellKayaUpValue(){
    this.navCtrl.push("sell-kaya-upvalue");
  }

  iBaking(){
    this.navCtrl.push("i-banking");
  }
  gotoPurchaseProduct(){
    this.navCtrl.push("purchase-product-slide");
  }

  gotoSellKayaEstimatePrice(){
    this.navCtrl.push("sell-kaya-estimateprice");
  }

  gotoDechetReward() {
    this.navCtrl.push('dechet-reward-page');
  }

  gotoSellKayaProcess(){
    this.navCtrl.push("sell-kaya-process");
  }

  gotoSellKayaBuyerSearch(){
    this.navCtrl.push("sell-kaya-buyersearch");
  }
  
  goToSellKayaHistory(){
    this.navCtrl.push("sell-kaya-history");
  }

  ionViewDidLoad() {
    
    

      // console.log(v)
  }

  get_user_info(){
    this.storage.get('currentUser').then(val => {
      this.currentuser = val
      this.storage.set('user_cat_id', this.currentuser.user_cat_id ); //val.user_cat_id
      this.get_bank_info(this.currentuser.id);
      this.get_point_info(this.currentuser.id);
    
     });
  }

  get_bank_info(id){
    this.sellkayaService.get_bank_info(id).subscribe(res => {
      this.bank_info = res
      this.balance = res[0].balance
      this.storage.set('user_bank', res);
    });
  }

  get_point_info(id){
    this.sellkayaService.get_point_info(id).subscribe(res => {
      this.point_info = res
      this.point = res[0].balance
      this.storage.set('user_point', res);
    });
  }

  set_image_ratio(shouldHeight){}
  //     if(this.shouldHeight >= 568 && this.shouldHeight <640){
  //       this.h =44
  //       this.w = 97
  //     }
  //     else if(this.shouldHeight>=640 && this.shouldHeight <699){

  //       this.h = 53;
  //       this.w =105;
      
  //     }else if(this.shouldHeight>=699 && this.shouldHeight <736){
  //       this.h = 59;
  //       this.w =112;
        
  //   }else if(this.shouldHeight >=736 && this.shouldHeight <854){
  //       this.h =60
  //       this.w =128
  //   }else if(this.shouldHeight >=854){
  //         this.h =65
  //         this.w =132
  //   }else{
  //     this.h = 59;
  //     this.w =112;
  //   }
  // }

}



