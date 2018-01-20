webpackJsonp([3],{

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IBankingBookbankPageModule", function() { return IBankingBookbankPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i_banking_bookbank__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IBankingBookbankPageModule = (function () {
    function IBankingBookbankPageModule() {
    }
    IBankingBookbankPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__i_banking_bookbank__["a" /* IBankingBookbankPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__i_banking_bookbank__["a" /* IBankingBookbankPage */]),
            ],
        })
    ], IBankingBookbankPageModule);
    return IBankingBookbankPageModule;
}());

//# sourceMappingURL=i-banking-bookbank.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IBankingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_buyers_service_buyers_service__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sell_kaya_service_sell_kaya_service__ = __webpack_require__(207);
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
 * Generated class for the IBankingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IBankingPage = (function () {
    function IBankingPage(navCtrl, navParams, buyersService, storage, sellkayaService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.buyersService = buyersService;
        this.storage = storage;
        this.sellkayaService = sellkayaService;
        this.current_user = [];
        this.point_info = [];
        this.bank_info = [];
        this.storage.get('user_bank').then(function (res) {
            console.log(res);
            // this.balance = res.balance
        });
        this.storage.get('user_point').then(function (res) {
            // this.point = res.balance
        });
    }
    IBankingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad IBankingPage');
        this.storage.get('currentUser').then(function (val) {
            _this.current_user = val;
            _this.username = _this.current_user.name;
            _this.secondname = _this.current_user.second_name;
            console.log(_this.current_user);
            _this.get_bank_info(_this.current_user.id);
            _this.get_point_info(_this.current_user.id);
            //    this.sellkayaService.get_bank_info(val.id).subscribe(res => {
            //     this.bank_info = res
            //     this.storage.set('user_bank', res);
            //  });
            // this.storage.get('user_bank').then(res=>{
            //   this.balance = res[0].balance
            // });
            // this.storage.get('user_point').then(res=>{
            //   this.point = res[0].balance
            // });
        });
    };
    IBankingPage.prototype.get_bank_info = function (id) {
        var _this = this;
        this.sellkayaService.get_bank_info(id).subscribe(function (res) {
            _this.bank_info = res;
            _this.balance = res[0].balance;
            _this.storage.set('user_bank', res);
        });
    };
    IBankingPage.prototype.get_point_info = function (id) {
        var _this = this;
        this.sellkayaService.get_point_info(id).subscribe(function (res) {
            _this.point_info = res;
            _this.point = res[0].balance;
            _this.storage.set('user_point', res);
        });
    };
    IBankingPage.prototype.goToBookbank = function () {
        this.navCtrl.push("i-banking-bookbank");
    };
    IBankingPage.prototype.goToPointReward = function () {
        this.navCtrl.push("i-banking-pointreward");
    };
    IBankingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-i-banking',template:/*ion-inline-start:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/i-banking/i-banking.html"*/'<ion-header>\n  <ion-navbar [hideBackButton]="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ธนาคารขยะ</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content id="page1">\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4>\n          <img src="./assets/imgs/user_logo.png" style="display:block;height:auto;margin-left:auto;margin-right:auto;"\n          />\n        </ion-col>\n        <ion-col col-8>\n          <h1>\n            <strong>\n              {{username}}  {{secondname}}\n            </strong>\n          </h1>\n          <h2>\n             {{balance}} บาท\n          </h2>\n          <h2>\n             {{point}} คะแนน\n          </h2>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <img src="./assets/imgs/creditcard.png">\n  <!-- <div id="page1-container5" class="row">\n    <div class="col-40 col-4">\n\n    </div>\n    <div id="page1-markdown13" class="show-list-numbers-and-dots col-50 col-8">\n\n    </div>\n  </div>\n  <div class="spacer" style="width:283px;height:23px;" id="page1-spacer4"></div>\n  <ion-list id="page1-list2">\n    <ion-item color="none" on-click="goToBookbank()" id="page1-list-item9">\n      <ion-icon name="logo-bitcoin" item-start></ion-icon>\n      บัญชีธนาคารขยะ\n      <ion-icon name="arrow-forward" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="none" on-click="goToPointReward()" id="page1-list-item10">\n      <ion-icon name="add-circle" item-start></ion-icon>\n      แต้มสะสม\n      <ion-icon name="arrow-forward" item-right></ion-icon>\n    </ion-item>\n  </ion-list> -->\n</ion-content>\n'/*ion-inline-end:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/i-banking/i-banking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_buyers_service_buyers_service__["a" /* BuyersServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_sell_kaya_service_sell_kaya_service__["a" /* SellKayaServiceProvider */]])
    ], IBankingPage);
    return IBankingPage;
}());

//# sourceMappingURL=i-banking.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IBankingBookbankPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_i_banking_i_banking__ = __webpack_require__(320);
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
 * Generated class for the IBankingBookbankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IBankingBookbankPage = (function () {
    function IBankingBookbankPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IBankingBookbankPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IBankingBookbankPage');
    };
    IBankingBookbankPage.prototype.goToIBanking = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_i_banking_i_banking__["a" /* IBankingPage */]);
    };
    IBankingBookbankPage.prototype.goToIBankingTransferMoney = function () {
        this.navCtrl.push("i-banking-transfer-money");
    };
    IBankingBookbankPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-i-banking-bookbank',template:/*ion-inline-start:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/i-banking-bookbank/i-banking-bookbank.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        รายละเอียดบัญชี\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding id="page2">\n    <div>\n      <img src="./assets/imgs/logo_user.png" style="display:block;width:30%;height:auto;margin-left:auto;margin-right:auto;" />\n    </div>\n    <div class="spacer" style="width:283px;height:18px;" id="page2-spacer14"></div>\n    <div id="page2-markdown29" style="text-align:center;" class="show-list-numbers-and-dots">\n      <p style="color:#747474;">\n        <strong>\n          ยอดเงินที่ใช่ได้\n        </strong>\n        100.00 บาท\n      </p>\n      <p style="color:#747474;">\n        <strong>\n          ยอดเงินคงเหลือ\n        </strong>\n        100.00 บาท\n      </p>\n    </div>\n    <button id="page2-button13" ion-button color="positive" block on-click="goToIBankingTransferMoney()">\n      โอนเงิน\n    </button>\n    <ion-row>\n      <ion-col col-6 id="page2-container39">\n        <div id="page2-markdown30" class="show-list-numbers-and-dots">\n          <p style="color:#000000;">\n            ชือผลิตภัณฑ์ :\n          </p>\n          <p style="color:#000000;">\n            ประเภทบัญชี :\n          </p>\n          <p style="color:#000000;">\n            เลขบัญชี :\n          </p>\n          <p style="color:#000000;">\n            ชื่อบัญชี :\n          </p>\n          <p style="color:#000000;">\n            สถานะบัญชี :\n          </p>\n          <p style="color:#000000;">\n            สาขา :\n          </p>\n        </div>\n      </ion-col>\n      <ion-col col-6 id="page2-container40">\n        <div id="page2-markdown31" class="show-list-numbers-and-dots">\n          <p style="color:#000000;">\n            บัญชี RFTM\n          </p>\n          <p style="color:#000000;">\n            ออมทรัพย์\n          </p>\n          <p style="color:#000000;">\n            630-000-0000\n          </p>\n          <p style="color:#000000;">\n            นายสมชาย ใจดี\n          </p>\n          <p style="color:#000000;">\n            ปกติ (active)\n          </p>\n          <p style="color:#000000;">\n            เซ็นทรัล\n          </p>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-content>\n  <ion-footer>\n    <button ion-button block outline (click)="goToIBanking()">กลับ</button>\n  </ion-footer>'/*ion-inline-end:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/i-banking-bookbank/i-banking-bookbank.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], IBankingBookbankPage);
    return IBankingBookbankPage;
}());

//# sourceMappingURL=i-banking-bookbank.js.map

/***/ })

});
//# sourceMappingURL=3.js.map