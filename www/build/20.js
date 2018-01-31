webpackJsonp([20],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyLocalproductsConfirmPageModule", function() { return BuyLocalproductsConfirmPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buy_localproducts_confirm__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuyLocalproductsConfirmPageModule = (function () {
    function BuyLocalproductsConfirmPageModule() {
    }
    BuyLocalproductsConfirmPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buy_localproducts_confirm__["a" /* BuyLocalproductsConfirmPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buy_localproducts_confirm__["a" /* BuyLocalproductsConfirmPage */]),
            ],
        })
    ], BuyLocalproductsConfirmPageModule);
    return BuyLocalproductsConfirmPageModule;
}());

//# sourceMappingURL=buy-localproducts-confirm.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyLocalproductsConfirmPage; });
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
 * Generated class for the BuyLocalproductsConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuyLocalproductsConfirmPage = (function () {
    function BuyLocalproductsConfirmPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BuyLocalproductsConfirmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuyLocalproductsConfirmPage');
    };
    BuyLocalproductsConfirmPage.prototype.goToBuyLocalProductResult = function () {
        this.navCtrl.push("buy-localproducts-result");
    };
    BuyLocalproductsConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buy-localproducts-confirm',template:/*ion-inline-start:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/buy-localproducts-confirm/buy-localproducts-confirm.html"*/'<ion-header>\n  <ion-navbar>\n    \n    <ion-title>\n      ยืนยันการซื้อสินค้า\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page13">\n  <ion-card id="page13-card210">\n    <ion-list>\n      \n      <ion-item color="assertive" id="page13-list-item65">\n          <ion-avatar item-left>\n              <img src="./assets/img/chill.png" />\n            </ion-avatar>\n        พริกสด\n      </ion-item>\n      <ion-item id="page13-list-item-container18">\n        <div id="page13-markdown20" class="show-list-numbers-and-dots">\n          <p style="margin-top:0px;color:#000000;">\n            ราคา: 10บาท/ถุง\n          </p>\n        </div>\n      </ion-item>\n      <ion-item color="positive" id="page13-list-item66">\n        <ion-icon name="person" item-left></ion-icon>\n        ผู้ขาย :B-0112-1\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  <ion-card id="page13-card211">\n    <ion-list>\n     \n      <ion-item id="page13-list-item-container19">\n        <div id="page13-markdown21" class="show-list-numbers-and-dots">\n          <p style="margin-top:0px;color:#000000;">\n            ซื้อจำนวน\n          </p>\n        </div>\n      </ion-item>\n      <ion-item color="balanced" id="page13-list-item68">\n        <ion-icon name="add-circle" item-left></ion-icon>\n        2 ถุง : 20 บาท\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  <button id="page13-button14" ion-button color="positive" block on-click="goToBuyLocalProductResult()">\n    ยืนยันการซื้อ\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/buy-localproducts-confirm/buy-localproducts-confirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], BuyLocalproductsConfirmPage);
    return BuyLocalproductsConfirmPage;
}());

//# sourceMappingURL=buy-localproducts-confirm.js.map

/***/ })

});
//# sourceMappingURL=20.js.map