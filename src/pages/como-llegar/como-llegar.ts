import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

/**
 * Generated class for the ComoLlegarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-como-llegar',
  templateUrl: 'como-llegar.html',
})
export class ComoLlegarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  private launchNavigator: LaunchNavigator) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComoLlegarPage');
  }

  irCine(direccion){
    this.launchNavigator.navigate(direccion);
  }
}
