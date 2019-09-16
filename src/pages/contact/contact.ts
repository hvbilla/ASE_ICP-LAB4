import {Component, Injectable} from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutPage} from "../about/about";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
@Injectable()
export class ContactPage {
  displayResult=false;
  moodText;
  displayObj;
  constructor(public navCtrl: NavController,private http: HttpClient) {
    if (localStorage.getItem("signIn") === null) {
      this.navCtrl.push(AboutPage);
    }
  }
  ionViewDidLoad() {
    console.log('loaded after constructor of contacts');
  }
  analyse(){
    this.http.get('Https://cors-anywhere.herokuapp.com/https://api.uclassify.com/v1/prfekt/mood/classify?text='+this.moodText+'&readkey=lDT5RXMLaD3j')
      .subscribe((data:any)=> {
      console.log(data);
        this.displayResult=true;
      this.displayObj=data;
    })
  }
}
