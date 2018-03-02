webpackJsonp([10],{

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
            selector: 'purchase-product',template:/*ion-inline-start:"/Users/piraan/Desktop/Desktop - Piraan’s MacBook Air/trash/trash/src/pages/purchcase-product/purchase-product.html"*/'<!--\n  Generated template for the DechetRewardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar [hideBackButton]="true">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>ซื้อสินค้าออนไลน์</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n\n      <ion-card>\n        <ion-row>\n        <ion-col col-8>\n              <ion-item>\n                <ion-avatar item-start>\n                  <ion-img src="./assets/imgs/user_logo.png"></ion-img>\n                </ion-avatar> \n                <!-- <h2>Marty McFly</h2>\n                <p>November 5, 1955</p> -->\n              </ion-item>\n       </ion-col>\n       <ion-col col-4 class="_net"> \n         <div class="money">0.00 <span class="unit">บาท</span></div>\n         <div class="point">0 <span class="unit">คะแนน</span></div>\n       </ion-col>\n      </ion-row>\n      </ion-card>\n\n\n    <ion-row>\n      <ion-col col-12>\n        <ion-slides autoplay="3000" loop="true" speed="3000">\n          <ion-slide *ngFor="let image of images">\n            <img [src]="image.img" style="height: 200px; width:100%;">\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n\n    <ion-list>\n        <ion-item style="background:#F28784">\n          <!-- (click)="go_to_promotions()"> -->\n          <span item-start>\n            <img src="./assets/imgs/purchase_product/promotiontopic.png">\n          </span>\n          <h1>ร่วมสนุกชิงรางวัล</h1>\n        </ion-item>\n        <ion-item style="background:#efbdb9; text-align:center"> \n          <!-- (click)="go_to_productcategory(\'phone\')"> -->\n            <span item-end>\n                <img src="./assets/imgs/purchase_product/phonetopic.png">\n              </span>\n          <h1>โทรศัพท์<br>และ<br>อุปกรณ์เสริม</h1>\n        </ion-item>\n        <ion-item style="background:#d6d8d2; text-align:center">\n\n        <!-- (click)="go_to_productcategory(\'bag_and_shoe\')"> -->\n            <span item-start>\n                <img src="./assets/imgs/purchase_product/bag_and_shoetopic.png">\n              </span>\n          <h1>รองเท้า<br>และ<br>กระเป๋า</h1>\n        </ion-item>\n        <ion-item style="background:#ebd8bd; text-align:center">\n        <!-- (click)="go_to_productcategory(\'cosmetic\')"> -->\n            <span item-end>\n                <img src="./assets/imgs/purchase_product/cosmetictopic.png">\n              </span>\n          <h1>เครื่องสำอางค์</h1>\n        </ion-item>\n      </ion-list>\n    <!-- <ion-row>\n      <ion-col col-6 *ngFor="let product of products" text-center \n        (click)="get_product_details()" style="background-color: #fff;border:2px solid #9A9DB2">\n            <ion-img width="100" height="100" src="{{product.img}}"></ion-img>\n\n              <ion-label>{{product.name}}</ion-label>\n            <ion-grid style="margin-top:-20px">\n              <ion-row>\n                <ion-col col-6>\n                  <span style="font-size:18px; color:red">{{product.discount}}</span><span>%</span>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-icon name=\'logo-bitcoin\'></ion-icon>{{product.price}}<br>\n                    <ion-icon name=\'star\'></ion-icon>{{product.point}}\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n      </ion-col>\n    </ion-row> -->\n</ion-content>\n<!-- <ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 text-center>\n        <button ion-button color="primary"  block>\n          <ion-icon name=\'ios-home-outline\'></ion-icon>&nbsp;หน้าแรก</button>\n      </ion-col>\n      <ion-col col-6 text-center>\n        <button ion-button color="primary"  block (click)="go_to_promotions()">\n          <ion-icon name=\'ios-megaphone-outline\'></ion-icon>&nbsp;โปรโมชั่น</button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer> -->\n\n'/*ion-inline-end:"/Users/piraan/Desktop/Desktop - Piraan’s MacBook Air/trash/trash/src/pages/purchcase-product/purchase-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PurchaseProductPage);
    return PurchaseProductPage;
}());

//# sourceMappingURL=purchase-product.js.map

/***/ })

});
//# sourceMappingURL=10.js.map