import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Pelicula1Page} from "../pages/pelicula1/pelicula1";
import {Pelicula7Page} from "../pages/pelicula7/pelicula7";
import {Pelicula6Page} from "../pages/pelicula6/pelicula6";
import {Pelicula5Page} from "../pages/pelicula5/pelicula5";
import {Pelicula4Page} from "../pages/pelicula4/pelicula4";
import {Pelicula3Page} from "../pages/pelicula3/pelicula3";
import {Pelicula2Page} from "../pages/pelicula2/pelicula2";
import {Pelicula8Page} from "../pages/pelicula8/pelicula8";
import {ComoLlegarPage} from "../pages/como-llegar/como-llegar";
import {LaunchNavigator} from "@ionic-native/launch-navigator";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Pelicula1Page,
    Pelicula2Page,
    Pelicula3Page,
    Pelicula4Page,
    Pelicula5Page,
    Pelicula6Page,
    Pelicula7Page,
    Pelicula8Page,
    ComoLlegarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Pelicula1Page,
    Pelicula2Page,
    Pelicula3Page,
    Pelicula4Page,
    Pelicula5Page,
    Pelicula6Page,
    Pelicula7Page,
    Pelicula8Page,
    ComoLlegarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LaunchNavigator
  ]
})
export class AppModule {}
