import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRepository } from '@core/models/repository.model';
import { IUser, IUserDetails } from '@core/models/user.model';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetRepositories, GetUser } from '../../store/actions/user.actions';
import { selectRepositories, selectSelectedUser } from '../../store/reducers';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  user$: Observable<IUserDetails>;
  userRepositories$: Observable<IRepository[]>;
  displayedColumns: string[] = ['name'];
  constructor(private route: ActivatedRoute, private store: Store, private _router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(new GetUser(this.route.snapshot.params.user));
    this.user$ = this.store.pipe(select(selectSelectedUser));
    if(this.user$) {
      this.store.dispatch(new GetRepositories(this.route.snapshot.params.user));
      this.userRepositories$ = this.store.pipe(select(selectRepositories));
    }
  }
  onNavigateToRepository(repository: IRepository) {
    this._router.navigate([``]);
  }
}
