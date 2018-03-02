webpackJsonp([21],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyKayaPageModule", function() { return BuyKayaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buy_kaya__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuyKayaPageModule = (function () {
    function BuyKayaPageModule() {
    }
    BuyKayaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buy_kaya__["a" /* BuyKayaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buy_kaya__["a" /* BuyKayaPage */]),
            ],
        })
    ], BuyKayaPageModule);
    return BuyKayaPageModule;
}());

//# sourceMappingURL=buy-kaya.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyKayaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
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



var BuyKayaPage = (function () {
    function BuyKayaPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    BuyKayaPage.prototype.goto_buyer = function (cat) {
        // this.navCtrl.push('buy-kaya-choose-category');
        this.navCtrl.push("buy-kaya-matching");
    };
    BuyKayaPage.prototype.gotoCustomerAppointment = function () {
        this.navCtrl.push("buy-kaya-appointment");
    };
    BuyKayaPage.prototype.gotoSettings = function () {
        this.navCtrl.push("buyer-setting");
    };
    BuyKayaPage.prototype.ionViewDidLoad = function () {
        this.storage.get('currentUser').then(function (res) {
            // console.log(res);
            // if (res == null) this.navCtrl.push('login');
        });
        // localStorage.removeItem("purchase_kaya_list")
        // localStorage.removeItem("total_purchase_kaya")
    };
    BuyKayaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buy-kaya',template:/*ion-inline-start:"/Users/piraan/Desktop/Desktop - Piraan’s MacBook Air/trash/trash/src/pages/buy-kaya/buy-kaya.html"*/'<ion-header>\n  <ion-navbar [hideBackButton]="true" color="nav_blue">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title style="text-align: center;">รับซื้อขยะ</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col offset-3>\n        <ion-img src="./assets/imgs/buykayabtn.png" width=240 height="242" \n        (click)="goto_buyer()"></ion-img>\n    </ion-col>\n  </ion-row>\n    \n  <!-- <ion-card (click)="goto_buyer()"> -->\n    <!-- <ion-row>\n      <ion-col><ion-img src="./assets/imgs/buykaya.svg" width=100 height="100"></ion-img></ion-col>\n      <ion-col style="padding-top:30px; font-size:40px">รับซื้อขยะ</ion-col>\n    </ion-row> -->\n<!--   \n      <ion-img src="./assets/imgs/buykaya.svg" width=100 height="100"></ion-img>\n      <div style="padding-top:30px; font-size:40px">รับซื้อขยะ</div> -->\n  <!-- </ion-card> -->\n</ion-content>\n'/*ion-inline-end:"/Users/piraan/Desktop/Desktop - Piraan’s MacBook Air/trash/trash/src/pages/buy-kaya/buy-kaya.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], BuyKayaPage);
    return BuyKayaPage;
}());

//# sourceMappingURL=buy-kaya.js.map

/***/ })

});
//# sourceMappingURL=21.js.map