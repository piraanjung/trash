webpackJsonp([19],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyKayaSummaryPageModule", function() { return BuyKayaSummaryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buy_kaya_summary__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuyKayaSummaryPageModule = (function () {
    function BuyKayaSummaryPageModule() {
    }
    BuyKayaSummaryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buy_kaya_summary__["a" /* BuyKayaSummaryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buy_kaya_summary__["a" /* BuyKayaSummaryPage */]),
            ],
        })
    ], BuyKayaSummaryPageModule);
    return BuyKayaSummaryPageModule;
}());

//# sourceMappingURL=buy-kaya-summary.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyKayaSummaryPage; });
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


// import { Printer } from '@ionic-native/printer';
// import { BuyKayaPage } from '../buy-kaya/buy-kaya';
/**
 * Generated class for the BuyKayaSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuyKayaSummaryPage = (function () {
    function BuyKayaSummaryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.organic_datas = [];
        this.recycle_datas = [];
        this.hazard_datas = [];
        this.organic_datas = [
            {
                'id': 1,
                'name': 'เศษอาหาร',
                'price': 20,
                'unitcount': 'กก.',
                'unit': 'แต้ม',
                'total': 2.5
            },
            {
                'id': 2,
                'name': 'ใบไม้',
                'price': 10,
                'unitcount': 'กก.',
                'unit': 'แต้ม',
                'total': 2
            },
        ];
        this.recycle_datas = [
            {
                'id': 'r1',
                'name': 'ขวด PET',
                'price': 7,
                'unitcount': 'กก.',
                'unit': 'บาท',
                'total': 2
            },
            {
                'id': 'r2',
                'name': 'กระดาษ',
                'price': 10,
                'unitcount': 'กก.',
                'unit': 'บาท',
                'total': 2.5
            },
        ];
        this.hazard_datas = [
            {
                'id': 'h1',
                'name': 'หลอดฟลูออเรสเซนต์',
                'price': 200,
                'unitcount': 'หลอด',
                'unit': 'แต้ม',
                'total': 2
            },
            {
                'id': 'h2',
                'name': 'ถ่านไฟฉาย AAA',
                'price': 50,
                'unitcount': 'ก้อน',
                'unit': 'แต้ม',
                'total': 2
            },
        ];
    }
    BuyKayaSummaryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuyKayaSummaryPage');
    };
    BuyKayaSummaryPage.prototype.gotoBuyKaya = function () {
        this.navCtrl.push("buy-kaya");
    };
    BuyKayaSummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buy-kaya-summary',template:/*ion-inline-start:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/buy-kaya-summary/buy-kaya-summary.html"*/'<!--\n  Generated template for the BuyDechetSummaryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar [hideBackButton]="true">\n    <ion-title>สรุปการซื้อขยะ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content id="_print">\n  <ion-list>\n    <ion-item>\n      ผู้ซื้อ : เทศบาลอำเภอพังโคน [SK-PK01]\n    </ion-item>\n    <ion-item>\n      ผู้ขาย : คุณสมชาย ใจดี [U-SK-PK00001]\n    </ion-item>\n    <ion-item>\n      <div>\n        <span>เลขที่การขาย</span>\n        <span style="float:right">C-23455-202060</span>\n      </div>\n      <div>\n        <span>ซื้อขายวันที่</span>\n        <span style="float:right">20 สิงหาคม 2560</span>\n      </div>\n    </ion-item>\n  </ion-list>\n    <ion-item-divider>\n      <ion-row style="border-bottom:1px solid #000000">\n        <ion-col col-5>รายการ</ion-col>\n        <ion-col col-2 class="txt-align-r">ราคา</ion-col>\n        <ion-col col-2 class="txt-align-r">จำนวน</ion-col>\n        <ion-col col-3 class="txt-align-r">รวม</ion-col>\n      </ion-row>\n      <ion-row *ngFor="let data of recycle_datas;let i= index">\n        <ion-col col-5>{{data.name}}</ion-col>\n        <ion-col col-2 class="txt-align-r">\n          {{data.price}}\n          <span class="unit">{{data.unit}}</span>\n        </ion-col>\n        <ion-col col-2 class="txt-align-r">\n          {{data.total}}\n          <span class="unit">{{data.unitcount}}</span>\n        </ion-col>\n        <ion-col col-3 class="txt-align-r">\n          {{data.price * data.total}}\n          <span class="unit">{{data.unit}}</span>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor="let data of organic_datas;let i= index">\n        <ion-col col-5>{{data.name}}</ion-col>\n        <ion-col col-2 class="txt-align-r">\n          {{data.price}}\n          <span class="unit">{{data.unit}}</span>\n        </ion-col>\n        <ion-col col-2 class="txt-align-r">\n          {{data.total}}\n          <span class="unit">{{data.unitcount}}</span>\n        </ion-col>\n        <ion-col col-3 class="txt-align-r">\n          {{data.price * data.total}}\n          <span class="unit">{{data.unit}}</span>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor="let data of hazard_datas;let i= index">\n        <ion-col col-5>{{data.name}}</ion-col>\n        <ion-col col-2 class="txt-align-r">\n          {{data.price}}\n          <span class="unit">{{data.unit}}</span>\n        </ion-col>\n        <ion-col col-2 class="txt-align-r">\n          {{data.total}}\n          <span class="unit">{{data.unitcount}}</span>\n        </ion-col>\n        <ion-col col-3 class="txt-align-r">\n          {{data.price * data.total}}\n          <span class="unit">{{data.unit}}</span>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n\n</ion-content>\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button block  (click)="gotoBuyKaya()">กลับไปหน้าหลัก</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button block color="secondary" (click)="print()">Print</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/buy-kaya-summary/buy-kaya-summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], BuyKayaSummaryPage);
    return BuyKayaSummaryPage;
}());

//# sourceMappingURL=buy-kaya-summary.js.map

/***/ })

});
//# sourceMappingURL=19.js.map