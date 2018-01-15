import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyersServiceProvider } from '../../providers/buyers-service/buyers-service';
import { Storage } from '@ionic/storage';
import {  SellKayaServiceProvider } from '../../providers/sell-kaya-service/sell-kaya-service'
import { SellerSideMenuProvider } from '../../providers/seller-side-menu/seller-side-menu';
/**
 * Generated class for the IBankingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  // "name" : "i-banking"
})
@Component({
  selector: 'page-i-banking',
  templateUrl: 'i-banking.html',
})
export class IBankingPage {
  point: any;
  balance: any;
  secondname: any;
  username: any;
  current_user:any= [];
  point_info: any=[];
  bank_info:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private buyersService: BuyersServiceProvider,
    private storage: Storage,
    private sellkayaService:SellKayaServiceProvider
  ) {
      this.storage.get('user_bank').then(res=>{
        this.balance = res[0].balance
      });
      this.storage.get('user_point').then(res=>{
        this.point = res[0].balance
      });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IBankingPage');
    this.storage.get('currentUser').then((val) => {
    this.current_user  =val;
    this.username = this.current_user.name
    this.secondname = this.current_user.second_name
    console.log(this.current_user)
    this.get_bank_info(this.current_user.id);
    this.get_point_info(this.current_user.id);
    //    this.sellkayaService.get_bank_info(val.id).subscribe(res => {
    //     this.bank_info = res
    //     this.storage.set('user_bank', res);
    //  });
      // this.storage.get('user_bank').then(res=>{
      //   this.balance = res[0].balance
      // });
      // this.storage.get('user_point').then(res=>{
      //   this.point = res[0].balance
      // });
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

  goToBookbank(){
    this.navCtrl.push("i-banking-bookbank");
  }

  goToPointReward(){
    this.navCtrl.push("i-banking-pointreward");
  }
}
