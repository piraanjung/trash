webpackJsonp([17],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyLocalproductsResultPageModule", function() { return BuyLocalproductsResultPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buy_localproducts_result__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuyLocalproductsResultPageModule = (function () {
    function BuyLocalproductsResultPageModule() {
    }
    BuyLocalproductsResultPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buy_localproducts_result__["a" /* BuyLocalproductsResultPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buy_localproducts_result__["a" /* BuyLocalproductsResultPage */]),
            ],
        })
    ], BuyLocalproductsResultPageModule);
    return BuyLocalproductsResultPageModule;
}());

//# sourceMappingURL=buy-localproducts-result.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyLocalproductsResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
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
 * Generated class for the BuyLocalproductsResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuyLocalproductsResultPage = (function () {
    function BuyLocalproductsResultPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BuyLocalproductsResultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuyLocalproductsResultPage');
    };
    BuyLocalproductsResultPage.prototype.goToLocalProducts = function () {
        this.navCtrl.push("localproducts");
    };
    BuyLocalproductsResultPage.prototype.goToBuyLocalProducts = function () {
        this.navCtrl.push("buy-localproducts");
    };
    BuyLocalproductsResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buy-localproducts-result',template:/*ion-inline-start:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/buy-localproducts-result/buy-localproducts-result.html"*/'<ion-header>\n  <ion-navbar [hideBackButton]="true">\n   \n    <ion-title>\n      ผลการซื้อสินค้า\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page9">\n\n  <h3 id="page9-heading2" style="color:#27B643;text-align:center; margin-top:20%">\n    ทำการซื้อสินค้าเรียบร้อย\n  </h3>\n\n  <ion-grid style="margin-top:40%">\n    <ion-row>\n      <ion-col col-6>\n        <button id="page9-button8" ion-button color="positive" block on-click="goToLocalProducts()">\n          กลับไปหน้าหลัก\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button id="page9-button9" ion-button color="secondary" block on-click="goToBuyLocalProducts()">\n          ซื้อสินค้าอีก\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/buy-localproducts-result/buy-localproducts-result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], BuyLocalproductsResultPage);
    return BuyLocalproductsResultPage;
}());

//# sourceMappingURL=buy-localproducts-result.js.map

/***/ })

});
//# sourceMappingURL=17.js.map