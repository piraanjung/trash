webpackJsonp([5],{

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellKayaProcessPageModule", function() { return SellKayaProcessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sell_kaya_process__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { QRCodeModule } from 'angular2-qrcode';
var SellKayaProcessPageModule = (function () {
    function SellKayaProcessPageModule() {
    }
    SellKayaProcessPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sell_kaya_process__["a" /* SellKayaProcessPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sell_kaya_process__["a" /* SellKayaProcessPage */]),
            ],
        })
    ], SellKayaProcessPageModule);
    return SellKayaProcessPageModule;
}());

//# sourceMappingURL=sell-kaya-process.module.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellKayaProcessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SellKayaProcessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SellKayaProcessPage = (function () {
    function SellKayaProcessPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.show_qr_code = false;
        this.seller_code = '';
        this.user = [];
    }
    SellKayaProcessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SellKayaProcessPage');
    };
    SellKayaProcessPage.prototype.generate_qrcode = function () {
        var _this = this;
        this.storage.get('currentUser').then(function (res) {
            _this.user = res;
            console.log(_this.user.mobile);
            if (_this.user.mobile != "") {
                _this.seller_code = _this.user.mobile;
                _this.show_qr_code = true;
            }
        });
    };
    SellKayaProcessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sell-kaya-process',template:/*ion-inline-start:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/sell-kaya-process/sell-kaya-process.html"*/'<!--\n  Generated template for the SellKayaProcessPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ขายขยะ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div style="text-align:center">\n        <h2>สร้าง QR CODE ขายขยะ</h2>\n        <div *ngIf="show_qr_code" id="qrcode">\n          <qr-code value="{{seller_code}}" [size]="260"></qr-code>\n          <h5 style="text-align:center">นำ QR CODE สแกนกับเครื่องผู้รับซื้อขยะ</h5>\n        </div>\n        \n    </div>\n  \n</ion-content>\n<ion-footer style="text-align:center; border-top:none">\n    <img src="./assets/imgs/qrcodBtn.png" (click)="generate_qrcode()">\n    \n  </ion-footer>'/*ion-inline-end:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/sell-kaya-process/sell-kaya-process.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SellKayaProcessPage);
    return SellKayaProcessPage;
}());

//# sourceMappingURL=sell-kaya-process.js.map

/***/ })

});
//# sourceMappingURL=5.js.map