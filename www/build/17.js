webpackJsonp([17],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyLocalproductsPageModule", function() { return BuyLocalproductsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buy_localproducts__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuyLocalproductsPageModule = (function () {
    function BuyLocalproductsPageModule() {
    }
    BuyLocalproductsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buy_localproducts__["a" /* BuyLocalproductsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buy_localproducts__["a" /* BuyLocalproductsPage */]),
            ],
        })
    ], BuyLocalproductsPageModule);
    return BuyLocalproductsPageModule;
}());

//# sourceMappingURL=buy-localproducts.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyLocalproductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
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
 * Generated class for the BuyLocalproductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuyLocalproductsPage = (function () {
    function BuyLocalproductsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BuyLocalproductsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuyLocalproductsPage');
    };
    BuyLocalproductsPage.prototype.goToBuyLocalProductInfo = function () {
        this.navCtrl.push("buy-localproducts-info");
    };
    BuyLocalproductsPage.prototype.sellLocalProduct = function () {
        this.navCtrl.push('sell-local-product-dashboard');
    };
    BuyLocalproductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buy-localproducts',template:/*ion-inline-start:"/Users/piraan/Desktop/Desktop - Piraan’s MacBook Air/trash/trash/src/pages/buy-localproducts/buy-localproducts.html"*/'<ion-header>\n  <ion-navbar>\n\n    <ion-title>\n      ซื้อ-ขายสินค้าท้องถิ่น\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <div>\n    <a style="display:block;" on-click="goToBuyLocalProductInfo()">\n      <img src="./assets/imgs/qr06.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n    </a>\n  </div>\n  <ion-row>\n    <ion-col col-6>\n      <button ion-button class="circle" (click)="goToBuyLocalProductInfo()">ซื้อสินค้า</button>\n    </ion-col>\n    <ion-col col-6>\n      <button ion-button class="circle" (click)="sellLocalProduct()">ขายสินค้า</button>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/piraan/Desktop/Desktop - Piraan’s MacBook Air/trash/trash/src/pages/buy-localproducts/buy-localproducts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], BuyLocalproductsPage);
    return BuyLocalproductsPage;
}());

//# sourceMappingURL=buy-localproducts.js.map

/***/ })

});
//# sourceMappingURL=17.js.map