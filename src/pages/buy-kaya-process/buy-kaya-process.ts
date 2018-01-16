import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Http } from '@angular/http';

// import { BuyKayaSummaryPage } from '../buy-kaya-summary/buy-kaya-summary';

/**
 * Generated class for the BuyKayaProcessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "buy-kaya-process",
})
@Component({
  selector: 'page-buy-kaya-process',
  templateUrl: 'buy-kaya-process.html',
})
export class BuyKayaProcessPage {

  pet: string = "recycles";
  

  name: string;
  searchQuery: string = '';
  items: any;
  user:any;
  
  waste: string ="recycle-waste";
  recyclewastes:any;
  organicwastes:any;
  hazardwaste:any;
  recycle:any=[];

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeRecycleWastes();
    this.initializeOrganicWastes();
    this.initializeHazardWastes();
    this.user = navParams.get('user');
    console.log(this.user['id'])

    
  }
  /// buy-kaya-process
  getItemsRecycleWastes(ev: any) {
    // Reset items back to all of the items
   this.initializeRecycleWastes();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.recyclewastes = this.recyclewastes.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  initializeRecycleWastes() {
    this.recyclewastes =[
      {
        id: 'rw-001',
        name : 'ขวด PET',
        estimate_price: 7,
        unit : 'กก.',
        img : './assets/imgs/thumbnail-puppy-1.jpg'
      },
      {
        id: 'rw-002',
        name : 'กระดาษปกแข็ง',
        estimate_price: 5,
        unit : 'กก.',
        img : './assets/imgs/thumbnail-puppy-1.jpg'
      },
      {
        id: 'rw-003',
        name : 'กระดาษปกอ่อน',
        estimate_price: 3,
        unit : 'กก.',
        img : './assets/imgs/thumbnail-puppy-1.jpg'
      }
    ];
  }

  getItemsOrginics(ev: any) {
    // Reset items back to all of the items
   this.initializeOrganicWastes();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.organicwastes = this.organicwastes.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  initializeOrganicWastes() {
    this.organicwastes =[
      {
        id: 'org-001',
        name : 'เศษอาหาร',
        estimate_price: 300,
        unit : 'กก.',
        img : './assets/imgs/logo.png'
      },
      {
        id: 'org-002',
        name : 'ใบไม้แห้ง',
        estimate_price: 100,
        unit : 'กก.',
        img : './assets/imgs/logo.png'
      },
      {
        id: 'org-003',
        name : 'มูลสัตว์',
        estimate_price: 200,
        unit : 'กก.',
        img : './assets/imgs/logo.png'
      }
    ];
  }

  getItemsHazards(ev: any) {
    // Reset items back to all of the items
   this.initializeHazardWastes();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.hazardwaste = this.hazardwaste.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  initializeHazardWastes() {
    this.hazardwaste =[
      {
        id: 'hz-001',
        name : 'หลอดฟลูออเรสเซนต์',
        estimate_price: 150,
        unit : 'หลอด',
        img : './assets/imgs/card-saopaolo.png'
      },
      {
        id: 'hz-002',
        name : 'ถ่านไฟฉาย AAA',
        estimate_price: 20,
        unit : 'ก้อน',
        img : './assets/imgs/card-saopaolo.png'
      },
      {
        id: 'hz-003',
        name : 'โทรศัพท์มือถือ',
        estimate_price: '3,000',
        unit : 'ชิ้น',
        img : './assets/imgs/card-saopaolo.png'
      }
    ];
  }

  cal(ev:any){
    let val = ev.target.value;
    console.log(val)
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      // this.recyclewastes = this.recyclewastes.filter((item) => {
      //   return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      // })
    }

  }

  
  logForm() {
    console.log(this.recycle)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyKayaProcessPage');
  }
  kayaSummary(){
    this.navCtrl.push("buy-kaya-summary");
  }

}
