import { Component, OnInit } from '@angular/core';
import {MockService} from '../../services/mock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataTable: any;
  statistics: any;
  list: any;

  constructor(private _mock: MockService) { }

  ngOnInit() {
    this.dataTable = this._mock.dataTable;
    this.statistics = this._mock.statistics;
    this.list = this._mock.list;
  }

}
