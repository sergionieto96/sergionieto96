import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the Pelicula4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pelicula4',
  templateUrl: 'pelicula4.html',
})
export class Pelicula4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pelicula4Page');
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
