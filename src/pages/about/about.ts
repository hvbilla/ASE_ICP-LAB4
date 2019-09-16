import { Component } from '@angular/core';
import {AlertController} from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  passwordError = false;
  signup = {
    Fname: '',
    Lname: '',
    password: '',
    clnpassword: '',
    email: '',
    username: ''
  }
  constructor(public alertCtrl: AlertController) {
  }
  matchPassword() {
    if(this.signup.password == this.signup.clnpassword) {
      this.passwordError = false;
    } else {
      this.passwordError = true;
    }
  }

  Signup() {
    localStorage.setItem('cred', JSON.stringify(this.signup));
    console.log(this.signup);
    var alert = this.alertCtrl.create({
      title: "Registered Successfully",
      subTitle: "Account is Created",
      buttons: ['ok']
    });
    alert.present();
  }
}
