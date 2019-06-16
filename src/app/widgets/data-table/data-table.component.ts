import {Component, Input, OnInit} from '@angular/core';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() data;
  count: number;
  total: number;
  page: number;
  totalPages: number;
  dataSource: Array<any>;

  constructor() {
    this.count = 10;
    this.page = 1;
    this.dataSource = [];
  }

  ngOnInit() {
    if (!this.data) {
      this.data = [
        { created: '1/1/2016', link: 'drinks.me/256', destination: 'pernod-ricard.com/bran', hit: 303000, status: 'active', updated: '1/1/2016' },
        { created: '2/5/2016', link: 'hola.me/3569', destination: 'health-ricard.com/bran', hit: 33000000, status: 'inactive', updated: '3/7/2016' },
        { created: '2/5/2016', link: 'hola.me/3569', destination: 'health-ricard.com/bran', hit: 33000000, status: 'inactive', updated: '3/7/2016' },
        { created: '2/5/2016', link: 'hola.me/3569', destination: 'health-ricard.com/bran', hit: 33000000, status: 'inactive', updated: '3/7/2016' },
        { created: '2/5/2016', link: 'hola.me/3569', destination: 'health-ricard.com/bran', hit: 33000000, status: 'inactive', updated: '3/7/2016' },
        { created: '2/5/2016', link: 'hola.me/3569', destination: 'health-ricard.com/bran', hit: 33000000, status: 'inactive', updated: '3/7/2016' },
        { created: '2/5/2016', link: 'hola.me/3569', destination: 'health-ricard.com/bran', hit: 33000000, status: 'inactive', updated: '3/7/2016' },
        { created: '2/5/2016', link: 'hola.me/3569', destination: 'health-ricard.com/bran', hit: 33000000, status: 'inactive', updated: '3/7/2016' },
        { created: '2/5/2016', link: 'hola.me/3569', destination: 'health-ricard.com/bran', hit: 33000000, status: 'inactive', updated: '3/7/2016' },
        { created: '2/5/2016', link: 'hola.me/3569', destination: 'health-ricard.com/bran', hit: 33000000, status: 'inactive', updated: '3/7/2016' },
        { created: '2/5/2016', link: 'hola.me/3569', destination: 'health-ricard.com/bran', hit: 33000000, status: 'inactive', updated: '3/7/2016' }
      ];
    }
    this.updateComponent();
  }

  sort(field, order) {
    if (this.data) {
      console.log(order);
      this.data = this.data.sort((a, b) => {
        if (a[field] < b[field]) {
          return order === 'asc' ? -1 : 1;
        }

        if (a[field] > b[field]) {
          return order === 'asc' ? 1 : -1;
        }

        return 0;
      });
    }
  }

  updateComponent() {
    this.updatePaginator();
    this.updateDataSource();
  }

  private updatePaginator() {
    this.total = this.data.length;
    this.totalPages = this.total / this.count;
  }

  private updateDataSource() {
    this.dataSource = this.data.slice(this.page - 1, this.count);
  }

}
