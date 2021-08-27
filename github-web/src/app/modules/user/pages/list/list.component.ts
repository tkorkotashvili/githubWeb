import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';

//local imports
import { IUser } from '@core/models/user.model';
import { ErrorHandleDialogComponent } from '../../error-handle-dialog/error-handle-dialog.component';
import { GetUsers } from '../../store/actions/user.actions';
import * as fromUser from '../../store/reducers'
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit , OnDestroy  {
  error$: Observable<string>;
  users$: Observable<IUser[]>;

  destruct$ = new Subject();

  defaultPagination = { pageIndex: 0, pageSize: 5, length: 10 } as PageEvent;
  
  constructor(private _store: Store<fromUser.State>,
    private _router: Router,
    private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this._store.dispatch(new GetUsers(this.defaultPagination));

    this.users$ = this._store.pipe(select(fromUser.selectUserList));

    this.handleErrors();
  }

  onNavigateToUser(username: string): void {
    this._router.navigate([`users/${username}/details`]);
  }

  onPageChange(event: PageEvent) {
    this._store.dispatch(new GetUsers(event));
  }

  handleErrors() {
    this.error$ = this._store.pipe(takeUntil(this.destruct$),select(fromUser.selectError));

    this.error$.pipe(takeUntil(this.destruct$)).subscribe(res => {
      if (res && res != '') {
        this.dialog.open(ErrorHandleDialogComponent, {
          data: {
            errorMessage: this.error$
          }
        })
      }
    })
  }
  ngOnDestroy(): void {
    this.destruct$.next();
    this.destruct$.complete();
  }
}


