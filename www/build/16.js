webpackJsonp([16],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyLocalproductsInfoPageModule", function() { return BuyLocalproductsInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buy_localproducts_info__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuyLocalproductsInfoPageModule = (function () {
    function BuyLocalproductsInfoPageModule() {
    }
    BuyLocalproductsInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buy_localproducts_info__["a" /* BuyLocalproductsInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buy_localproducts_info__["a" /* BuyLocalproductsInfoPage */]),
            ],
        })
    ], BuyLocalproductsInfoPageModule);
    return BuyLocalproductsInfoPageModule;
}());

//# sourceMappingURL=buy-localproducts-info.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyLocalproductsInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
 * Generated class for the BuyLocalproductsInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuyLocalproductsInfoPage = (function () {
    function BuyLocalproductsInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BuyLocalproductsInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuyLocalproductsInfoPage');
    };
    BuyLocalproductsInfoPage.prototype.goToBuyLocalProductConfirm = function () {
        this.navCtrl.push("buy-localproducts-confirm");
    };
    BuyLocalproductsInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buy-localproducts-info',template:/*ion-inline-start:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/buy-localproducts-info/buy-localproducts-info.html"*/'<ion-header>\n  <ion-navbar>\n   \n    <ion-title>\n      ซื้อสินค้า\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page11">\n  <ion-list id="page11-list7">\n    <ion-item color="none" id="page11-list-item44">\n      <ion-thumbnail item-left>\n        <img src="./assets/img/chill2.png" />\n      </ion-thumbnail>\n      <h2>\n        พริกสด\n      </h2>\n    </ion-item>\n    <ion-list id="page11-list8">\n      <ion-item color="none" id="page11-list-item48">\n        ผู้ขาย : B-1001-2\n      </ion-item>\n      <ion-item color="none" id="page11-list-item49">\n        ราคา 10 บาท/ถุง\n      </ion-item>\n    </ion-list>\n  </ion-list>\n  <div class="spacer" style="width:300px;height:38px;" id="page11-spacer4"></div>\n  <form id="page11-form3">\n    <h1 id="page11-heading4" style="color:#000000;">\n      ซื้อจำนวน\n    </h1>\n    <ion-item id="page11-input11">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n  </form>\n  <button id="page11-button15" ion-button color="positive" block on-click="goToBuyLocalProductConfirm()">\n    ตกลง\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/buy-localproducts-info/buy-localproducts-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], BuyLocalproductsInfoPage);
    return BuyLocalproductsInfoPage;
}());

//# sourceMappingURL=buy-localproducts-info.js.map

/***/ })

});
//# sourceMappingURL=16.js.map