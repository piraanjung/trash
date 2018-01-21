webpackJsonp([25],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seller_side_menu_seller_side_menu__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_buyer_side_menu_buyer_side_menu__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainPage = (function () {
    function MainPage(navCtrl, navParams, buyerSideMenu, sellerSideMenu, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.buyerSideMenu = buyerSideMenu;
        this.sellerSideMenu = sellerSideMenu;
        this.menuCtrl = menuCtrl;
        this.buyerMenu = this.buyerSideMenu.sideMenu();
        this.sellerMenu = this.sellerSideMenu.sideMenu();
    }
    MainPage.prototype.ionViewDidLoad = function () {
        var my_user_type_id = localStorage.getItem("my_user_type_id");
        console.log(my_user_type_id);
        if (my_user_type_id == '2') {
            this.rootPage = "buy-kaya";
            this.menuCtrl.enable(true, 'buyerMenu');
            this.menuCtrl.enable(false, 'sellerMenu');
        }
        else if (my_user_type_id == '3') {
            this.rootPage = "sell-kaya";
            this.menuCtrl.enable(false, 'buyerMenu');
            this.menuCtrl.enable(true, 'sellerMenu');
        }
    };
    MainPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MainPage.prototype, "nav", void 0);
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/main/main.html"*/'<ion-menu id="buyerMenu" [content]="content" persistent="true">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of buyerMenu" (click)="openPage(p)">\n        <span style="color:black">{{p.title}}</span>\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-menu id="sellerMenu" [content]="content" persistent="true">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of sellerMenu" (click)="openPage(p)">\n        <span style="color:black">{{p.title}}</span>\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/main/main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_buyer_side_menu_buyer_side_menu__["a" /* BuyerSideMenuProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_seller_side_menu_seller_side_menu__["a" /* SellerSideMenuProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellerSideMenuProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SellerSideMenuProvider = (function () {
    function SellerSideMenuProvider() {
    }
    SellerSideMenuProvider.prototype.sideMenu = function () {
        return [
            // { title: 'นัดหมายลูกค้า', component: "buy-kaya-appointment" },
            { title: 'ขายขยะ', component: "sell-kaya" },
            { title: 'ธนาคารขยะ', component: "i-banking" },
            // { title: 'ซื้อสินค้าท้องถิ่น', component: "localproducts" },
            // { title: 'ราคากลางขยะ', component: "sell-kaya-estimateprice" },
            // { title: 'ค้นหาผู้รับซื้อขยะ', component: "sell-kaya-buyersearch" },
            // { title: 'ประวัติการขายขยะ', component: "sell-kaya-history" },
            // { title: 'วิธีคัดแยกขยะเพิ่มมูลค่า', component: "sell-kaya-upvalue" },
            { title: 'ออกจากระบบ', component: "login" },
        ];
    };
    SellerSideMenuProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SellerSideMenuProvider);
    return SellerSideMenuProvider;
}());

//# sourceMappingURL=seller-side-menu.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyerSideMenuProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BuyerSideMenuProvider = (function () {
    function BuyerSideMenuProvider() {
    }
    BuyerSideMenuProvider.prototype.sideMenu = function () {
        return [
            { title: 'รับซื้อขยะ', component: "buy-kaya" },
            // { title: 'นัดหมายลูกค้า', component: "buy-kaya-appointment" },
            { title: 'ออกจากระบบ', component: "login" },
        ];
    };
    BuyerSideMenuProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BuyerSideMenuProvider);
    return BuyerSideMenuProvider;
}());

//# sourceMappingURL=buyer-side-menu.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/buy-kaya-matching/buy-kaya-matching.module": [
		297,
		21
	],
	"../pages/buy-kaya-process/buy-kaya-process.module": [
		296,
		20
	],
	"../pages/buy-kaya-summary/buy-kaya-summary.module": [
		298,
		19
	],
	"../pages/buy-kaya/buy-kaya.module": [
		300,
		18
	],
	"../pages/buy-localproducts-confirm/buy-localproducts-confirm.module": [
		299,
		17
	],
	"../pages/buy-localproducts-info/buy-localproducts-info.module": [
		301,
		16
	],
	"../pages/buy-localproducts-result/buy-localproducts-result.module": [
		302,
		15
	],
	"../pages/buy-localproducts/buy-localproducts.module": [
		303,
		14
	],
	"../pages/buyer-kaya-categories/buyer-kaya-categories.module": [
		304,
		13
	],
	"../pages/buyer-kaya-form-calculator/buyer-kaya-form-calculator.module": [
		306,
		12
	],
	"../pages/buyer-kaya-purchase-completed/buyer-kaya-purchase-completed.module": [
		305,
		11
	],
	"../pages/buyer-kaya-purchase-list/buyer-kaya-purchase-list.module": [
		307,
		10
	],
	"../pages/i-banking-bookbank/i-banking-bookbank.module": [
		308,
		2
	],
	"../pages/i-banking/i-banking.module": [
		309,
		9
	],
	"../pages/login/login.module": [
		163
	],
	"../pages/main/main.module": [
		310,
		24
	],
	"../pages/purchase-product-slide/purchase-product-slide.module": [
		295,
		1
	],
	"../pages/purchcase-product/purchase-product.module": [
		294,
		8
	],
	"../pages/register/register.module": [
		312,
		23
	],
	"../pages/roles/roles.module": [
		311,
		22
	],
	"../pages/sell-kaya-estimateprice-detail/sell-kaya-estimateprice-detail.module": [
		313,
		7
	],
	"../pages/sell-kaya-estimateprice/sell-kaya-estimateprice.module": [
		315,
		6
	],
	"../pages/sell-kaya-process/sell-kaya-process.module": [
		314,
		5
	],
	"../pages/sell-kaya/sell-kaya.module": [
		317,
		0
	],
	"../pages/sell-local-product-create-product/sell-local-product-create-product.module": [
		316,
		3
	],
	"../pages/sell-local-product-dashboard/sell-local-product-dashboard.module": [
		318,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authen_authen__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_authen_authen__["a" /* AuthenProvider */]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authen_authen__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_url__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { HttpClient } from '@angular/common/http';



var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, authen, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.authen = authen;
        this.storage = storage;
        this.params = {};
        this.currUser = {};
        this.apiUrl = "";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.storage.remove("currentUser");
        this.clearKeys();
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_4__providers_api_url__["a" /* API_URL */];
        this.storage.get('user_bank').then(function (res) {
            console.log(res);
        });
    };
    LoginPage.prototype.onLogin = function () {
        var _this = this;
        this.authen.getAuthen(this.params)
            .subscribe(function (res) {
            console.log(res);
            if (res['status'] == 0) {
                _this.presentAlert('', 'ไม่พบข้อมูลผู้ใช้ กรุณาลองใหม่');
            }
            else {
                var results = res['result'][0];
                _this.storage.set('currentUser', results);
                localStorage.setItem('my_user_type_id', results.user_type_id);
                _this.navCtrl.setRoot("main-page");
            }
        }, function (err) { return console.log(err); });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push("register");
    };
    LoginPage.prototype.empty_phone_form = function () {
        this.params['phone'] = "";
        this.params['pin'] = "";
    };
    LoginPage.prototype.clearKeys = function () {
        this.storage.clear().then(function () {
            console.log('Keys have been cleared');
        });
    };
    LoginPage.prototype.presentAlert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    LoginPage.prototype.printer = function () {
        this.navCtrl.push('printer');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]) === "function" && _a || Object)
    ], LoginPage.prototype, "nav", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/login/login.html"*/'<ion-content padding>\n  <ion-grid id="logo">\n    <ion-row>\n      <ion-col col-3></ion-col>\n      <ion-col col-6 style="text-align:center">\n         <ion-img src="./assets/imgs/trashlogo.png" style="width: 150px; height:180px"></ion-img>\n      </ion-col>\n      <ion-col col-3></ion-col>\n    </ion-row>\n  </ion-grid>\n\n \n  <form (ngSubmit)="onLogin()">\n      <ion-list>\n        \n        <ion-item class="round-input">\n          <ion-input type="number" [(ngModel)]="params.phone" name="phone" required placeholder="หมายเลขโทรศัพท์"></ion-input>\n        </ion-item>\n      \n        <ion-item class="round-input">\n          <ion-input type="password" [(ngModel)]="params.pin" name="pin" required placeholder="รหัสผ่าน"></ion-input>\n        </ion-item>\n      </ion-list>\n\n    \n    <button ion-button block large round color="shamrock" type="submit">เข้าสู่ระบบ</button>\n   \n  </form>\n  <button ion-button block large round clear color="shamrock" (click)="register()">สมัครสมาชิก</button>\n</ion-content>\n'/*ion-inline-end:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_authen_authen__["a" /* AuthenProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_authen_authen__["a" /* AuthenProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _f || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyersServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_url__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuyersServiceProvider = (function () {
    function BuyersServiceProvider(http) {
        this.http = http;
    }
    BuyersServiceProvider.prototype.get_buyers = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__api_url__["a" /* API_URL */] + '/users');
    };
    BuyersServiceProvider.prototype.get_buyer_profile = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__api_url__["a" /* API_URL */] + '/users/' + id);
    };
    BuyersServiceProvider.prototype.get_buyer_profile_by_category = function (id, category) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__api_url__["a" /* API_URL */] + '/users_cat/' + id + '/' + category);
    };
    BuyersServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BuyersServiceProvider);
    return BuyersServiceProvider;
}());

//# sourceMappingURL=buyers-service.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellKayaServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_url__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SellKayaServiceProvider = (function () {
    function SellKayaServiceProvider(http) {
        this.http = http;
    }
    SellKayaServiceProvider.prototype.get_bank_info = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__api_url__["a" /* API_URL */] + '/users/get_user_bank/' + id);
    };
    SellKayaServiceProvider.prototype.get_point_info = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__api_url__["a" /* API_URL */] + '/users/get_user_point/' + id);
    };
    SellKayaServiceProvider.prototype.get_sellkaya_history = function (id, month) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__api_url__["a" /* API_URL */] + '/sell_kaya/history/' + id + '/' + month);
    };
    SellKayaServiceProvider.prototype.get_sellkaya_datelists = function (id, month) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__api_url__["a" /* API_URL */] + '/sell_kaya/sell_date_history/' + id + '/' + month);
    };
    SellKayaServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SellKayaServiceProvider);
    return SellKayaServiceProvider;
}());

//# sourceMappingURL=sell-kaya-service.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KayaListServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_url__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KayaListServiceProvider = (function () {
    function KayaListServiceProvider(http) {
        this.http = http;
    }
    KayaListServiceProvider.prototype.get_kaya_list = function (param) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__api_url__["a" /* API_URL */] + '/kaya_list', param);
    };
    KayaListServiceProvider.prototype.get_kaya_list_by_category = function (param) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__api_url__["a" /* API_URL */] + '/kaya_list_by_category', param);
    };
    KayaListServiceProvider.prototype.get_kaya_profile = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__api_url__["a" /* API_URL */] + '/kaya_list/' + id);
    };
    KayaListServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], KayaListServiceProvider);
    return KayaListServiceProvider;
}());

//# sourceMappingURL=kaya-list-service.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyKayaServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_url__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuyKayaServiceProvider = (function () {
    function BuyKayaServiceProvider(http) {
        this.http = http;
    }
    BuyKayaServiceProvider.prototype.set_kaya_profile = function (param) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__api_url__["a" /* API_URL */] + '/buykaya/create', param);
    };
    BuyKayaServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BuyKayaServiceProvider);
    return BuyKayaServiceProvider;
}());

//# sourceMappingURL=buy-kaya-service.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_buyers_service_buyers_service__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_kaya_list_service_kaya_list_service__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_buy_kaya_service_buy_kaya_service__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_sell_kaya_service_sell_kaya_service__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_authen_authen__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_buyer_side_menu_buyer_side_menu__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_seller_side_menu_seller_side_menu__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_barcode_scanner__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_main_main__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// import { Printer, PrintOptions } from '@ionic-native/printer';
// import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
// import { PrintProvider } from '../providers/print/print';
// import {PrinterListModalPage} from '../pages/print-list-modal/print-list-modal';
// import { RegisterPage } from '../pages/register/register';
// import { RolesPage } from '../pages/roles/roles';
// import { MainPage } from '../pages/main/main';
// import { BuyKayaPage } from '../pages/buy-kaya/buy-kaya';
// import { BuyKayaMatchingPage } from '../pages/buy-kaya-matching/buy-kaya-matching'
// import { BuyerKayaPurchaseListPage } from '../pages/buyer-kaya-purchase-list/buyer-kaya-purchase-list'
// import { BuyerKayaFormCalculatorPage } from '../pages/buyer-kaya-form-calculator/buyer-kaya-form-calculator' 
// import { BuyerKayaPurchaseCompletedPage } from '../pages/buyer-kaya-purchase-completed/buyer-kaya-purchase-completed'
// import { SellKayaPageModule } from '../pages/sell-kaya/sell-kaya.module';
// import { BuyLocalproductsPage } from '../pages/buy-localproducts/buy-localproducts';
// import { BuyLocalproductsPageModule } from '../pages/buy-localproducts/buy-localproducts.module';
// import { SellKayaProcessPage } from '../pages/sell-kaya-process/sell-kaya-process'
// import { SellKayaProcessPageModule } from '../pages/sell-kaya-process/sell-kaya-process.module';
// import { IBankingPageModule } from '../pages/i-banking/i-banking.module';
// import { IBankingBookbankPageModule } from '../pages/i-banking-bookbank/i-banking-bookbank.module';
// import { SellKayaEstimatepriceDetailPageModule } from '../pages/sell-kaya-estimateprice-detail/sell-kaya-estimateprice-detail.module';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_main_main__["a" /* MainPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/buy-kaya-process/buy-kaya-process.module#BuyKayaProcessPageModule', name: 'buy-kaya-process', segment: 'buy-kaya-process', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buy-kaya-matching/buy-kaya-matching.module#BuyKayaMatchingPageModule', name: 'buy-kaya-matching', segment: 'buy-kaya-matching', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buy-kaya-summary/buy-kaya-summary.module#BuyKayaSummaryPageModule', name: 'buy-kaya-summary', segment: 'buy-kaya-summary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buy-localproducts-confirm/buy-localproducts-confirm.module#BuyLocalproductsConfirmPageModule', name: 'buy-localproducts-confirm', segment: 'buy-localproducts-confirm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buy-kaya/buy-kaya.module#BuyKayaPageModule', name: 'buy-kaya', segment: 'buy-kaya', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buy-localproducts-info/buy-localproducts-info.module#BuyLocalproductsInfoPageModule', name: 'buy-localproducts-info', segment: 'buy-localproducts-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buy-localproducts-result/buy-localproducts-result.module#BuyLocalproductsResultPageModule', name: 'buy-localproducts-result', segment: 'buy-localproducts-result', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buy-localproducts/buy-localproducts.module#BuyLocalproductsPageModule', name: 'buy-localproducts', segment: 'buy-localproducts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer-kaya-categories/buyer-kaya-categories.module#BuyerKayaCategoriesPageModule', name: 'buyer-kaya-categories', segment: 'buyer-kaya-categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer-kaya-purchase-completed/buyer-kaya-purchase-completed.module#BuyerKayaPurchaseCompletedPageModule', name: 'buyer-kaya-purchase-completed', segment: 'buyer-kaya-purchase-completed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer-kaya-form-calculator/buyer-kaya-form-calculator.module#BuyerKayaFormCalculatorPageModule', name: 'buyer-kaya-form-calculator', segment: 'buyer-kaya-form-calculator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer-kaya-purchase-list/buyer-kaya-purchase-list.module#BuyerKayaPurchaseListPageModule', name: 'buyer-kaya-purchase-list', segment: 'buyer-kaya-purchase-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/i-banking-bookbank/i-banking-bookbank.module#IBankingBookbankPageModule', name: 'IBankingBookbankPage', segment: 'i-banking-bookbank', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/i-banking/i-banking.module#IBankingPageModule', name: 'i-banking', segment: 'i-banking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'login', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'main-page', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/purchcase-product/purchase-product.module#PurchaseProductPageModule', name: 'purchase-product', segment: 'purchase-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/purchase-product-slide/purchase-product-slide.module#PurchaseProductSlidePageModule', name: 'purchase-product-slide', segment: 'purchase-product-slide', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/roles/roles.module#RolesPageModule', name: 'roles', segment: 'roles', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'register', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sell-kaya-estimateprice-detail/sell-kaya-estimateprice-detail.module#SellKayaEstimatepriceDetailPageModule', name: 'sell-kaya-estimateprice-detail', segment: 'sell-kaya-estimateprice-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sell-kaya-process/sell-kaya-process.module#SellKayaProcessPageModule', name: 'sell-kaya-process', segment: 'sell-kaya-process', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sell-kaya-estimateprice/sell-kaya-estimateprice.module#SellKayaEstimatepricePageModule', name: 'sell-kaya-estimateprice', segment: 'sell-kaya-estimateprice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sell-local-product-create-product/sell-local-product-create-product.module#SellLocalProductCreateProductPageModule', name: 'sell-local-product-create-product', segment: 'sell-local-product-create-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sell-kaya/sell-kaya.module#SellKayaPageModule', name: 'sell-kaya', segment: 'sell-kaya', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sell-local-product-dashboard/sell-local-product-dashboard.module#SellLocalProductDashboardPageModule', name: 'sell-local-product-dashboard', segment: 'sell-local-product-dashboard', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login_module__["LoginPageModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                // RegisterPage,
                // RolesPage,
                __WEBPACK_IMPORTED_MODULE_17__pages_main_main__["a" /* MainPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_buyer_side_menu_buyer_side_menu__["a" /* BuyerSideMenuProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_seller_side_menu_seller_side_menu__["a" /* SellerSideMenuProvider */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_7__providers_buyers_service_buyers_service__["a" /* BuyersServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_kaya_list_service_kaya_list_service__["a" /* KayaListServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_buy_kaya_service_buy_kaya_service__["a" /* BuyKayaServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_sell_kaya_service_sell_kaya_service__["a" /* SellKayaServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_authen_authen__["a" /* AuthenProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/pipatponghongzaeng/Desktop/trash/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/pipatponghongzaeng/Desktop/trash/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
// export const API_URL = '/api/v1';
var API_URL = 'http://babylinlinsworld.com/refuze/api/v1';
//# sourceMappingURL=api-url.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_url__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenProvider = (function () {
    function AuthenProvider(http) {
        this.http = http;
    }
    AuthenProvider.prototype.getAuthen = function (param) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__api_url__["a" /* API_URL */] + "/user/login", param);
    };
    AuthenProvider.prototype.check_duplicate_mobile = function (mobile) {
        mobile == "" ? 0 : mobile;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__api_url__["a" /* API_URL */] + "/user/checkmobile/" + mobile);
    };
    AuthenProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthenProvider);
    return AuthenProvider;
}());

//# sourceMappingURL=authen.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map