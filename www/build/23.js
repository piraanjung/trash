webpackJsonp([23],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyKayaProcessPageModule", function() { return BuyKayaProcessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buy_kaya_process__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuyKayaProcessPageModule = (function () {
    function BuyKayaProcessPageModule() {
    }
    BuyKayaProcessPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buy_kaya_process__["a" /* BuyKayaProcessPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buy_kaya_process__["a" /* BuyKayaProcessPage */]),
            ],
        })
    ], BuyKayaProcessPageModule);
    return BuyKayaProcessPageModule;
}());

//# sourceMappingURL=buy-kaya-process.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyKayaProcessPage; });
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


// import { Http } from '@angular/http';
// import { BuyKayaSummaryPage } from '../buy-kaya-summary/buy-kaya-summary';
/**
 * Generated class for the BuyKayaProcessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuyKayaProcessPage = (function () {
    function BuyKayaProcessPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pet = "recycles";
        this.searchQuery = '';
        this.waste = "recycle-waste";
        this.recycle = [];
        this.initializeRecycleWastes();
        this.initializeOrganicWastes();
        this.initializeHazardWastes();
        this.user = navParams.get('user');
        console.log(this.user['id']);
    }
    /// buy-kaya-process
    BuyKayaProcessPage.prototype.getItemsRecycleWastes = function (ev) {
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
    BuyKayaProcessPage.prototype.initializeRecycleWastes = function () {
        this.recyclewastes = [
            {
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
    BuyKayaProcessPage.prototype.getItemsOrginics = function (ev) {
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
    BuyKayaProcessPage.prototype.initializeOrganicWastes = function () {
        this.organicwastes = [
            {
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
    BuyKayaProcessPage.prototype.getItemsHazards = function (ev) {
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
    BuyKayaProcessPage.prototype.initializeHazardWastes = function () {
        this.hazardwaste = [
            {
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
    BuyKayaProcessPage.prototype.cal = function (ev) {
        var val = ev.target.value;
        console.log(val);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            // this.recyclewastes = this.recyclewastes.filter((item) => {
            //   return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            // })
        }
    };
    BuyKayaProcessPage.prototype.logForm = function () {
        console.log(this.recycle);
    };
    BuyKayaProcessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuyKayaProcessPage');
    };
    BuyKayaProcessPage.prototype.kayaSummary = function () {
        this.navCtrl.push("buy-kaya-summary");
    };
    BuyKayaProcessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buy-kaya-process',template:/*ion-inline-start:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/buy-kaya-process/buy-kaya-process.html"*/'<!--\n  Generated template for the BuyKayaProcessPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar no-border-bottom>\n    <ion-title>\n      รายการรับซื้อขยะ\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="box box-widget widget-user-2">\n    <div class="widget-user-header bg-yellow">\n      <span style="margin-left:70%;font-weight:bold; text-decoration: underline;">ผู้ขายขยะ</span>\n\n      <div class="widget-user-image">\n        <img class="img-circle" src="./assets/img/DrDokvTeGUKcKS5e1gIh_user.png">\n      </div>\n      <h3 class="widget-user-username">{{user.id}}</h3>\n      <h5 class="widget-user-desc">{{user.name}}</h5>\n    </div>\n  </div>\n\n\n\n  <!-- Segment in a header -->\n  <div style="margin-top:10px">\n    <ion-segment [(ngModel)]="waste">\n      <ion-segment-button value="recycle-waste">\n        ขยะรีไซเคิล\n      </ion-segment-button>\n      <ion-segment-button value="organic-waste">\n        ขยะมูลฝอย\n      </ion-segment-button>\n      <ion-segment-button value="hazard-waste">\n        ขยะมีพิษ\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n\n  <div [ngSwitch]="waste" style="margin-top:10px">\n    <form (ngSubmit)="logForm()">\n      <ion-list *ngSwitchCase="\'recycle-waste\'">\n        <ion-searchbar (ionInput)="getItemsRecycleWastes($event)"></ion-searchbar>\n        <ion-list>\n\n          <ion-card *ngFor="let rw of recyclewastes; let i = index">\n            <ion-item>\n              <h2>{{rw.name}}</h2>\n              <!-- <ion-input type="hidden" value="{{rw.id}}" name="rw_id"></ion-input> -->\n            </ion-item>\n\n            <ion-row>\n              <ion-col col-6>\n                <img src="{{rw.img}}" />\n              </ion-col>\n              <ion-col col-6>\n                <ion-list>\n                  <ion-item>\n                    <ion-label floating color="primary">ราคากลาง(บาท)</ion-label>\n                    <ion-input type="text" readonly="true" name="rw_estimate_price" value="{{rw.estimate_price}}">\n                    </ion-input>\n                  </ion-item>\n                </ion-list>\n                <ion-list>\n                  <ion-item>\n                    <ion-label floating color="primary">จำนวน : {{rw.unit}}</ion-label>\n                    <ion-input type="text" name="ww{{i}}" [(ngModel)]="recycle.weight"></ion-input>\n                  </ion-item>\n                </ion-list>\n                <ion-list>\n                  <ion-item>\n                    <ion-label floating color="primary">เป็นเงิน(บาท)</ion-label>\n                    <ion-input type="text" readonly="true" name="sum" value=""></ion-input>\n                  </ion-item>\n                </ion-list>\n              </ion-col>\n            </ion-row>\n\n          </ion-card>\n        </ion-list>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'organic-waste\'">\n        <ion-searchbar (ionInput)="getItemsOrginics($event)"></ion-searchbar>\n        <ion-list>\n\n          <ion-card *ngFor="let org of organicwastes">\n            <ion-item>\n              <h2>{{org.name}}</h2>\n            </ion-item>\n\n            <ion-row>\n              <ion-col col-6>\n                <img src="{{org.img}}" />\n              </ion-col>\n              <ion-col col-6>\n                <ion-list>\n                  <ion-item>\n                    <ion-label floating color="primary">คะแนน</ion-label>\n                    <ion-input type="text" readonly="true" name="estimate-price" value="{{org.estimate_price}}"></ion-input>\n                  </ion-item>\n                </ion-list>\n                <ion-list>\n                  <ion-item>\n                    <ion-label floating color="primary">จำนวน : {{org.unit}}</ion-label>\n                    <ion-input type="text"></ion-input>\n                  </ion-item>\n                </ion-list>\n                <ion-list>\n                  <ion-item>\n                    <ion-label floating color="primary">รวมแต้ม(คะแนน)</ion-label>\n                    <ion-input type="text" readonly="true" name="sum" value="{{2*3}}"></ion-input>\n                  </ion-item>\n                </ion-list>\n              </ion-col>\n            </ion-row>\n\n          </ion-card>\n        </ion-list>\n      </ion-list>\n\n\n      <ion-list *ngSwitchCase="\'hazard-waste\'">\n        <ion-searchbar (ionInput)="getItemsHazards($event)"></ion-searchbar>\n        <ion-list>\n\n          <ion-card *ngFor="let hz of hazardwaste">\n            <ion-item>\n              <h2>{{hz.name}}</h2>\n            </ion-item>\n\n            <ion-row>\n              <ion-col col-6>\n                <img src="{{hz.img}}" />\n              </ion-col>\n              <ion-col col-6>\n                <ion-list>\n                  <ion-item>\n                    <ion-label floating color="primary">คะแนน</ion-label>\n                    <ion-input type="text" readonly="true" name="estimate-price" value="{{hz.estimate_price}}"></ion-input>\n                  </ion-item>\n                </ion-list>\n                <ion-list>\n                  <ion-item>\n                    <ion-label floating color="primary">จำนวน : {{hz.unit}}</ion-label>\n                    <ion-input type="text"></ion-input>\n                  </ion-item>\n                </ion-list>\n                <ion-list>\n                  <ion-item>\n                    <ion-label floating color="primary">รวมแต้ม(คะแนน)</ion-label>\n                    <ion-input type="text" readonly="true" name="sum" value="{{2*150}}"></ion-input>\n                  </ion-item>\n                </ion-list>\n              </ion-col>\n            </ion-row>\n\n          </ion-card>\n        </ion-list>\n      </ion-list>\n\n    </form>\n  </div>\n</ion-content>\n<ion-footer>\n  <button ion-button  block (click)="kayaSummary()">บันทึก</button>\n  <!-- <button ion-button type="submit" block>บันทึก</button> -->\n</ion-footer>\n\n'/*ion-inline-end:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/buy-kaya-process/buy-kaya-process.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], BuyKayaProcessPage);
    return BuyKayaProcessPage;
}());

//# sourceMappingURL=buy-kaya-process.js.map

/***/ })

});
//# sourceMappingURL=23.js.map