import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HomeTabsPage } from '../pages/home-tabs/home-tabs';
import { AnimePage } from '../pages/anime/anime';
import { JogoPage } from '../pages/jogo/jogo';

import { JogoPageModule } from '../pages/jogo/jogo.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    HomeTabsPage,
    AnimePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    JogoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    HomeTabsPage,
    AnimePage,
    JogoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
