webpackJsonp([6],{

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellKayaEstimatepricePageModule", function() { return SellKayaEstimatepricePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sell_kaya_estimateprice__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SellKayaEstimatepricePageModule = (function () {
    function SellKayaEstimatepricePageModule() {
    }
    SellKayaEstimatepricePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sell_kaya_estimateprice__["a" /* SellKayaEstimatepricePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sell_kaya_estimateprice__["a" /* SellKayaEstimatepricePage */]),
            ],
        })
    ], SellKayaEstimatepricePageModule);
    return SellKayaEstimatepricePageModule;
}());

//# sourceMappingURL=sell-kaya-estimateprice.module.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellKayaEstimatepricePage; });
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
 * Generated class for the SellKayaEstimatepricePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SellKayaEstimatepricePage = (function () {
    function SellKayaEstimatepricePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.waste = "recycle-waste";
        this.initializeItems();
        this.initializeRecycleWastes();
        this.initializeOrganicWastes();
        this.initializeHazardWastes();
    }
    SellKayaEstimatepricePage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad BuyKayaMatchingPage');
        // this.get_peoples();
    };
    SellKayaEstimatepricePage.prototype.initializeItems = function () {
    };
    SellKayaEstimatepricePage.prototype.itemSelected = function (item) {
        console.log(item);
        this.navCtrl.push('buy-kaya-process', {
            user_id: item,
        });
    };
    SellKayaEstimatepricePage.prototype.getItemsRecycleWastes = function (ev) {
        // Reset items back to all of the items
        this.initializeRecycleWastes();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.recyclewastes = this.recyclewastes.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SellKayaEstimatepricePage.prototype.initializeRecycleWastes = function () {
        this.recyclewastes = [{
                id: 'rw-001',
                name: 'ขวด PET',
                estimate_price: 7,
                unit: 'กก.',
                img: './assets/imgs/thumbnail-puppy-1.jpg'
            },
            {
                id: 'rw-002',
                name: 'กระดาษปกแข็ง',
                estimate_price: 5,
                unit: 'กก.',
                img: './assets/imgs/thumbnail-puppy-1.jpg'
            },
            {
                id: 'rw-003',
                name: 'กระดาษปกอ่อน',
                estimate_price: 3,
                unit: 'กก.',
                img: './assets/imgs/thumbnail-puppy-1.jpg'
            }
        ];
    };
    SellKayaEstimatepricePage.prototype.getItemsOrginics = function (ev) {
        // Reset items back to all of the items
        this.initializeOrganicWastes();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.organicwastes = this.organicwastes.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SellKayaEstimatepricePage.prototype.initializeOrganicWastes = function () {
        this.organicwastes = [{
                id: 'org-001',
                name: 'เศษอาหาร',
                estimate_price: 300,
                unit: 'กก.',
                img: './assets/imgs/logo.png'
            },
            {
                id: 'org-002',
                name: 'ใบไม้แห้ง',
                estimate_price: 100,
                unit: 'กก.',
                img: './assets/imgs/logo.png'
            },
            {
                id: 'org-003',
                name: 'มูลสัตว์',
                estimate_price: 200,
                unit: 'กก.',
                img: './assets/imgs/logo.png'
            }
        ];
    };
    SellKayaEstimatepricePage.prototype.getItemsHazards = function (ev) {
        // Reset items back to all of the items
        this.initializeHazardWastes();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.hazardwaste = this.hazardwaste.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SellKayaEstimatepricePage.prototype.initializeHazardWastes = function () {
        this.hazardwaste = [{
                id: 'hz-001',
                name: 'หลอดฟลูออเรสเซนต์',
                estimate_price: 150,
                unit: 'หลอด',
                img: './assets/imgs/card-saopaolo.png'
            },
            {
                id: 'hz-002',
                name: 'ถ่านไฟฉาย AAA',
                estimate_price: 20,
                unit: 'ก้อน',
                img: './assets/imgs/card-saopaolo.png'
            },
            {
                id: 'hz-003',
                name: 'โทรศัพท์มือถือ',
                estimate_price: '3,000',
                unit: 'ชิ้น',
                img: './assets/imgs/card-saopaolo.png'
            }
        ];
    };
    SellKayaEstimatepricePage.prototype.cal = function (ev) {
        var val = ev.target.value;
        console.log(val);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            // this.recyclewastes = this.recyclewastes.filter((item) => {
            //   return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            // })
        }
    };
    SellKayaEstimatepricePage.prototype.estprice_detail = function (_cat) {
        this.navCtrl.push('sell-kaya-estimateprice-detail', {
            _cat: _cat
        });
    };
    SellKayaEstimatepricePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sell-kaya-estimateprice',template:/*ion-inline-start:"/Users/piraan/Desktop/refuze-app/trash/src/pages/sell-kaya-estimateprice/sell-kaya-estimateprice.html"*/'<!--\n  Generated template for the SellKayaEstimatepricePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>ราคากลางขยะ</ion-title>\n  </ion-navbar>\n\n  \n</ion-header>\n\n\n    <ion-content padding>\n      <ion-row style="margin-top:8%">\n        <ion-col>\n          <ion-img src="./assets/imgs/estprice_recycle_btn.png"  \n          style="margin-left:25%" width="170" height="140"\n          (click)="estprice_detail(1)"></ion-img>\n          <ion-row>\n            <ion-col col-6>\n                <ion-img src="./assets/imgs/estpricetopic.png" width="150" height="120"></ion-img>\n            </ion-col>\n            <ion-col col-6>\n                <ion-img src="./assets/imgs/estprice_org_btn.png" \n                width="170" height="140" (click)="estprice_detail(2)"></ion-img>\n            </ion-col>\n          </ion-row>\n          <ion-img src="./assets/imgs/estprice_hz_btn.png" style="margin-left:25%"\n            width="170" height="140" (click)="estprice_detail(3)"></ion-img>\n        </ion-col>  \n      </ion-row>\n\n        \n        </ion-content>\n\n\n'/*ion-inline-end:"/Users/piraan/Desktop/refuze-app/trash/src/pages/sell-kaya-estimateprice/sell-kaya-estimateprice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SellKayaEstimatepricePage);
    return SellKayaEstimatepricePage;
}());

//# sourceMappingURL=sell-kaya-estimateprice.js.map

/***/ })

});
//# sourceMappingURL=6.js.map