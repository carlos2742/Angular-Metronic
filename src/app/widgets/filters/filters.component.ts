import { Component, OnInit } from '@angular/core';

interface Filter {
  account: string;
  domain: string;
  user: string;
  tag: string;
}

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  filters: Filter;

  constructor() {
    this.filters = {account: 'All', domain: 'All', user: 'All', tag: 'All'};
  }

  ngOnInit() {
  }

  updateAccountFilter(value) {
    this.filters.account = value;
  }

  updateDomainsFilter(value) {
    this.filters.domain = value;
  }

  updateUsersFilter(value) {
    this.filters.user = value;
  }

  updateTagsFilter(value) {
    this.filters.tag = value;
  }

}
