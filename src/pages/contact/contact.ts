import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  private twitter: string;
  private instagram: string;
  private facebook: string;

  constructor(public navCtrl: NavController) {
    this.twitter="@sergionieto_96";
    this.instagram="@seergionl";
    this.facebook="@sergio.nieto";

  }

  followTwitter(){
    window.open("http://www.twitter.com/sergionieto_96", "_system", "location = yes")
  }
  followInsta(){
    window.open("http://www.instagram.com/seergionl", "_system", "location = yes")
  }
  followFace(){
    window.open("http://www.facebook.com/sergio.nieto", "_system", "location = yes")
  }
}
