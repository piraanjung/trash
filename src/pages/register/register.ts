import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { App,Slides } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';
// import { Loading } from 'ionic-angular/components/loading/loading';
import { ActionSheetController } from 'ionic-angular'
import { AuthenProvider } from '../../providers/authen/authen';
import { API_URL } from "../../providers/api-url";
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  cat_name: string;
  showBtnMobilePasswordPage: boolean =false;
  checkmobile: boolean= false;
  currentIndex: number=0;
  @ViewChild(Slides) slides: Slides;
  user:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authen:AuthenProvider, 
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.slides.lockSwipes(true);

  }

  slideChanged(){
    this.currentIndex = this.slides.getActiveIndex();
    
    console.log('Current index is', this.currentIndex);
  }

  categoryChoosed(cat:string){
    this.user.user_cat_id = cat  
    this.categories(this.user.user_cat_id);
        console.log(this.cat_name)
    this.goToNextSlide(); 
  }

  goToNextSlide() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(this.currentIndex+1, 500);
    this.slides.lockSwipes(true);
  }

  goToPrvSlide(){
    if(this.currentIndex > 0){
      this.slides.lockSwipes(false);
      this.slides.slideTo(this.currentIndex-1, 500);
      this.slides.lockSwipes(true);
    }
  }

  checkDuplicateMobile(){
    if(this.user.phone.length ==10){
        this.authen.check_duplicate_mobile(this.user.phone)
          .subscribe(res => {
            if(res == '1'){
              this.presentAlert("ตรวจสอบ", "หมายเลขนี้ถูกใช้สมัครแล้ว")
              this.checkmobile =false
              this.showBtnMobilePasswordPage = false
            }else{
              this.checkmobile =true;
             
              console.log(this.user)
            }
        });
    }else{
      this.checkmobile =false
      this.showBtnMobilePasswordPage =false
    }
  }
  checkPassword(){
    if(this.checkmobile==false){
      this.presentAlert("", "คุณยังไม่ได้กรอกหมายเลขโทรศัพท์")
      this.user.password ="";
    }else{
      if(this.user.password.length >3){
        this.showBtnMobilePasswordPage = true
      }else{
        this.showBtnMobilePasswordPage = false
      }
    }
  }

  presentAlert(title, subtitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  categories(id){
    switch(id){
      case 1:
        this.cat_name = 'เทศบาล'
        break;
      case 2:
        this.cat_name = 'โรงเรียน'
        break;
      case 3:
        this.cat_name = 'หน่วยงาน/องค์กร'
        break;
      case 4:
        this.cat_name = 'โรงพยาบาล'
        break;
    }
  }

}
