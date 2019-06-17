import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() data;
  @ViewChild('dataTable') dataTable: ElementRef;
  @ViewChild('allCheck') allCheck: ElementRef;
  dataSource: Array<any>;

  tempArr: Array<any>;

  count: number;
  total: number;
  page: number;
  totalPages: number;
  paginatorMessage: string;

  scrollPos: string;
  scrollHeight: string;

  constructor() {
    this.count = 10;
    this.page = 1;
    this.dataSource = [];
    this.scrollPos = '0px';
    this.scrollHeight = '302px';
  }

  ngOnInit() {
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
      this.allCheck.nativeElement.checked = false;
      this.page = page;
      this.updateComponent();
    }
  }

  changeAllChecks() {
    const currentValue = this.allCheck.nativeElement.checked;
    const allTableChecks = this.dataTable.nativeElement.querySelectorAll('input[type=checkbox]');
    for (let i = 1; i < allTableChecks.length; i++) {
      allTableChecks[i].checked = currentValue;
    }
  }

  changeCount(count) {
    if (this.count !== count) {
      this.count = count;
      this.updateScrollHeigth();
      this.updateComponent();
    }
  }

  updateScroll(element) {
    console.log(element.scrollTop);
    this.scrollPos = `${element.scrollTop}px`;
  }

  private updateScrollHeigth() {
    const c = this.count > this.total ? this.total : this.count;
    const f = (302 * c / 10);
    this.scrollHeight = `${Math.ceil(302 - ((302 * c / 10) - 302) - 22)}px`;
  }

  private updateComponent() {
    this.updatePaginator();
    this.updateDataSource();
  }

  private updatePaginator() {
    this.total = this.data.length;
    this.totalPages = Math.ceil(this.total / this.count);

    const elements = this.count * (this.page - 1) + 1;
    const part = (this.count >= this.total || elements >= this.total || this.count * this.page > this.total) ? this.total : this.count * this.page;

    this.paginatorMessage = `Displaying ${elements} - ${part} of ${this.total} records`;
  }

  private updateDataSource() {
    this.tempArr = Array(this.totalPages).fill(1);
    const from = this.count * (this.page - 1);
    const to = this.count * this.page > this.total ? this.total : this.count * this.page ;
    this.dataSource = this.data.slice(from, to);
  }

}
