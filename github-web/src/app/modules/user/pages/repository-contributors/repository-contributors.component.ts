import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '@core/models/user.model';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

//local imports
import { ErrorHandleDialogComponent } from '../../error-handle-dialog/error-handle-dialog.component';
import { GetRpositoryContributors } from '../../store/actions/user.actions';
import { selectContriburorsList, selectError } from '../../store/reducers';

@Component({
  selector: 'app-repository-contributors',
  templateUrl: './repository-contributors.component.html',

})
export class RepositoryContributorsComponent implements OnInit {
  error$: Observable<string>;
  contributors$: Observable<IUser[]>;
  repository = this.route.snapshot.params.repository;
  defaultPagination = { pageIndex: 0, pageSize: 5, length: 10 } as PageEvent;
  
  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store,
              private dialog: MatDialog
              ){ }

  ngOnInit(): void {
    this.store.dispatch(new GetRpositoryContributors({ userName: this.route.snapshot.params.user, repository: this.route.snapshot.params.repository }));
    this.contributors$ = this.store.pipe(select(selectContriburorsList));

    this.error$ = this.store.pipe(select(selectError));

    this.error$.subscribe(res => {
      if (res) {
        this.dialog.open(ErrorHandleDialogComponent, {
          data: {
            errorMessage: this.error$
          }
        })
      }
    })
  }
  onNavigate(userName: string) {
    console.log(userName);
    this.router.navigate([`/users/${userName}/details`]);
  }

}
