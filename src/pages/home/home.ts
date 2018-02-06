import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	lists = ['list1', 
 	'list2',
 	'list3'];

  	constructor(public navCtrl: NavController) {
  }

}
