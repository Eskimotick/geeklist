import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Item } from '../item';
import { List } from '../list';

@Component({
  selector: 'page-anime',
  templateUrl: 'anime.html'
})
export class AnimePage {

  itens: Item[] = [
     { status: 1, name: 'Future Diary'},
     { status: 2, name: 'One Piece'},
     { status: 2, name: 'My Hero Academy'},
     { status: 3, name: 'Naruto'}
   ];


    lists: List[] = [
      { id: 1, name: 'Quero Assitir'},
      { id: 2, name: 'Assistindo'},
      { id: 3, name: 'Assistidos'}
  ];

  constructor(public navCtrl: NavController) {

  }

}
