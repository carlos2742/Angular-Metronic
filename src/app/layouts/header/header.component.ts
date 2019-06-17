import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showMobileMenu: boolean;
  showTopBar: boolean;
  selected: string;
  openItem: string;

  logo: string;
  logoSmall: string;

  constructor() {
    this.showMobileMenu = false;
    this.showTopBar = false;
    this.selected = 'dash';
    this.openItem = '';

    this.logo = './assets/media/logos/logo-4.png';
    this.logoSmall = './assets/media/logos/logo-4-sm.png';
  }

  ngOnInit() {
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }


  toggleTopBar() {
    this.showTopBar = !this.showTopBar;
  }

  openMenuItem(item) {
    this.openItem = item;
  }

  clearOpenMenuItem() {
    this.openItem = '';
  }
}
