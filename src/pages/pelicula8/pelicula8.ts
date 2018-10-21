import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the Pelicula8Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pelicula8',
  templateUrl: 'pelicula8.html',
})
export class Pelicula8Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pelicula8Page');
  }

  alertPush(){
    const alert = this.alertCtrl.create({
      title: '¡ PERFECTO ! ',
      subTitle: ' ¡Entradas compradas correctamente! ',
      buttons: ['OK']
    });
    alert.present();
  }
}
