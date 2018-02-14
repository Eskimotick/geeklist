import { Component } from '@angular/core';

import { JogoPage } from '../jogo/jogo';
import { AnimePage } from '../anime/anime';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  jogoRoot = JogoPage;
  animeRoot = AnimePage;

  constructor() {

  }
}
