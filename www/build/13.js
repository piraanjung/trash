webpackJsonp([13],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerKayaPurchaseListPageModule", function() { return BuyerKayaPurchaseListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buyer_kaya_purchase_list__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_buy_kaya_service_buy_kaya_service__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BuyerKayaPurchaseListPageModule = (function () {
    function BuyerKayaPurchaseListPageModule() {
    }
    BuyerKayaPurchaseListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buyer_kaya_purchase_list__["a" /* BuyerKayaPurchaseListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buyer_kaya_purchase_list__["a" /* BuyerKayaPurchaseListPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_buy_kaya_service_buy_kaya_service__["a" /* BuyKayaServiceProvider */]]
        })
    ], BuyerKayaPurchaseListPageModule);
    return BuyerKayaPurchaseListPageModule;
}());

//# sourceMappingURL=buyer-kaya-purchase-list.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyerKayaPurchaseListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_buy_kaya_service_buy_kaya_service__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuyerKayaPurchaseListPage = (function () {
    function BuyerKayaPurchaseListPage(navCtrl, navParams, alertCtrl, BuyKayaService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.BuyKayaService = BuyKayaService;
        this.toastCtrl = toastCtrl;
        this.user = {};
        this.items = [];
        this.address = 'เทศบาลตำบลพังโคน สกลนคร';
    }
    BuyerKayaPurchaseListPage.prototype.ionViewDidLoad = function () {
        this.user = this.navParams.get('user');
        this.user = (typeof this.user != 'undefined' ? this.user : 0);
        var items = localStorage.getItem("purchase_kaya_list");
        this.items = JSON.parse(items);
        var total_purchase_kaya = (localStorage.getItem("total_purchase_kaya") == null ? 0 : localStorage.getItem("total_purchase_kaya"));
        this.total_purchase_kaya = total_purchase_kaya;
    };
    BuyerKayaPurchaseListPage.prototype.set_kaya_invoice = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'แจ้งเตือน',
            message: 'คุณต้องการบันทึกข้อมูลการซื้อขยะหรือไม่ ?',
            buttons: [
                {
                    text: 'ยกเลิก',
                    handler: function () {
                        // console.log('Disagree clicked');
                    }
                },
                {
                    text: 'ตกลง',
                    handler: function () {
                        // console.log('Agree clicked');
                        // this.goto_kaya_purchase_completed()
                        _this.set_kaya_profile();
                    }
                }
            ]
        });
        confirm.present();
    };
    BuyerKayaPurchaseListPage.prototype.goto_kaya_categories = function () {
        this.navCtrl.pop();
    };
    BuyerKayaPurchaseListPage.prototype.goto_kaya_purchase_completed = function () {
        this.presentToast();
        this.navCtrl.push("buyer-kaya-purchase-completed");
    };
    BuyerKayaPurchaseListPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'บันทึกรายการสำเร็จ',
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    BuyerKayaPurchaseListPage.prototype.set_kaya_profile = function () {
        var _this = this;
        console.log(this.user.id);
        var param = {
            items: this.items,
            seller_id: (typeof this.user != 'undefined' ? this.user.id : 0),
            buyer_id: 1,
            total_purchase_kaya: this.total_purchase_kaya,
            kaya_type_id: 1,
            acc_bank_id: this.user.account_bank_id || 0,
        };
        this.BuyKayaService.set_kaya_profile(param).subscribe(function (res) {
            _this.goto_kaya_purchase_completed();
        });
    };
    BuyerKayaPurchaseListPage.prototype.remove_item = function (id) {
        this.items.splice(id, 1);
        this.calculator_total(this.items);
        localStorage.setItem('purchase_kaya_list', JSON.stringify(this.items));
    };
    BuyerKayaPurchaseListPage.prototype.calculator_total = function (items) {
        var total = 0;
        items.forEach(function (value) {
            total = total + value.total;
        });
        this.total_purchase_kaya = total;
        localStorage.setItem('total_purchase_kaya', this.total_purchase_kaya);
    };
    BuyerKayaPurchaseListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buyer-kaya-purchase-list',template:/*ion-inline-start:"/Users/piraan/Desktop/refuze-app/trash/src/pages/buyer-kaya-purchase-list/buyer-kaya-purchase-list.html"*/'<ion-header>\n\n  <ion-navbar [hideBackButton]="false" color="nav_blue">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title style="text-align: center;">สรุปข้อมูลการรับซื้อขยะ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <ion-card>  \n        <ion-grid>\n        <ion-row>\n          <ion-col col-3>\n            <img src="./assets/imgs/user_logo.png"/>\n          </ion-col>\n    \n          <ion-col col-9>\n            \n                  <h2>{{ user.mobile }} \n                    \n                  </h2>\n                <h2>{{ user.name }} </h2>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n\n\n  <ion-list padding>\n    <ion-item-sliding *ngFor="let value of items; let i = index">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="./assets/item_images/kaya.png">\n        </ion-thumbnail>\n        <h2>{{ value.name }}&nbsp;&nbsp;[&nbsp;{{ value.kaya_type_name }}&nbsp;]</h2>\n        <p>{{ value.amount }}&nbsp;{{ value.short_name }}\n          &nbsp;X&nbsp;{{ value.est_price }}&nbsp;=&nbsp;\n          <strong>{{ value.total }}</strong>&nbsp;บาท</p>\n        \n        <button ion-button color="danger" (click)="remove_item(i)">\n          <ion-icon name="trash"></ion-icon>\n          ลบรายการ\n        </button>\n      </ion-item>\n\n      <!-- <ion-item-options side="right">\n        <button ion-button color="danger">\n          <ion-icon name="trash"></ion-icon>\n          ลบรายการ\n        </button>\n      </ion-item-options> -->\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6><strong>รวมเป็นเงิน =</strong></ion-col>\n          <ion-col col-6 style="text-align:right">\n              <strong>{{ total_purchase_kaya }}</strong>&nbsp;บาท\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button round large block (click)="goto_kaya_categories()">\n          รายการซื้อขยะ\n        </button>\n      </ion-col>\n\n      <ion-col col-6>\n        <button ion-button round color="shamrock" large block  (click)="set_kaya_invoice()">\n          บันทึกการซื้อขยะ\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/piraan/Desktop/refuze-app/trash/src/pages/buyer-kaya-purchase-list/buyer-kaya-purchase-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_buy_kaya_service_buy_kaya_service__["a" /* BuyKayaServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], BuyerKayaPurchaseListPage);
    return BuyerKayaPurchaseListPage;
}());

//# sourceMappingURL=buyer-kaya-purchase-list.js.map

/***/ })

});
//# sourceMappingURL=13.js.map