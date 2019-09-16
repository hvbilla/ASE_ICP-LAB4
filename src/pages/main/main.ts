import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AboutPage} from "../about/about";
import { HttpClient } from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
authorArray=[];
  tweetName;
  author;
  tweetData;
  displayResult = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    if (localStorage.getItem("signIn") === null) {
      this.navCtrl.push(AboutPage);
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
  postCount(){

    this.http.get('https://api.diffbot.com/v3/discussion?token=f105472d42803bca68eea6472c932d0b&url=https%3A%2F%2Ftwitter.com%2Fsearch%3Fq%3D'+this.tweetName+'%26src%3Dtypeahead_click%26f%3Dlive')
      .subscribe((data:any)=> {
        this.tweetData = data;

        console.log(this.tweetData);
        this.displayResult = true;
        for(let i=0; i<10;i++){

          this.authorArray.push(this.tweetData.objects[0].posts[i].author);
          console.log( this.authorArray);

        }
  })



}}
