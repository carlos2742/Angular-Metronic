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

  constructor() {
    this.showMobileMenu = false;
    this.showTopBar = false;
    this.selected = 'dash';
  }

  ngOnInit() {
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }


  toggleTopBar() {
    this.showTopBar = !this.showTopBar;
  }
}
