webpackJsonp([9],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authen_authen__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_url__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Loading } from 'ionic-angular/components/loading/loading';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, authen, modalCtrl, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authen = authen;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.municipalities = [];
        this.municipality = [];
        this.offices = [];
        this.showBtnMobilePasswordPage = false;
        this.checkmobile = false;
        this.currentIndex = 0;
        this.user = [];
        this.confirm = false;
        this.navCtrl = navCtrl;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_4__providers_api_url__["a" /* API_URL */];
    }
    RegisterPage.prototype.submit = function (arg0) {
        throw new Error("Method not implemented.");
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
        this.slides.lockSwipes(false);
    };
    RegisterPage.prototype.slideChanged = function () {
        this.currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', this.currentIndex);
    };
    RegisterPage.prototype.categoryChoosed = function (cat) {
        this.user.user_cat_id = cat;
        this.categories(this.user.user_cat_id);
        console.log(this.cat_name);
        this.goToNextSlide();
    };
    RegisterPage.prototype.goToNextSlide = function () {
        this.slides.lockSwipes(false);
        this.slides.slideTo(this.currentIndex + 1, 500);
        this.slides.lockSwipes(true);
    };
    RegisterPage.prototype.goToPrvSlide = function () {
        if (this.currentIndex > 0) {
            this.slides.lockSwipes(false);
            this.slides.slideTo(this.currentIndex - 1, 500);
            this.slides.lockSwipes(true);
        }
    };
    RegisterPage.prototype.checkDuplicateMobile = function () {
        var _this = this;
        if (this.user.phone.length == 10) {
            this.authen.check_duplicate_mobile(this.user.phone)
                .subscribe(function (res) {
                if (res == '1') {
                    _this.presentAlert("ตรวจสอบ", "หมายเลขนี้ถูกใช้สมัครแล้ว");
                    _this.checkmobile = false;
                    _this.showBtnMobilePasswordPage = false;
                }
                else {
                    _this.checkmobile = true;
                    console.log(_this.user);
                }
            });
        }
        else {
            this.checkmobile = false;
            this.showBtnMobilePasswordPage = false;
        }
    };
    RegisterPage.prototype.checkPassword = function () {
        if (this.checkmobile == false) {
            this.presentAlert("", "คุณยังไม่ได้กรอกหมายเลขโทรศัพท์");
            this.user.password = "";
        }
        else {
            if (this.user.password.length > 3) {
                this.showBtnMobilePasswordPage = true;
                this.getProvinces();
            }
            else {
                this.showBtnMobilePasswordPage = false;
            }
        }
    };
    RegisterPage.prototype.getFilterDistricts = function () {
        var _this = this;
        var url = '/districts/' + this.user.province['id'];
        this.http.get(this.apiUrl + url).subscribe(function (res) {
            _this.districts = res;
        });
    };
    RegisterPage.prototype.getFilterLocalgevernment = function () {
        var _this = this;
        var url = '/municipalities/' + this.user.district['id'];
        console.log(this.apiUrl + url);
        this.http.get(this.apiUrl + url).subscribe(function (res) {
            _this.municipalities = res;
            console.log(_this.municipalities);
        });
    };
    RegisterPage.prototype.getProvinces = function () {
        var _this = this;
        var url = "/provinces";
        this.http.get(this.apiUrl + url).subscribe(function (res) {
            _this.provinces = res;
            console.log(_this.provinces);
        });
    };
    RegisterPage.prototype.getOffice = function () {
        var _this = this;
        console.log(this.user.municipality['id']);
        var url = '/office/' + this.user.municipality['id'];
        this.http.get(this.apiUrl + url).subscribe(function (res) {
            _this.offices = res;
            // if(this.office === ""){
            //   this.presentAlert('','เลือกยังไม่ครบ')
            // }
        });
        console.log(this.user.office);
    };
    RegisterPage.prototype.checkUserAddress = function () {
        if (this.user.province == "" || this.user.district == "" || this.user.municipality == ""
            || this.user.address == "" || (this.user.user_cat_id == "2" && this.user.school == "")) {
            this.presentAlert('', "กรุณากรอกข้อมูลให้ครบ..");
        }
        else {
            this.goToNextSlide();
        }
    };
    RegisterPage.prototype.presentAlert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    RegisterPage.prototype.categories = function (id) {
        switch (id) {
            case 1:
                this.cat_name = 'เทศบาล';
                break;
            case 2:
                this.cat_name = 'โรงเรียน';
                break;
            case 3:
                this.cat_name = 'หน่วยงาน/องค์กร';
                break;
            case 4:
                this.cat_name = 'โรงพยาบาล';
                break;
        }
    };
    RegisterPage.prototype.checkOffice = function () {
        console.log(this.user.office);
    };
    RegisterPage.prototype.openModal = function () {
        var myModal = this.modalCtrl.create("roles");
        myModal.present();
    };
    RegisterPage.prototype.confirmres = function (id) {
        id == 1 ? this.confirm = true : this.confirm = false;
        console.log(this.confirm);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], RegisterPage.prototype, "slides", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>ลงทะเบียน</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content scroll="false" padding>\n\n  <ion-slides (ionSlideDidChange)="slideChanged()">\n    <ion-slide>\n        <h2>เลือกหมวดหมู่</h2>\n\n        <ion-row>\n          <ion-col>\n            <button ion-button class="circle" (click)="categoryChoosed(1)">เทศบาล</button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n            <button ion-button class="circle" (click)="categoryChoosed(2)">สถานศึกษา</button>\n          </ion-col>\n          <ion-col col-6>\n            <button ion-button class="circle">โรงพยาบาล</button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n              <button ion-button class="circle">หน่วยงาน/องค์กร</button>\n            </ion-col>\n          </ion-row>\n    </ion-slide>\n\n\n    <ion-slide padding>\n        <h2 class="slide-title">ข้อมูลสำหรับล็อกอินเข้าระบบ</h2>\n      <ion-list>\n          <ion-item class="round-input">\n              <ion-input type="number" [(ngModel)]="user.phone" name="phone" required \n                placeholder="หมายเลขโทรศัพท์" (keyup)="checkDuplicateMobile()"></ion-input>\n            </ion-item>\n            <ion-item class="round-input">\n                <ion-input type="text" [(ngModel)]="user.password" name="password" required \n                  placeholder="password" (keyup)="checkPassword()"></ion-input>\n              </ion-item>\n      </ion-list>\n      <ion-row padding>\n          <ion-col col-6>\n            <button ion-button block round (click)="goToPrvSlide()">Back</button>\n          </ion-col>\n          <ion-col col-6>\n            <button ion-button block round (click)="goToNextSlide()"  *ngIf="showBtnMobilePasswordPage">Next</button>\n          </ion-col>\n        </ion-row>\n    </ion-slide>\n    <!-- ที่อยู่หมวดหมู่ -->\n    <ion-slide padding>\n        <h2 class="slide-title">{{cat_name}} ของท่านอยู่ในเขต</h2>\n        <ion-list>\n            <ion-item class="round-input">\n              <ion-label  class="label_addr">จังหวัด</ion-label>\n              <ion-select [(ngModel)]="user.province" (ionChange)="getFilterDistricts()">\n                <ion-option [value]="province" *ngFor="let province of provinces">\n                  {{ province.province_name}}\n                </ion-option>\n              </ion-select>\n            </ion-item>\n    \n            <ion-item class="round-input">\n              <ion-label  class="label_addr">อำเภอ</ion-label>\n              <ion-select [(ngModel)]="user.district" (ionChange)="getFilterLocalgevernment()">\n                <ion-option [value]="district" *ngFor="let district of districts">\n                  {{ district.district_name }}\n                </ion-option>\n              </ion-select>\n            </ion-item>\n            <ion-item class="round-input">\n              <ion-label  class="label_addr">เทศบาล</ion-label>\n              <ion-select [(ngModel)]="user.municipality" (ionChange)="getOffice()">\n                <ion-option [value]="municipality" *ngFor="let municipality of municipalities">\n                  {{ municipality.name }}\n                </ion-option>\n              </ion-select>\n            </ion-item>\n    \n            <ion-item class="round-input" *ngIf="user.user_cat_id !=1">\n              <ion-label  class="label_addr">{{cat_name}}ของท่าน</ion-label>\n              <ion-select [(ngModel)]="user.office"  (ionChange)="checkOffice()">\n                <ion-option [value]="office" *ngFor="let office of offices">\n                  {{ office.office_name }}\n                </ion-option>\n              </ion-select>\n            </ion-item>\n\n\n            <!-- <ion-item class="round-input">\n              <ion-label floating class="label_addr">ที่อยู่ของท่าน</ion-label>\n              <ion-input type="text" [(ngModel)]="user.address" placeholder="ตัวอย่าง: 12 หมู่ 1 ต.สะอาด" required></ion-input>\n            </ion-item> -->\n          </ion-list>\n          <ion-row padding>\n            <ion-col col-6>\n              <button ion-button round block (click)="goToPrvSlide()">Back</button>\n            </ion-col>\n            <ion-col col-6>\n              <button ion-button round block (click)="checkUserAddress()">Next</button>\n            </ion-col>\n          </ion-row>\n    </ion-slide>\n\n    <ion-slide padding>\n        <ion-list>\n            <ion-item class="round-input">\n              <ion-label  class="label_addr">จังหวัด</ion-label>\n              <ion-select [(ngModel)]="user.province" (ionChange)="getFilterDistricts()">\n                <ion-option [value]="province" *ngFor="let province of provinces">\n                  {{ province.province_name}}\n                </ion-option>\n              </ion-select>\n            </ion-item>\n    \n            <ion-item class="round-input">\n              <ion-label  class="label_addr">อำเภอ</ion-label>\n              <ion-select [(ngModel)]="user.district" (ionChange)="getFilterLocalgevernment()">\n                <ion-option [value]="district" *ngFor="let district of districts">\n                  {{ district.district_name }}\n                </ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n    </ion-slide>\n\n    <ion-slide padding>\n      \n      <img src="assets/imgs/trashlogo.png" class="slide-image"/>\n      <button ion-button block class="round-input" (click)="openModal()">อ่านข้อกำหนดและเงื่อนไข</button>\n     \n      <ion-list radio-group  [(ngModel)]="confirm" style="margin-top:20px">\n        <ion-item >\n            <ion-label>ไม่ยอมรับ</ion-label>\n            <ion-radio  value="false" (click)="confirmres(0)"></ion-radio>\n          </ion-item>\n        <ion-item>\n          <ion-label>ยอมรับ</ion-label>\n          <ion-radio  value="true" (click)="confirmres(1)"></ion-radio>\n        </ion-item>\n      </ion-list>\n    \n\n      <button ion-button block class="round-input"  color="secondary"  [disabled]="!confirm"> \n        บันทึกข้อมูล\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/pipatponghongzaeng/Desktop/trash/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authen_authen__["a" /* AuthenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=9.js.map