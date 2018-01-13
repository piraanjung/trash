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
// import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MyApp } from './app.component';
// import { Printer, PrintOptions } from '@ionic-native/printer';
// import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
// import { PrintProvider } from '../providers/print/print';
// import {PrinterListModalPage} from '../pages/print-list-modal/print-list-modal';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    LoginPageModule,
    // NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BuyerSideMenuProvider,
    SellerSideMenuProvider,
    // BarcodeScanner,
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
