webpackJsonp([12],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerKayaFormCalculatorPageModule", function() { return BuyerKayaFormCalculatorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buyer_kaya_form_calculator__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuyerKayaFormCalculatorPageModule = (function () {
    function BuyerKayaFormCalculatorPageModule() {
    }
    BuyerKayaFormCalculatorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buyer_kaya_form_calculator__["a" /* BuyerKayaFormCalculatorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buyer_kaya_form_calculator__["a" /* BuyerKayaFormCalculatorPage */]),
            ],
        })
    ], BuyerKayaFormCalculatorPageModule);
    return BuyerKayaFormCalculatorPageModule;
}());

//# sourceMappingURL=buyer-kaya-form-calculator.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyerKayaFormCalculatorPage; });
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



var BuyerKayaFormCalculatorPage = (function () {
    function BuyerKayaFormCalculatorPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.shortname = 'กก.';
        this.item = {};
        this.items = [];
        this.user = {};
        this.total_purchase_kaya = 0;
        this.kaya_name = '';
        this.est_price = 0;
        this.total = 0;
        this.address = 'เทศบาลตำบลพังโคน สกลนคร';
    }
    BuyerKayaFormCalculatorPage.prototype.ionViewDidLoad = function () {
        this.user = this.navParams.get('user');
        this.user = (typeof this.user != 'undefined' ? this.user : 0);
        this.item = this.navParams.get('item');
        this.item = (typeof this.user != 'undefined' ? this.item : 0);
        var total_purchase_kaya = localStorage.getItem("total_purchase_kaya");
        this.total_purchase_kaya = (total_purchase_kaya == null ? 0 : total_purchase_kaya);
        // localStorage.removeItem("purchase_kaya_list");
        this.items = JSON.parse(localStorage.getItem("purchase_kaya_list"));
        console.log(this.item);
        if (typeof this.item != 'undefined') {
            this.kaya_name = this.item.name + ' [ ' + this.item.kaya_type_name + ' ]';
            this.est_price = this.item.est_price;
            this.shortname = this.item.short_name;
        }
    };
    BuyerKayaFormCalculatorPage.prototype.calculator = function (event) {
        this.amount = event;
        this.total = this.est_price * this.amount;
    };
    BuyerKayaFormCalculatorPage.prototype.set_purchase_kaya_list = function () {
        if (this.items == null || this.items.length <= 0) {
            this.items = [];
            console.log(typeof this.items);
        }
        if (typeof this.items == 'string') {
            this.items = [];
        }
        console.log(typeof this.items);
        this.items.push({
            id: this.item.id,
            name: this.item.name,
            est_price: this.item.est_price,
            amount: this.amount,
            total: this.total,
            unit: this.item.unit,
            short_name: this.item.short_name,
            kaya_type_name: this.item.kaya_type_name
        });
        this.total_purchase_kaya = this.total + parseFloat(this.total_purchase_kaya);
        localStorage.setItem('total_purchase_kaya', this.total_purchase_kaya);
        localStorage.setItem('purchase_kaya_list', JSON.stringify(this.items));
        this.presentToast();
        this.navCtrl.pop();
    };
    BuyerKayaFormCalculatorPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'บันทึกรายการสำเร็จ',
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    BuyerKayaFormCalculatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buyer-kaya-form-calculator',template:/*ion-inline-start:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/buyer-kaya-form-calculator/buyer-kaya-form-calculator.html"*/'<ion-header>\n\n  <ion-navbar [hideBackButton]="false" color="nav_blue">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title style="text-align: center;" color="nav_blue">บันทึกข้อมูลซื้อขยะ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="my_bg">\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-3>\n          <img src="./assets/imgs/user_logo.png" />\n        </ion-col>\n\n        <ion-col col-9>\n\n          <h2>{{ user.mobile }}\n\n          </h2>\n          <h2>{{ user.name }} {{user.second_name}}</h2>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <div>\n\n    <ion-card class="card_form">\n      <ion-row>\n        <ion-col col-9>\n          <ion-input type="text" [ngModel]="kaya_name" class="topic" readonly=true></ion-input>\n        </ion-col>\n        <ion-col col-3>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n          <span>ราคากลาง</span>\n        </ion-col>\n        <ion-col col-6>\n          <ion-row>\n            <ion-col col-8>\n              <ion-input type="text" [ngModel]="est_price" readonly=true></ion-input>\n            </ion-col>\n            <ion-col col-4>\n              บาท\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style="border-bottom:#ffffff 2px solid ">\n        <ion-col col-6>\n          <span>จำนวน</span>\n        </ion-col>\n        <ion-col col-6>\n          <ion-row>\n            <ion-col col-8>\n              <ion-input type="number" class="weight_input" [ngModel]="amount" (ngModelChange)="calculator($event)"></ion-input>\n            </ion-col>\n            <ion-col col-4>\n              {{ shortname }}\n            </ion-col>\n          </ion-row>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n          <span>คิดเป็นเงิน</span>\n        </ion-col>\n        <ion-col col-6>\n\n          <ion-row>\n            <ion-col col-8>\n              <ion-input type="text" [ngModel]="total" readonly=true></ion-input>\n            </ion-col>\n            <ion-col col-4>\n              บาท\n            </ion-col>\n          </ion-row>\n\n        </ion-col>\n      </ion-row>\n\n    </ion-card>\n\n\n  </div>\n\n  <div padding>\n    <button ion-button block class="round-input" (click)="set_purchase_kaya_list()">บันทึกข้อมูล</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/buyer-kaya-form-calculator/buyer-kaya-form-calculator.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], BuyerKayaFormCalculatorPage);
    return BuyerKayaFormCalculatorPage;
}());

//# sourceMappingURL=buyer-kaya-form-calculator.js.map

/***/ })

});
//# sourceMappingURL=12.js.map