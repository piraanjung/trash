webpackJsonp([16],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerKayaCategoriesPageModule", function() { return BuyerKayaCategoriesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buyer_kaya_categories__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_kaya_list_service_kaya_list_service__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BuyerKayaCategoriesPageModule = (function () {
    function BuyerKayaCategoriesPageModule() {
    }
    BuyerKayaCategoriesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buyer_kaya_categories__["a" /* BuyerKayaCategoriesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buyer_kaya_categories__["a" /* BuyerKayaCategoriesPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_kaya_list_service_kaya_list_service__["a" /* KayaListServiceProvider */]]
        })
    ], BuyerKayaCategoriesPageModule);
    return BuyerKayaCategoriesPageModule;
}());

//# sourceMappingURL=buyer-kaya-categories.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyerKayaCategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_kaya_list_service_kaya_list_service__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuyerKayaCategoriesPage = (function () {
    function BuyerKayaCategoriesPage(navCtrl, navParams, KayaListService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.KayaListService = KayaListService;
        this.user = {};
        this.items = [];
        this.purchase_items = [];
        this.btn_purchase_items_status = true;
        this.address = 'เทศบาลตำบลพังโคน สกลนคร';
    }
    BuyerKayaCategoriesPage.prototype.ionViewDidLoad = function () {
        this.user = this.navParams.get('user');
        this.user = (typeof this.user != 'undefined' ? this.user : 0);
        if (this.user != '0') {
            this.user_cate_id = this.user.user_cat_id;
            this.office_id = this.user.office_id;
        }
        console.log(this.user);
        // if (this.purchase_items != null) this.btn_purchase_items_status = false
        this.get_kaya_list();
    };
    BuyerKayaCategoriesPage.prototype.ionViewWillEnter = function () {
        var items = localStorage.getItem("purchase_kaya_list");
        this.purchase_items = JSON.parse(items);
        if (this.purchase_items != null)
            this.btn_purchase_items_status = false;
    };
    BuyerKayaCategoriesPage.prototype.get_kaya_list = function () {
        var _this = this;
        var param = {
            user_cat_id: this.user_cate_id,
            office_id: this.office_id
        };
        this.KayaListService.get_kaya_list(param).subscribe(function (res) {
            _this.items = res;
        });
    };
    BuyerKayaCategoriesPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.get_kaya_list();
        }
    };
    BuyerKayaCategoriesPage.prototype.itemSelected = function (value) {
        this.navCtrl.push("buyer-kaya-form-calculator", {
            item: value,
            user: this.user
        });
    };
    BuyerKayaCategoriesPage.prototype.goto_buyer_kaya_purchase = function () {
        this.navCtrl.push("buyer-kaya-purchase-list", {
            user: this.user
        });
    };
    BuyerKayaCategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buyer-kaya-categories',template:/*ion-inline-start:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/buyer-kaya-categories/buyer-kaya-categories.html"*/'<ion-header>\n  \n    <ion-navbar [hideBackButton]="false"  color="nav_blue">\n      <button ion-button menuToggle right>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n      <ion-title style="text-align: center;" color="nav_blue">รับซื้อขยะ</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content class="my_bg">\n    <ion-card>  <ion-grid>\n      <ion-row>\n        <ion-col col-3>\n          <img src="./assets/imgs/user_logo.png"/>\n        </ion-col>\n  \n        <ion-col col-9>\n          <ion-row>\n            <ion-col col-9>\n                <h2>{{ user.mobile }} \n                  \n                </h2>\n              <h2>{{ user.name }}  {{user.second_name}}</h2>\n            </ion-col>\n            <ion-col col-3>\n                <button ion-button color="dark" [disabled]=btn_purchase_items_status (click)="goto_buyer_kaya_purchase()">\n                    <ion-icon name="cart"></ion-icon>\n                  </button>\n            </ion-col>\n          </ion-row>\n            \n          \n  \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  \n  \n    <!-- <ion-searchbar (ionInput)="getItems($event)" placeholder="ค้นขยะ..."></ion-searchbar> -->\n    <ion-card *ngFor="let value of items" (click)="itemSelected(value)" class="card_kaya">\n      <ion-card-header>\n        <ion-row>\n          <ion-col col-8>\n            {{ value.name }} \n          </ion-col>\n          <ion-col col-4 class="kaya_type_txt">\n            {{ value.kaya_type_name }}\n          </ion-col>\n        </ion-row>\n        \n        <ion-row>\n          <ion-col style="text-align:right">\n              <strong>{{ value.est_price }}บาท : {{ value.unit_name }}</strong>\n          </ion-col>\n        </ion-row>\n  \n      </ion-card-header>\n  \n    </ion-card>\n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/buyer-kaya-categories/buyer-kaya-categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_kaya_list_service_kaya_list_service__["a" /* KayaListServiceProvider */]])
    ], BuyerKayaCategoriesPage);
    return BuyerKayaCategoriesPage;
}());

//# sourceMappingURL=buyer-kaya-categories.js.map

/***/ })

});
//# sourceMappingURL=16.js.map