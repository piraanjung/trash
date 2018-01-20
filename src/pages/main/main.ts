import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Nav } from 'ionic-angular';
import { SellerSideMenuProvider } from '../../providers/seller-side-menu/seller-side-menu';
import { BuyerSideMenuProvider } from '../../providers/buyer-side-menu/buyer-side-menu';

@IonicPage({
  "name" : "main-page"
})
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  
  @ViewChild(Nav) nav: Nav;
  rootPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private buyerSideMenu: BuyerSideMenuProvider,
    private sellerSideMenu: SellerSideMenuProvider,
    private menuCtrl: MenuController
  ) { }

  buyerMenu = this.buyerSideMenu.sideMenu();
  sellerMenu = this.sellerSideMenu.sideMenu();

  ionViewDidLoad() {
    let my_user_type_id = localStorage.getItem("my_user_type_id");
    console.log(my_user_type_id)
    if (my_user_type_id == '2') {
      this.rootPage = "buy-kaya" ;
      this.menuCtrl.enable(true, 'buyerMenu');
      this.menuCtrl.enable(false, 'sellerMenu');
    } else if (my_user_type_id == '3') {
      this.rootPage = "sell-kaya";
      this.menuCtrl.enable(false, 'buyerMenu');
      this.menuCtrl.enable(true, 'sellerMenu');
    }
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
