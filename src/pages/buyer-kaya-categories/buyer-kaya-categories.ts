import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KayaListServiceProvider } from '../../providers/kaya-list-service/kaya-list-service';

@IonicPage({
  "name": "buyer-kaya-categories"
})
@Component({
  selector: 'page-buyer-kaya-categories',
  templateUrl: 'buyer-kaya-categories.html',
})
export class BuyerKayaCategoriesPage {

  user: any = {}
  items: any = []
  user_cate_id: number;
  office_id: number;
  purchase_items: any = []
  btn_purchase_items_status: boolean = true
  address: string = 'เทศบาลตำบลพังโคน สกลนคร'

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private KayaListService: KayaListServiceProvider) {
      
  }

  ionViewDidLoad() {
    this.user = this.navParams.get('user')
    this.user = (typeof this.user != 'undefined' ? this.user : 0)
    if (this.user !='0') {
      this.user_cate_id = this.user.user_cat_id;
      this.office_id = this.user.office_id;
    }
    console.log(this.user)
    // if (this.purchase_items != null) this.btn_purchase_items_status = false
    this.get_kaya_list()
  }

  ionViewWillEnter() {
    let items = localStorage.getItem("purchase_kaya_list")
    this.purchase_items = JSON.parse(items)

    if (this.purchase_items != null) this.btn_purchase_items_status = false
  }

  get_kaya_list() {
    let param = {
      user_cat_id: this.user_cate_id,
      office_id: this.office_id
    };

    this.KayaListService.get_kaya_list(param).subscribe(res => {
      this.items = res
    })
  }

  getItems(ev: any) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.get_kaya_list()
    }
  }

  itemSelected(value) {
    this.navCtrl.push("buyer-kaya-form-calculator", {
      item: value,
      user: this.user
    });
  }

  goto_buyer_kaya_purchase() {
    this.navCtrl.push("buyer-kaya-purchase-list", {
      user: this.user
    });

  }

}
