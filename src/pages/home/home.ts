import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JogoPage } from '../jogo/jogo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    tab2Root = JogoPage;

  	constructor(public navCtrl: NavController) {
  }

}
