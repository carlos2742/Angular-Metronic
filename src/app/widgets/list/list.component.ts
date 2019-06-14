import {Component, Input, OnInit} from '@angular/core';

export interface ItemData {
  title?: string;
  value?: number;
  color?: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() data: ItemData[];

  constructor() { }

  ngOnInit() {
    if (!this.data) {
      this.data = [
        {
          title: 'Total Hits',
          value: 370000,
          color: 'kt-font-info'
        }, {
          title: 'Unique Visitors',
          value: 167000,
          color: 'kt-font-danger'
        }, {
          title: 'Active Links',
          value: 392,
          color: 'kt-font-success'
        }
      ];
    }
  }

}
