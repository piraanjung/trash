webpackJsonp([24],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyKayaMatchingPageModule", function() { return BuyKayaMatchingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buy_kaya_matching__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_buyers_service_buyers_service__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BuyKayaMatchingPageModule = (function () {
    function BuyKayaMatchingPageModule() {
    }
    BuyKayaMatchingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buy_kaya_matching__["a" /* BuyKayaMatchingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buy_kaya_matching__["a" /* BuyKayaMatchingPage */])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_buyers_service_buyers_service__["a" /* BuyersServiceProvider */]]
        })
    ], BuyKayaMatchingPageModule);
    return BuyKayaMatchingPageModule;
}());

//# sourceMappingURL=buy-kaya-matching.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyKayaMatchingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_buyers_service_buyers_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BuyKayaMatchingPage = (function () {
    function BuyKayaMatchingPage(navCtrl, navParams, buyersService, toastCtrl, barcodeScanner, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.buyersService = buyersService;
        this.toastCtrl = toastCtrl;
        this.barcodeScanner = barcodeScanner;
        this.storage = storage;
        this.user = {};
        this.has_user = false;
        this.items = {};
        // address: string = 'เทศบาลตำบลพังโคน สกลนคร';
        this.catName = "";
        this.sellercode = "";
        this.seller_matching_by = "qrcode";
        this.data = {};
    }
    BuyKayaMatchingPage.prototype.ionViewDidLoad = function () {
        this.eventId = this.navParams.get('eventId');
        this.eventTitle = this.navParams.get('eventTitle');
        this.buttonText = "Scan";
        this.loading = false;
        var catType = this.navParams.get('cat_type');
        if (catType == "localgovernment") {
            this.catName = "เทศบาล";
            this.catId = 1;
        }
        if (catType == "school") {
            this.catName = "โรงเรียน";
            this.catId = 2;
        }
        if (catType == "hospital") {
            this.catName = "โรงพยาบาล";
            this.catId = 3;
        }
    };
    BuyKayaMatchingPage.prototype.searchSeller = function () {
        if (this.sellercode == "") {
            this.presentToast("ใส่รหัสผู้ขายขยะ");
        }
        else {
            var sellercode = this.sellercode;
            this.search_user(sellercode);
        }
    };
    BuyKayaMatchingPage.prototype.itemSelected = function (item) {
        this.navCtrl.push('buyer-profile', {
            user: item,
        });
    };
    BuyKayaMatchingPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            // this.get_buyers()
        }
    };
    BuyKayaMatchingPage.prototype.Scanqrcode = function () {
        var _this = this;
        this.option = {
            preferFrontCamera: false,
            prompt: "สแกน QR CODE"
        };
        this.barcodeScanner.scan(this.option).then(function (barcodeData) {
            _this.data = barcodeData.text;
            _this.search_user(_this.data);
        }, function (err) {
            // An error occurred
            console.log(err);
        });
    };
    BuyKayaMatchingPage.prototype.presentToast = function (txt) {
        var toast = this.toastCtrl.create({
            message: txt,
            duration: 2000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    BuyKayaMatchingPage.prototype.search_user = function (sellercode) {
        var _this = this;
        // this.buyersService.get_buyer_profile_by_category(sellercode, this.catId).subscribe(res => {
        this.buyersService.get_buyer_profile(sellercode).subscribe(function (res) {
            _this.user = res;
            _this.items = res;
            _this.storage.set('current_seller', _this.user);
            console.log(_this.user);
            if (JSON.stringify(_this.user) == '{}') {
                _this.presentToast("ไม่พบข้อมูล");
                _this.sellercode = "";
                _this.has_user = false;
            }
            else {
                _this.has_user = true;
            }
        }, function (error) {
            _this.presentToast("กรุณาใส่รหัสผู้ขายขยะ");
        });
    };
    BuyKayaMatchingPage.prototype.goto_kaya_categories = function (item) {
        this.navCtrl.push('buyer-kaya-categories', {
            user: this.user,
        });
    };
    BuyKayaMatchingPage.prototype.clearPhoneNumber = function () {
        this.sellercode = "";
    };
    BuyKayaMatchingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buy-kaya-matching',template:/*ion-inline-start:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/buy-kaya-matching/buy-kaya-matching.html"*/'<ion-header>\n\n  <ion-navbar [hideBackButton]="false" color="nav_blue">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title style="text-align: center;">รับซื้อขยะ : หมวด {{ catName }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-content padding>\n\n       \n  <div padding>\n\n   \n\n    <ion-segment [(ngModel)]="seller_matching_by">\n        <ion-segment-button value="qrcode" (click)="clearPhoneNumber()">\n            สแกน QR Code ผู้ขายขยะ\n          </ion-segment-button>\n      <ion-segment-button value="sellercode">\n            รหัสผู้ขายขยะ\n          </ion-segment-button> \n      \n    </ion-segment>\n  </div>\n  <div [ngSwitch]="seller_matching_by">\n      <div *ngSwitchCase="\'qrcode\'">\n          <div style="text-align:center; margin-top:10%">\n              <!-- <img src="./assets/imgs/qrcodBtn.png" (click)="Scanqrcode()"> -->\n            <button ion-button class="circle" (click)="Scanqrcode()">สแกน QR CODE</button>  \n          </div>\n      </div>\n\n    <div *ngSwitchCase="\'sellercode\'">\n          <ion-item class="round-input" style="margin-top:5%"> \n              <ion-input type="text" [(ngModel)]="sellercode" name="sellercode" \n                required placeholder="รหัสผู้ขายขยะ"></ion-input>\n            </ion-item>\n            <button ion-button block large round color="shamrock" (click)="searchSeller()">ค้นหา</button>\n\n        \n    </div>\n  </div>\n\n  <ion-card *ngIf="has_user"> <!--(click)="itemSelected(value)">-->\n  \n    <ion-grid>\n      <ion-row>\n        <ion-col col-4>\n          <img src="assets/imgs/user_logo.png" />\n        </ion-col>\n        <ion-col col-8>\n          <h1 style="font-size:18px; font-weight:bold; \n                          text-align:right">{{ user.mobile }}</h1>\n          <h1 style="font-size:20px; font-weight:bold;  margin-top:15px;\n                           color:#336798 ;text-align:right">{{ user.name }} {{user.second_name}}</h1>\n          <!-- <h1 style="font-size:16px; font-weight:bold;\n                           color:#336798">{{ user.address }}</h1> -->\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          {{ address }}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div padding>\n        <button ion-button large block style="background:#39A2F3"  class="round-input"\n        (click)="goto_kaya_categories(user)">รับซื้อขยะ</button>\n      </div>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/buy-kaya-matching/buy-kaya-matching.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_buyers_service_buyers_service__["a" /* BuyersServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_buyers_service_buyers_service__["a" /* BuyersServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _f || Object])
    ], BuyKayaMatchingPage);
    return BuyKayaMatchingPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=buy-kaya-matching.js.map

/***/ })

});
//# sourceMappingURL=24.js.map