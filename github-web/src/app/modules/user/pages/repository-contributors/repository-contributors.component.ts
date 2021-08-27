import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '@core/models/user.model';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

//local imports
import { ErrorHandleDialogComponent } from '../../error-handle-dialog/error-handle-dialog.component';
import { GetRpositoryContributors } from '../../store/actions/user.actions';
import { selectContriburorsList, selectError } from '../../store/reducers';

@Component({
  selector: 'app-repository-contributors',
  templateUrl: './repository-contributors.component.html',

})
export class RepositoryContributorsComponent implements OnInit , OnDestroy  {
  error$: Observable<string>;
  contributors$: Observable<IUser[]>;
  destruct$ = new Subject();
  repository = this.route.snapshot.params.repository;
  defaultPagination = { pageIndex: 0, pageSize: 5, length: 10 } as PageEvent;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    //get repository contributors list
    this.store.dispatch(new GetRpositoryContributors({ userName: this.route.snapshot.params.user, repository: this.route.snapshot.params.repository }));
    //select contributors from store
    this.contributors$ = this.store.pipe(select(selectContriburorsList));
    // handle errors
    this.handleErrors();
  }
  onNavigate(userName: string) {

    this.router.navigate([`/users/${userName}/details`]);
  }

  handleErrors() {
    this.error$ = this.store.pipe(takeUntil(this.destruct$), select(selectError));

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
