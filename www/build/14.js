webpackJsonp([14],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerKayaPurchaseCompletedPageModule", function() { return BuyerKayaPurchaseCompletedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buyer_kaya_purchase_completed__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuyerKayaPurchaseCompletedPageModule = (function () {
    function BuyerKayaPurchaseCompletedPageModule() {
    }
    BuyerKayaPurchaseCompletedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buyer_kaya_purchase_completed__["a" /* BuyerKayaPurchaseCompletedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buyer_kaya_purchase_completed__["a" /* BuyerKayaPurchaseCompletedPage */]),
            ],
        })
    ], BuyerKayaPurchaseCompletedPageModule);
    return BuyerKayaPurchaseCompletedPageModule;
}());

//# sourceMappingURL=buyer-kaya-purchase-completed.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyerKayaPurchaseCompletedPage; });
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



var BuyerKayaPurchaseCompletedPage = (function () {
    function BuyerKayaPurchaseCompletedPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.user = {};
    }
    BuyerKayaPurchaseCompletedPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // console.log('ionViewDidLoad BuyerKayaPurchaseCompletedPage');
        this.storage.get('current_seller').then(function (val) {
            _this.user = val;
        });
        console.log(this.user);
        localStorage.removeItem("purchase_kaya_list");
        localStorage.removeItem("total_purchase_kaya");
        localStorage.getItem('purchase_kaya_list');
    };
    BuyerKayaPurchaseCompletedPage.prototype.goto_kaya_categories = function () {
        // this.navCtrl.push('buy-kaya-choose-category')
        this.navCtrl.push("buy-kaya-matching");
    };
    BuyerKayaPurchaseCompletedPage.prototype.goto_main_page = function () {
        this.navCtrl.push("buy-kaya");
    };
    BuyerKayaPurchaseCompletedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buyer-kaya-purchase-completed',template:/*ion-inline-start:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/buyer-kaya-purchase-completed/buyer-kaya-purchase-completed.html"*/'<ion-header>\n  \n    <ion-navbar [hideBackButton]="true" color="nav_blue">\n      <button ion-button menuToggle right>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n      <ion-title style="text-align: center;">ปริ้นใบเสร็จ</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content>\n      <ion-card> \n         <ion-grid>\n        <ion-row>\n          <ion-col col-3>\n            <img src="assets/img/DrDokvTeGUKcKS5e1gIh_user.png"/>\n          </ion-col>\n      \n          <ion-col col-9>\n      \n                  <h2>{{ user.mobile }} \n                    \n                  </h2>\n                <h2>{{ user.name }}  {{user.second_name}}</h2>\n             \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        <strong>แจ้งเตือน</strong>\n      </ion-card-header>\n  \n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-12>\n              <h2>บันทึกข้อมูลเรียบร้อย</h2>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <button ion-button icon-left round block (click)="goto_kaya_categories()">\n            รับซื้อขยะ\n          </button>\n        </ion-col>\n      <!-- </ion-row> -->\n\n      <!-- <ion-row>\n        <ion-col col-12>\n          <button ion-button color="light" large block icon-left>\n            <ion-icon name="print"></ion-icon>\n            ปริ้นใบเสร็จ\n          </button>\n        </ion-col>\n      </ion-row> -->\n\n      <!-- <ion-row> -->\n        <ion-col col-6>\n          <button ion-button color="danger" round block icon-left (click)="goto_main_page()">\n            กลับหน้าหลัก\n          </button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </ion-content>\n  '/*ion-inline-end:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/buyer-kaya-purchase-completed/buyer-kaya-purchase-completed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], BuyerKayaPurchaseCompletedPage);
    return BuyerKayaPurchaseCompletedPage;
}());

//# sourceMappingURL=buyer-kaya-purchase-completed.js.map

/***/ })

});
//# sourceMappingURL=14.js.map