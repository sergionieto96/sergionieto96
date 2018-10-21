import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private nombre: string;

  constructor(public navCtrl: NavController) {
    this.nombre = "Sergio Nieto Labian";
  }
  abrirPag(){
    window.open("http://www.cineslasvias.es", "_system", "location = yes")
  }
}
