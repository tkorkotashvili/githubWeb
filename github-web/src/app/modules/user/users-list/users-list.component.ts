import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {
  @Input('users') _users;
  @Output() onNavigate = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if (!(this._users instanceof Array)) {
      this._users = [this._users];
    }
  }

  onNavigateToUser(userName: string) {
    this.onNavigate.emit(userName);
  }
}
