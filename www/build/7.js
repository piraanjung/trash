webpackJsonp([7],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellKayaEstimatepriceDetailPageModule", function() { return SellKayaEstimatepriceDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sell_kaya_estimateprice_detail__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SellKayaEstimatepriceDetailPageModule = (function () {
    function SellKayaEstimatepriceDetailPageModule() {
    }
    SellKayaEstimatepriceDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sell_kaya_estimateprice_detail__["a" /* SellKayaEstimatepriceDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sell_kaya_estimateprice_detail__["a" /* SellKayaEstimatepriceDetailPage */]),
            ],
        })
    ], SellKayaEstimatepriceDetailPageModule);
    return SellKayaEstimatepriceDetailPageModule;
}());

//# sourceMappingURL=sell-kaya-estimateprice-detail.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellKayaEstimatepriceDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_kaya_list_service_kaya_list_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(104);
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
 * Generated class for the SellKayaEstimatepriceDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SellKayaEstimatepriceDetailPage = (function () {
    function SellKayaEstimatepriceDetailPage(navCtrl, navParams, kayaListService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.kayaListService = kayaListService;
        this.storage = storage;
        this.kayas = [];
        this.currUser = [];
    }
    SellKayaEstimatepriceDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SellKayaEstimatepriceDetailPage');
        console.log(this.storage.get('currentUser'));
        this.currUser = this.storage.get('currentUser');
        var wastecategory = this.navParams.get('_cat');
        this.params = {
            'kaya_type_id': wastecategory,
            'user_cat_id': 2,
            'office_id': 1 //this.currUser.office_id
        };
        console.log(this.params);
        this.initializeWastes(this.params);
    };
    SellKayaEstimatepriceDetailPage.prototype.initializeWastes = function (params) {
        var _this = this;
        this.kayaListService.get_kaya_list_by_category(params).subscribe(function (res) {
            _this.kayas = res;
            console.log(_this.kayas);
        });
    };
    SellKayaEstimatepriceDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sell-kaya-estimateprice-detail',template:/*ion-inline-start:"/Users/piraan/Desktop/Desktop - Piraan’s MacBook Air/trash/trash/src/pages/sell-kaya-estimateprice-detail/sell-kaya-estimateprice-detail.html"*/'<!--\n  Generated template for the SellKayaEstimatepriceDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>sell-kaya-estimateprice-detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n    <ion-searchbar (ionInput)="getItemsRecycleWastes($event)"></ion-searchbar>\n    <ion-list>\n      <button ion-item *ngFor="let item of items">\n        <!--{{ item.name }} -->\n      </button>\n    </ion-list>\n    <ion-item *ngFor="let kaya of kayas">\n        <span item-start>\n            <img src="assets/imgs/logo.png" width="60" height="60">\n        </span>\n          <h2>{{kaya.name}}</h2>\n          <h3>Don\'t Know What To Do!</h3>\n          <p item-end>{{kaya.est_price}}บาท</p>\n      \n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/piraan/Desktop/Desktop - Piraan’s MacBook Air/trash/trash/src/pages/sell-kaya-estimateprice-detail/sell-kaya-estimateprice-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_kaya_list_service_kaya_list_service__["a" /* KayaListServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], SellKayaEstimatepriceDetailPage);
    return SellKayaEstimatepriceDetailPage;
}());

//# sourceMappingURL=sell-kaya-estimateprice-detail.js.map

/***/ })

});
//# sourceMappingURL=7.js.map