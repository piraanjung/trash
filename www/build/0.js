webpackJsonp([0,1,10],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseProductPageModule", function() { return PurchaseProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__purchase_product__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PurchaseProductPageModule = (function () {
    function PurchaseProductPageModule() {
    }
    PurchaseProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__purchase_product__["a" /* PurchaseProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__purchase_product__["a" /* PurchaseProductPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
        })
    ], PurchaseProductPageModule);
    return PurchaseProductPageModule;
}());

//# sourceMappingURL=purchase-product.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseProductSlidePageModule", function() { return PurchaseProductSlidePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__purchase_product_slide__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__purchcase_product_purchase_product_module__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PurchaseProductSlidePageModule = (function () {
    function PurchaseProductSlidePageModule() {
    }
    PurchaseProductSlidePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__purchase_product_slide__["a" /* PurchaseProductSlidePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__purchase_product_slide__["a" /* PurchaseProductSlidePage */]),
                __WEBPACK_IMPORTED_MODULE_3__purchcase_product_purchase_product_module__["PurchaseProductPageModule"]
            ],
        })
    ], PurchaseProductSlidePageModule);
    return PurchaseProductSlidePageModule;
}());

//# sourceMappingURL=purchase-product-slide.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellKayaPageModule", function() { return SellKayaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sell_kaya__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sell_kaya_service_sell_kaya_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__purchase_product_slide_purchase_product_slide_module__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SellKayaPageModule = (function () {
    function SellKayaPageModule() {
    }
    SellKayaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sell_kaya__["a" /* SellKayaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sell_kaya__["a" /* SellKayaPage */]),
                __WEBPACK_IMPORTED_MODULE_4__purchase_product_slide_purchase_product_slide_module__["PurchaseProductSlidePageModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_sell_kaya_service_sell_kaya_service__["a" /* SellKayaServiceProvider */]]
        })
    ], SellKayaPageModule);
    return SellKayaPageModule;
}());

//# sourceMappingURL=sell-kaya.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseProductPage; });
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


// import { PurchaseProductService } from "./purchase-product.service";
// import { ProductsService } from "../products/products.service";
/**
 * Generated class for the PurchaseProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PurchaseProductPage = (function () {
    function PurchaseProductPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.images = [];
        this.item = [];
        this.products = [];
    }
    PurchaseProductPage.prototype.ionViewDidLoad = function () {
        this.images = [
            { img: "./assets/item_images/slide1.jpg" },
            { img: "./assets/item_images/slide2.jpg" },
            { img: "./assets/item_images/slide3.jpg" },
            { img: "./assets/item_images/slide4.jpg" },
            { img: "./assets/item_images/slide5.jpg" },
        ];
        // this.productsService.get_products().subscribe(res => {
        //   this.products = res["results"];
        // });
    };
    PurchaseProductPage.prototype.go_to_promotions = function () {
        this.navCtrl.push('promotions');
    };
    PurchaseProductPage.prototype.get_product_details = function () {
        this.navCtrl.push('product-details');
    };
    PurchaseProductPage.prototype.go_to_productcategory = function (category) {
        this.navCtrl.push('purchase-product-category', {
            cat: category
        });
    };
    PurchaseProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'purchase-product',template:/*ion-inline-start:"/Users/piraan/Desktop/refuze-app/trash/src/pages/purchcase-product/purchase-product.html"*/'<!--\n  Generated template for the DechetRewardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar [hideBackButton]="true">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>ซื้อสินค้าออนไลน์</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n\n      <ion-card>\n        <ion-row>\n        <ion-col col-8>\n              <ion-item>\n                <ion-avatar item-start>\n                  <ion-img src="./assets/imgs/user_logo.png"></ion-img>\n                </ion-avatar> \n                <!-- <h2>Marty McFly</h2>\n                <p>November 5, 1955</p> -->\n              </ion-item>\n       </ion-col>\n       <ion-col col-4 class="_net"> \n         <div class="money">0.00 <span class="unit">บาท</span></div>\n         <div class="point">0 <span class="unit">คะแนน</span></div>\n       </ion-col>\n      </ion-row>\n      </ion-card>\n\n\n    <ion-row>\n      <ion-col col-12>\n        <ion-slides autoplay="3000" loop="true" speed="3000">\n          <ion-slide *ngFor="let image of images">\n            <img [src]="image.img" style="height: 200px; width:100%;">\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n\n    <ion-list>\n        <ion-item style="background:#F28784">\n          <!-- (click)="go_to_promotions()"> -->\n          <span item-start>\n            <img src="./assets/imgs/purchase_product/promotiontopic.png">\n          </span>\n          <h1>ร่วมสนุกชิงรางวัล</h1>\n        </ion-item>\n        <ion-item style="background:#efbdb9; text-align:center"> \n          <!-- (click)="go_to_productcategory(\'phone\')"> -->\n            <span item-end>\n                <img src="./assets/imgs/purchase_product/phonetopic.png">\n              </span>\n          <h1>โทรศัพท์<br>และ<br>อุปกรณ์เสริม</h1>\n        </ion-item>\n        <ion-item style="background:#d6d8d2; text-align:center">\n\n        <!-- (click)="go_to_productcategory(\'bag_and_shoe\')"> -->\n            <span item-start>\n                <img src="./assets/imgs/purchase_product/bag_and_shoetopic.png">\n              </span>\n          <h1>รองเท้า<br>และ<br>กระเป๋า</h1>\n        </ion-item>\n        <ion-item style="background:#ebd8bd; text-align:center">\n        <!-- (click)="go_to_productcategory(\'cosmetic\')"> -->\n            <span item-end>\n                <img src="./assets/imgs/purchase_product/cosmetictopic.png">\n              </span>\n          <h1>เครื่องสำอางค์</h1>\n        </ion-item>\n      </ion-list>\n    <!-- <ion-row>\n      <ion-col col-6 *ngFor="let product of products" text-center \n        (click)="get_product_details()" style="background-color: #fff;border:2px solid #9A9DB2">\n            <ion-img width="100" height="100" src="{{product.img}}"></ion-img>\n\n              <ion-label>{{product.name}}</ion-label>\n            <ion-grid style="margin-top:-20px">\n              <ion-row>\n                <ion-col col-6>\n                  <span style="font-size:18px; color:red">{{product.discount}}</span><span>%</span>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-icon name=\'logo-bitcoin\'></ion-icon>{{product.price}}<br>\n                    <ion-icon name=\'star\'></ion-icon>{{product.point}}\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n      </ion-col>\n    </ion-row> -->\n</ion-content>\n<!-- <ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 text-center>\n        <button ion-button color="primary"  block>\n          <ion-icon name=\'ios-home-outline\'></ion-icon>&nbsp;หน้าแรก</button>\n      </ion-col>\n      <ion-col col-6 text-center>\n        <button ion-button color="primary"  block (click)="go_to_promotions()">\n          <ion-icon name=\'ios-megaphone-outline\'></ion-icon>&nbsp;โปรโมชั่น</button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer> -->\n\n'/*ion-inline-end:"/Users/piraan/Desktop/refuze-app/trash/src/pages/purchcase-product/purchase-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PurchaseProductPage);
    return PurchaseProductPage;
}());

//# sourceMappingURL=purchase-product.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseProductSlidePage; });
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
 * Generated class for the PurchaseProductSlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PurchaseProductSlidePage = (function () {
    function PurchaseProductSlidePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
            {
                title: "ยินดีต้อนรับสู่ <br>Refuze Shopping Online",
                description: "แหล่งรวมสินค้าราคาถูก  โปรโมชั่นโดนใจ <br>สิทธิพิเศษสำหรับสมาชิก Refuze เท่านั้น",
                image: "./assets/imgs/purchase_product/purchase_product_slide1.png",
            },
            {
                title: "แลกซื้อสินค้าด้วยเงินขายขยะ",
                description: "<b>ท่านสามารถนำเงินสะสมจากการขายขยะ<br>มาแลกซื้อสินค้าในราคาพิเศษ<br>เพื่อสมาชิกเท่านั้น</b> ",
                image: "./assets/imgs/purchase_product/purchase_product_slide2.png",
            },
            {
                title: "หรือ ใช้แต้มสะสมแลกสินค้า",
                description: "<b>ท่านสามารถนำแต้มสะสมมาแลกซื้อสินค้า<br>โดยไม่ต้องจ่ายเงิน</b> ",
                image: "./assets/imgs/purchase_product/purchase_product_slide3.png",
            }
        ];
    }
    PurchaseProductSlidePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PurchaseProductSlidePage');
    };
    PurchaseProductSlidePage.prototype.goToPurchaseProduct = function () {
        this.navCtrl.push("purchase-product");
    };
    PurchaseProductSlidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-purchase-product-slide',template:/*ion-inline-start:"/Users/piraan/Desktop/refuze-app/trash/src/pages/purchase-product-slide/purchase-product-slide.html"*/'<!--\n  Generated template for the PurchaseProductSlidePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>สินค้าออนไลน์</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="tutorial-page">\n\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button color="primary" (click)="goToPurchaseProduct()">Skip</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img [src]="slide.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img src="./assets/imgs/purchase_product/purchase_product_slide4.png" class="slide-image"/>\n      <h2 class="slide-title">สบายกระเป๋าเอาแต้มแลกสินค้า<br>\n        สุขหรรษาได้ซื้อสินค้าราคาถูก\n      </h2>\n      <button ion-button large clear icon-end color="primary" (click)="goToPurchaseProduct()">\n        พร้อมแล้วไปกันเลย\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/piraan/Desktop/refuze-app/trash/src/pages/purchase-product-slide/purchase-product-slide.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PurchaseProductSlidePage);
    return PurchaseProductSlidePage;
}());

//# sourceMappingURL=purchase-product-slide.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellKayaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sell_kaya_service_sell_kaya_service__ = __webpack_require__(204);
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
 * Generated class for the SellKayaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SellKayaPage = (function () {
    function SellKayaPage(navCtrl, navParams, storage, sellkayaService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.sellkayaService = sellkayaService;
        this.point_info = [];
        this.bank_info = [];
        this.currentuser = [];
        this.get_user_info();
        // หา ratio ของ screen
        this.shouldHeight = document.body.clientHeight;
        this.shouldWidth = document.body.clientWidth;
        // let v = window.devicePixelRatio;
        console.log(this.shouldHeight);
        this.set_image_ratio(this.shouldHeight);
    }
    SellKayaPage.prototype.localproduct = function () {
        this.navCtrl.push("buy-localproducts");
    };
    SellKayaPage.prototype.goToSellKayaUpValue = function () {
        this.navCtrl.push("sell-kaya-upvalue");
    };
    SellKayaPage.prototype.iBaking = function () {
        this.navCtrl.push("i-banking");
    };
    SellKayaPage.prototype.gotoPurchaseProduct = function () {
        this.navCtrl.push("purchase-product-slide");
    };
    SellKayaPage.prototype.gotoSellKayaEstimatePrice = function () {
        this.navCtrl.push("sell-kaya-estimateprice");
    };
    SellKayaPage.prototype.gotoDechetReward = function () {
        this.navCtrl.push('dechet-reward-page');
    };
    SellKayaPage.prototype.gotoSellKayaProcess = function () {
        this.navCtrl.push("sell-kaya-process");
    };
    SellKayaPage.prototype.gotoSellKayaBuyerSearch = function () {
        this.navCtrl.push("sell-kaya-buyersearch");
    };
    SellKayaPage.prototype.goToSellKayaHistory = function () {
        this.navCtrl.push("sell-kaya-history");
    };
    SellKayaPage.prototype.ionViewDidLoad = function () {
        // console.log(v)
    };
    SellKayaPage.prototype.get_user_info = function () {
        var _this = this;
        this.storage.get('currentUser').then(function (val) {
            _this.currentuser = val;
            _this.storage.set('user_cat_id', _this.currentuser.user_cat_id); //val.user_cat_id
            _this.get_bank_info(_this.currentuser.id);
            _this.get_point_info(_this.currentuser.id);
        });
    };
    SellKayaPage.prototype.get_bank_info = function (id) {
        var _this = this;
        this.sellkayaService.get_bank_info(id).subscribe(function (res) {
            _this.bank_info = res;
            _this.balance = res[0].balance;
            _this.storage.set('user_bank', res);
        });
    };
    SellKayaPage.prototype.get_point_info = function (id) {
        var _this = this;
        this.sellkayaService.get_point_info(id).subscribe(function (res) {
            _this.point_info = res;
            _this.point = res[0].balance;
            _this.storage.set('user_point', res);
        });
    };
    SellKayaPage.prototype.set_image_ratio = function (shouldHeight) { };
    SellKayaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sell-kaya',template:/*ion-inline-start:"/Users/piraan/Desktop/refuze-app/trash/src/pages/sell-kaya/sell-kaya.html"*/'<!--\n  Generated template for the SellKayaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar [hideBackButton]="true">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>ขายขยะ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <!-- <div *ngIf="currentuser.user_cat_id != 2"> -->\n    <ion-row>\n      <ion-col col-6 >\n        <!-- <button ion-button class="circle" end (click)="gotoSellKayaProcess()">ขายขยะ</button> -->\n        <ion-buttons end >\n            <button (click)="gotoSellKayaProcess()" ion-button class="circle">\n                ขายขยะ\n            </button>\n          </ion-buttons>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button class="circle" (click)="iBaking()">ธนาคารขยะ</button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <ion-buttons end>\n          <button ion-button class="circle" (click)="gotoPurchaseProduct()">ซื้อสินค้าออนไลน์</button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button class="circle" (click)="localproduct()">ซื้อ-ขาย <br><br> สินค้าท้องถิ่น</button>\n      </ion-col>\n    </ion-row>\n      \n    <ion-row>\n        <ion-col col-6>\n          <ion-buttons end>\n            <button ion-button class="circle" (click)="gotoSellKayaEstimatePrice()">ราคากลางขยะ</button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button class="circle" (click)="goToSellKayaUpValue()">คัดแยกขยะ<br><br>เพื่อเพิ่มมูลค่า</button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n          <ion-col col-6>\n            <ion-buttons end>\n              <button ion-button class="circle" (click)="goToSellKayaHistory()">ประวัติ<br><br>การขายขยะ</button>\n            </ion-buttons>\n          </ion-col>\n          <ion-col col-6>\n            <button ion-button class="circle" (click)="goToSellKayaUpValue()">คัดแยกขยะ<br><br>เพื่อเพิ่มมูลค่า</button>\n          </ion-col>\n        </ion-row>\n<!--       \n      \n        <ion-card (click)="gotoSellKayaBuyerSearch()">\n          \n          <div class="card-title">ค้นหาผู้ซื้อขยะ</div>\n          <div class="card-subtitle">รายละเอียด...</div>\n        </ion-card> -->\n      \n        <!-- </div> -->\n\n        <!-- <div *ngIf="currentuser.user_cat_id == 2">\n          \n          <ion-grid>\n            <ion-row>\n              <ion-col col-7>\n                <ion-img src="./assets/imgs/onlineproductmenu.png" class="sk_menu" \n                  [width]="w" [height]="h" (click)="gotoPurchaseProduct()"></ion-img>\n              </ion-col>\n              <ion-col col-5 style="color:#1522e2;text-align:center">\n                <div>{{currentuser.name}}  {{currentuser.second_name}}</div>\n                <div >\n                    <b>{{balance}}<span style="font-size:10px;"> บาท</span> </b>\n                </div>\n                <div>\n                    <b>{{point}} <span style="font-size:10px;">  คะแนน</span></b>\n                </div>\n                \n              </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                  <ion-img src="./assets/imgs/localproductmenu.png"  style="margin-left:3%" \n                   class="sk_menu" [(width)]="w"  [(height)]="h"></ion-img>\n                </ion-col>\n                <ion-col col-4 style="color:#000000;">\n                    <h3>\n                      300 <span style="font-size:12px;">คะแนน</span></h3> \n                  </ion-col>\n                  \n                </ion-row>\n\n                <ion-row>\n                <ion-col col-6 style="text-align:right">\n                  <ion-img src="./assets/imgs/bankmenu.png" class="sk_menu" \n                  [style]="s" [(width)]="w" [(height)]="h"></ion-img>\n                </ion-col>\n                <ion-col col-6  class="_name">\n                 <div style="float: left;margin-top: -18%;margin-left: 5%;" >Pipatpong Hongzaeng</div> \n             </ion-col>\n              </ion-row>\n\n              <ion-row>\n                  <ion-col col-6>\n                    <ion-img src="./assets/imgs/expanpricemenu.png" class="sk_menu" [width]="w" [height]="h"></ion-img>\n                  </ion-col>\n                  <ion-col col-6>\n                      <ion-img src="./assets/imgs/estpricemenu.png" class="sk_menu" \n                       [(width)]="w" [(height)]="h" (click)="gotoSellKayaEstimatePrice()"></ion-img>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col col-8 style="text-align:right">\n                      <ion-img src="./assets/imgs/sellkayamenu.png"\n                       class="sk_menu" [(width)]="w" [(height)]="h" \n                       (click)="gotoSellKayaProcess()"></ion-img>\n                    </ion-col>\n                    <ion-col col-4 style="text-align:right">\n                        <ion-img src="./assets/imgs/historymenu.png" class="sk_menu"\n                         [(width)]="w" [(height)]="h" (click)="goToSellKayaHistory()"></ion-img>\n                      </ion-col>\n                  </ion-row>\n              \n          </ion-grid>\n                \n        </div> -->\n    </ion-content>\n\n\n'/*ion-inline-end:"/Users/piraan/Desktop/refuze-app/trash/src/pages/sell-kaya/sell-kaya.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_sell_kaya_service_sell_kaya_service__["a" /* SellKayaServiceProvider */]])
    ], SellKayaPage);
    return SellKayaPage;
}());

//# sourceMappingURL=sell-kaya.js.map

/***/ })

});
//# sourceMappingURL=0.js.map