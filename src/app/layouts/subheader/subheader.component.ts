import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit {
  today: number;
  constructor() {
    this.today = Date.now();
  }

  ngOnInit() {
  }

}
