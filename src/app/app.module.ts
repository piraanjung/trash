import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { BuyersServiceProvider } from '../providers/buyers-service/buyers-service';
import { KayaListServiceProvider } from '../providers/kaya-list-service/kaya-list-service';
import { BuyKayaServiceProvider } from '../providers/buy-kaya-service/buy-kaya-service';
import { SellKayaServiceProvider } from '../providers/sell-kaya-service/sell-kaya-service';
import { AuthenProvider } from '../providers/authen/authen';
import { BuyerSideMenuProvider } from '../providers/buyer-side-menu/buyer-side-menu';
import { SellerSideMenuProvider } from '../providers/seller-side-menu/seller-side-menu';
import { LoginPageModule } from '../pages/login/login.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MyApp } from './app.component';
// import { Printer, PrintOptions } from '@ionic-native/printer';
// import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
// import { PrintProvider } from '../providers/print/print';
// import {PrinterListModalPage} from '../pages/print-list-modal/print-list-modal';
import { RegisterPage } from '../pages/register/register';
import { RolesPage } from '../pages/roles/roles';
import { MainPage } from '../pages/main/main';
import { BuyKayaPage } from '../pages/buy-kaya/buy-kaya';
import { SellKayaPage } from '../pages/sell-kaya/sell-kaya';
import { BuyKayaMatchingPage } from '../pages/buy-kaya-matching/buy-kaya-matching'
import { BuyerKayaPurchaseListPage } from '../pages/buyer-kaya-purchase-list/buyer-kaya-purchase-list'
import { BuyerKayaFormCalculatorPage } from '../pages/buyer-kaya-form-calculator/buyer-kaya-form-calculator' 
import { BuyerKayaPurchaseCompletedPage } from '../pages/buyer-kaya-purchase-completed/buyer-kaya-purchase-completed'
@NgModule({
  declarations: [
    MyApp,
    RegisterPage,
    RolesPage,
    MainPage,
    BuyKayaPage,
    SellKayaPage,
    BuyKayaMatchingPage,
    BuyerKayaPurchaseListPage,
    BuyerKayaFormCalculatorPage,
    BuyerKayaPurchaseCompletedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    LoginPageModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage,
    RolesPage,
    MainPage,
    BuyKayaPage,
    SellKayaPage,
    BuyKayaMatchingPage,
    BuyerKayaPurchaseListPage,
    BuyerKayaFormCalculatorPage,
    BuyerKayaPurchaseCompletedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BuyerSideMenuProvider,
    SellerSideMenuProvider,
    BarcodeScanner,
    BuyersServiceProvider,
    KayaListServiceProvider,
    BuyKayaServiceProvider,
    SellKayaServiceProvider,
    AuthenProvider,
    // BluetoothSerial,
    // PrintProvider
    // SMS,
    // MessageServiceProvider,
    // Printer    
  ]
})
export class AppModule { }
