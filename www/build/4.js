webpackJsonp([4],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellLocalProductDashboardPageModule", function() { return SellLocalProductDashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sell_local_product_dashboard__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SellLocalProductDashboardPageModule = (function () {
    function SellLocalProductDashboardPageModule() {
    }
    SellLocalProductDashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sell_local_product_dashboard__["a" /* SellLocalProductDashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sell_local_product_dashboard__["a" /* SellLocalProductDashboardPage */]),
            ],
        })
    ], SellLocalProductDashboardPageModule);
    return SellLocalProductDashboardPageModule;
}());

//# sourceMappingURL=sell-local-product-dashboard.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellLocalProductDashboardPage; });
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
 * Generated class for the SellLocalProductDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SellLocalProductDashboardPage = (function () {
    function SellLocalProductDashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SellLocalProductDashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SellLocalProductDashboardPage');
    };
    SellLocalProductDashboardPage.prototype.createProducts = function () {
        this.navCtrl.push('sell-local-product-create-product');
    };
    SellLocalProductDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sell-local-product-dashboard',template:/*ion-inline-start:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/sell-local-product-dashboard/sell-local-product-dashboard.html"*/'<!--\n  Generated template for the SellLocalProductDashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>sellLocalProductDashboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button class="input-round"  (click)="createProducts()">เพิ่มรายการสินค้า</button>\n  รายการสินค้า\n  ชื่อสินค้า ราคาต่อหน่วย updateวันที่ แก้ไข ลบ\n</ion-content>\n'/*ion-inline-end:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/sell-local-product-dashboard/sell-local-product-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SellLocalProductDashboardPage);
    return SellLocalProductDashboardPage;
}());

//# sourceMappingURL=sell-local-product-dashboard.js.map

/***/ })

});
//# sourceMappingURL=4.js.map