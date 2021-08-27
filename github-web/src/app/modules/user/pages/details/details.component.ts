import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';


//local imports
import { ErrorHandleDialogComponent } from '../../error-handle-dialog/error-handle-dialog.component';
import { GetRepositories, GetUser } from '../../store/actions/user.actions';
import { selectRepositories, selectSelectedUser } from '../../store/reducers';
import { IRepository } from '@core/models/repository.model';
import { IUserDetails } from '@core/models/user.model';
import * as fromUser from '../../store/reducers'
import {  takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit , OnDestroy {
  user$: Observable<IUserDetails>;
  errors$: Observable<string>;
  userRepositories$: Observable<IRepository[]>;
  displayedColumns: string[] = ['name'];
  destruct$ = new Subject();
  constructor(private route: ActivatedRoute, private store: Store, private _router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    //get user data
    this.store.dispatch(new GetUser(this.route.snapshot.params.user));
    // select user from store
    this.user$ = this.store.pipe(select(selectSelectedUser));
    //get repositories list
    this.getRepositories();
    //handle errors
    this.handleErrors();

  }
  getRepositories() {
    if (this.user$) {
      this.store.dispatch(new GetRepositories(this.route.snapshot.params.user));
      this.userRepositories$ = this.store.pipe(select(selectRepositories));
    }
  }
  handleErrors() {
    this.errors$ = this.store.pipe(takeUntil(this.destruct$),select(fromUser.selectError));

    this.errors$.pipe(takeUntil(this.destruct$)).subscribe(res => {
      if (res && res != '') {
        this.dialog.open(ErrorHandleDialogComponent, {
          data: {
            errorMessage: this.errors$
          }
        })
      }
    })
  }
  onNavigateToRepository(repository: IRepository) {
    this._router.navigate([`${this._router.url}/${repository.name}/contributors`]);
  }
  ngOnDestroy(): void {
    this.destruct$.next();
    this.destruct$.complete();
  }
}
