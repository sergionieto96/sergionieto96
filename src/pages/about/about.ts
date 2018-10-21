import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Pelicula1Page} from "../pelicula1/pelicula1";
import {Pelicula2Page} from "../pelicula2/pelicula2";
import {Pelicula3Page} from "../pelicula3/pelicula3";
import {Pelicula4Page} from "../pelicula4/pelicula4";
import {Pelicula5Page} from "../pelicula5/pelicula5";
import {Pelicula6Page} from "../pelicula6/pelicula6";
import {Pelicula7Page} from "../pelicula7/pelicula7";
import {Pelicula8Page} from "../pelicula8/pelicula8";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  abrirPelicula1(){
    this.navCtrl.push(Pelicula1Page)
  }
  abrirPelicula2(){
    this.navCtrl.push(Pelicula2Page)
  }
  abrirPelicula3(){
    this.navCtrl.push(Pelicula3Page)
  }
  abrirPelicula4(){
    this.navCtrl.push(Pelicula4Page)
  }
  abrirPelicula5(){
    this.navCtrl.push(Pelicula5Page)
  }
  abrirPelicula6(){
    this.navCtrl.push(Pelicula6Page)
  }
  abrirPelicula7(){
    this.navCtrl.push(Pelicula7Page)
  }
  abrirPelicula8(){
    this.navCtrl.push(Pelicula8Page)
  }
}
