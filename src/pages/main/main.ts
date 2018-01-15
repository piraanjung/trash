import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Nav } from 'ionic-angular';
import { SellerSideMenuProvider } from '../../providers/seller-side-menu/seller-side-menu';
import { BuyerSideMenuProvider } from '../../providers/buyer-side-menu/buyer-side-menu';
import { BuyKayaPage } from '../../pages/buy-kaya/buy-kaya';
import { SellKayaPage } from '../../pages/sell-kaya/sell-kaya';
@IonicPage()
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

    if (my_user_type_id == '3') {
      this.rootPage = BuyKayaPage ;
      this.menuCtrl.enable(true, 'buyerMenu');
      this.menuCtrl.enable(false, 'sellerMenu');
    } else if (my_user_type_id == '4') {
      this.rootPage = SellKayaPage;
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
