import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {MockService, User} from '../../../services/mock.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: User;

  constructor(config: NgbDropdownConfig, private _mockData: MockService) {
    config.placement = 'bottom-right';
  }

  ngOnInit() {
    this.user = this._mockData.loggedUser;
  }

}
