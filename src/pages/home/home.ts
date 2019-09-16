import { Component } from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {AboutPage} from "../about/about";
import {BasepagePage} from "../basepage/basepage";
import {ContactPage} from "../contact/contact";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  uname: String;
  password: String;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }
  login = {
    username: '',
    password: ''
  }
  signIn() {
    let item = JSON.parse(localStorage.getItem('cred'));
      if (item.username == this.login.username && item.password == this.login.password) {
        var alert = this.alertCtrl.create({
          title: "Login Successfull!",
          subTitle: "Welcome" + " " + this.uname,
          buttons: ['ok']
        });
        localStorage.setItem('signIn', JSON.stringify(this.login));
        console.log(this.login);
        this.navCtrl.push(ContactPage);
      } else {
        let alert = this.alertCtrl.create({
          title: "Login Failed",
          subTitle: "Please Enter Valid Credentials",
          buttons: ['ok']
        });
        alert.present();
      }
    }



  register(){
    this.navCtrl.push(AboutPage);
  }
}
