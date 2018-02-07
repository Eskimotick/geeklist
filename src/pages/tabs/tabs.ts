import { Component } from '@angular/core';

import { HomeTabsPage } from '../home-tabs/home-tabs';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomeTabsPage;

  constructor() {

  }
}
