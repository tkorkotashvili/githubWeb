import { Injectable } from "@angular/core"
import { createEffect, ofType, Actions } from "@ngrx/effects"
import { EUserActions, GetRepositories, GetRepositoriesError, GetRepositoriesSuccess, GetRpositoryContributors, GetRpositoryContributorsError, GetRpositoryContributorsSuccess, GetUser, GetUserError, GetUsers, GetUsersError, GetUsersSuccess, GetUserSuccess } from "../actions/user.actions"
import { switchMap, map, catchError, take } from 'rxjs/operators';
import { UserService } from "@core/services/user.service";
import { IUser, IUserDetails } from "@core/models/user.model";
import { IRepository } from "@core/models/repository.model";
import { EMPTY, of } from "rxjs";


@Injectable()
export class UserEffects {

  getUsers$ = createEffect(() => this._actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),

    switchMap((action) =>
      this._userService.getUserList(action.payload).pipe(
        map((data: IUser[]) => {
          return new GetUsersSuccess(data)
        }),
        catchError(err => {
          return of(new GetUsersError(err.error.message))
        }))),
  ))
  getUser$ = createEffect(() => this._actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    switchMap((action) =>
      this._userService.getUser(action.payload).pipe(
        map((data: IUserDetails) => {
          return new GetUserSuccess(data)
        }),
        catchError(err => {
          return of(new GetUserError(err.error.message))
        }))),


  ))

  getReositories$ = createEffect(() => this._actions$.pipe(
    ofType<GetRepositories>(EUserActions.GetRepositories),
    switchMap((action) =>
      this._userService.getUserRepos(action.payload).pipe(
        map((data: IRepository[]) => {
          return new GetRepositoriesSuccess(data)
        }), catchError(err => {
          return of(new GetRepositoriesError(err.error.message))
        })))
  ))

  getRepositoryContributors$ = createEffect(() => this._actions$.pipe(
    ofType<GetRpositoryContributors>(EUserActions.GetRpositoryContributors),
    switchMap((action) =>
      this._userService.getUserRepositoryContributors(action.payload.userName, action.payload.repository).pipe(
        map((data: IUser[]) => {
          return new GetRpositoryContributorsSuccess(data)
        }
        ),
        catchError(err => {
          return of(new GetRpositoryContributorsError(err.error.message))
        })))
  ))
  constructor(
    private _userService: UserService,
    private _actions$: Actions,

  ) { }
}
