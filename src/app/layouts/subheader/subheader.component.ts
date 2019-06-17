import { Component, OnInit } from '@angular/core';

interface FilterDate{
  date: Date;
  label: string;
}

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit {
  filter: FilterDate;

  constructor() {}

  ngOnInit() {
    this.today();
  }

  today() {
    this.filter = {
      date: new Date(),
      label: 'Today'
    };
  }

  yesterday() {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    this.filter = {
      date: date,
      label: 'Yesterday'
    };
  }

}
