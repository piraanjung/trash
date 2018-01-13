import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the RolesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-roles',
  templateUrl: 'roles.html',
})
export class RolesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public viewCtrl: ViewController) {
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }


}
