import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Nav } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { AuthenProvider } from '../../providers/authen/authen';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { API_URL } from "../../providers/api-url";
import { RegisterPage } from '../../pages/register/register';
import { MainPage } from '../../pages/main/main';
@IonicPage({
  "name" : "login"
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  @ViewChild(Nav) nav: Nav;

  params = {};
  currUser = {};
  apiUrl: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,
    private http: HttpClient,
    private authen: AuthenProvider,
    private storage: Storage,
    ) { }

  ionViewDidLoad() {
    this.storage.remove("currentUser");
    this.clearKeys();
    this.apiUrl = API_URL;
    this.storage.get('user_bank').then(res=>{
      console.log(res)
    })
  }
  
  onLogin() {
    this.authen.getAuthen(this.params)
      .subscribe((res) => {
        console.log(res)
        if (res['status'] == 0){
          this.presentAlert('','ไม่พบข้อมูลผู้ใช้ กรุณาลองใหม่');
        }else{
          let results = res['result'][0];
          this.storage.set('currentUser', results);
          localStorage.setItem('my_user_type_id', results.user_type_id);
          this.navCtrl.setRoot(MainPage)
        }
      }
      , (err: HttpErrorResponse) => console.log(err));
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  empty_phone_form() {
    this.params['phone'] = "";
    this.params['pin'] = "";
  }

  clearKeys() {
    this.storage.clear().then(() => {
      console.log('Keys have been cleared');
    });
  }

  presentAlert(title, subtitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  printer(){
    this.navCtrl.push('printer');
  }

}
