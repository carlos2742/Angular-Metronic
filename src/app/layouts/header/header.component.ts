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

  constructor() {
    this.showMobileMenu = false;
    this.showTopBar = false;
    this.selected = 'dash';
    this.openItem = '';
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
