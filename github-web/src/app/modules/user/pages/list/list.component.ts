import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';import { IUser } from '@core/models/user.model';
import { ofType } from '@ngrx/effects';
;
import { ScannedActionsSubject, select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { EUserActions, GetUsers } from '../../store/actions/user.actions';
import * as fromUser from '../../store/reducers'
import { selectUserList } from '../../store/reducers';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  error = '';
  users$ : Observable<IUser[]>;
  destruct$ = new Subject();
  defaultPagination = {pageIndex : 0, pageSize: 5, length: 10 } as PageEvent;
  constructor(private _store: Store<fromUser.State>, private _router: Router,  actions$: ScannedActionsSubject) { 
    // actions$.pipe(
    //   ofType(EUserActions.GetUsersError),
    // ).subscribe(action => this.error = action.payload);
  }

  ngOnInit(): void {
    this._store.dispatch(new GetUsers());
    // this.users$ = this._store.pipe(takeUntil(this.destruct$),select(fromUser.selectUserList))

    this.users$ = this._store.pipe(select(selectUserList))

  }

  navigateToUser(username: string): void {
    this._router.navigate(['user', username]);
  }

  // onPageChange(event: PageEvent) {
  //   this._store.dispatch(new GetUsers(event));
  // }
}


