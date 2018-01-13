import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Slides, ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
// import { Loading } from 'ionic-angular/components/loading/loading';
import { AuthenProvider } from '../../providers/authen/authen';
import { API_URL } from "../../providers/api-url";
import { RolesPage } from '../../pages/roles/roles';
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
  submit(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  provinces:any;
  province:any;
  districts:any;
  district:any;
  municipalities:any = [];
  municipality:any = [];
  offices:any=[];
  apiUrl: string;
  cat_name: string;
  showBtnMobilePasswordPage: boolean =false;
  checkmobile: boolean= false;
  currentIndex: number=0;
  @ViewChild(Slides) slides: Slides;
  user:any=[];
  confirm:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authen:AuthenProvider, public modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private http: HttpClient) {
      this.navCtrl = navCtrl;
      this.apiUrl =API_URL;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.slides.lockSwipes(false);

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
        this.getProvinces();
      }else{
        this.showBtnMobilePasswordPage = false
      }
    }
  }

  getFilterDistricts(){
    let url = '/districts/'+this.user.province['id'];
    this.http.get(this.apiUrl+url).subscribe((res)=>{
      this.districts =  res;
    });
  }

  getFilterLocalgevernment(){

    let url = '/municipalities/'+this.user.district['id'];
    console.log(this.apiUrl+url)
    this.http.get(this.apiUrl+url).subscribe((res)=>{
      this.municipalities =  res;
      console.log(this.municipalities);
    });
  }

  getProvinces(){
    let url = "/provinces";
    this.http.get(this.apiUrl+url).subscribe(
      (res) => {
        this.provinces =res;
        console.log(this.provinces);
      
      }
    );
  }

  getOffice(){
    console.log(this.user.municipality['id']);
    let url = '/office/'+this.user.municipality['id'];
    this.http.get(this.apiUrl+url).subscribe(res=>{
      this.offices = res;
      // if(this.office === ""){
      //   this.presentAlert('','เลือกยังไม่ครบ')
      // }
    });
    console.log(this.user.office)
  }

  checkUserAddress(){
    if(this.user.province =="" || this.user.district =="" || this.user.municipality =="" 
      || this.user.address=="" || (this.user.user_cat_id=="2" && this.user.school=="")){
     
      this.presentAlert('',"กรุณากรอกข้อมูลให้ครบ..")
    }else{
      this.goToNextSlide();
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

  checkOffice(){
    console.log(this.user.office)
  }

  openModal() {
    let myModal = this.modalCtrl.create(RolesPage);
    myModal.present();
  }

  confirmres(id){
    id==1 ? this.confirm =true : this.confirm =false
    console.log(this.confirm)
  }

}
