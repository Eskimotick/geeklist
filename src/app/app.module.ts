import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ItemDetailsPageModule } from '../pages/item-details/item-details.module';

import { TabsPage } from '../pages/tabs/tabs';
import { AnimePage } from '../pages/anime/anime';
import { JogoPage } from '../pages/jogo/jogo';
import { ItemDetailsPage } from '../pages/item-details/item-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    JogoPage,
    AnimePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ItemDetailsPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AnimePage,
    JogoPage,
    TabsPage,
    ItemDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
