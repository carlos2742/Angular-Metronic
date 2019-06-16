import {Component, Input, OnInit} from '@angular/core';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() data;
  dataSource: Array<any>;

  tempArr: Array<any>;

  count: number;
  total: number;
  page: number;
  totalPages: number;
  paginatorMessage: string;

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
        { created: '2/5/2016', link: 'Carlos', destination: 'Carlos', hit: 33000000, status: 'active', updated: '3/7/2016' }
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

  changePage(page) {
    if (this.page !== page) {
      this.page = page;
      this.updateComponent();
    }
  }

  changeCount(count) {
    if (this.count !== count) {
      this.count = count;
      this.updateComponent();
    }
  }

  private updateComponent() {
    this.updatePaginator();
    this.updateDataSource();
  }

  private updatePaginator() {
    this.total = this.data.length;
    this.totalPages = Math.ceil(this.total / this.count);
    this.paginatorMessage = `Displaying ${this.count * (this.page - 1) + 1} - ${this.count > this.total ? this.total : this.count} of ${this.total} records`;
  }

  private updateDataSource() {
    this.tempArr = Array(this.totalPages).fill(1);
    const from = this.count * (this.page - 1);
    this.dataSource = this.page === this.totalPages ? this.data.slice(from) : this.data.slice(from, this.count);
  }

}
