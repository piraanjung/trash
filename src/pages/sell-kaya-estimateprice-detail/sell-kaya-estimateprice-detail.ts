import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KayaListServiceProvider } from '../../providers/kaya-list-service/kaya-list-service';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the SellKayaEstimatepriceDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'sell-kaya-estimateprice-detail'
})
@Component({
  selector: 'page-sell-kaya-estimateprice-detail',
  templateUrl: 'sell-kaya-estimateprice-detail.html',
})
export class SellKayaEstimatepriceDetailPage {
  params: { 'kaya_type_id': number; 'user_cat_id': number; 'office_id': number; };
  kayas: any =[];
  currUser:any =[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private kayaListService: KayaListServiceProvider, 
    private storage : Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellKayaEstimatepriceDetailPage');
    console.log(this.storage.get('currentUser'));
    this.currUser = this.storage.get('currentUser');
    let wastecategory =  this.navParams.get('_cat');
    
    this.params ={
      'kaya_type_id' : wastecategory,
      'user_cat_id'  : 2,//this.currUser.user_cat_id,
      'office_id'    : 1//this.currUser.office_id
    }
    console.log(this.params)
    this.initializeWastes(this.params);
  }

  initializeWastes(params) {
    this.kayaListService.get_kaya_list_by_category(params).subscribe(res =>{
      this.kayas =  res;
      console.log(this.kayas)
    })
  }
  

}
