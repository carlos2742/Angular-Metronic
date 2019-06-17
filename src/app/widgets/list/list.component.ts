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

  ngOnInit() {}

}
