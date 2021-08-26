import { Injectable } from "@angular/core"
import { createEffect, ofType , Actions} from "@ngrx/effects"
import { EUserActions, GetRepositories, GetRepositoriesSuccess, GetUser, GetUsers, GetUsersSuccess, GetUserSuccess } from "../actions/user.actions"
import { switchMap, map, withLatestFrom, tap, mergeMap } from 'rxjs/operators';
import { UserService } from "@core/services/user.service";
import { IUser, IUserDetails } from "@core/models/user.model";
import { IRepository } from "@core/models/repository.model";


@Injectable()
export class UserEffects {

getUsers$ = createEffect (() => this._actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap((action) => 
        this._userService.getUserList(action.payload).pipe(
        map((data: IUser[]) => {
          return new GetUsersSuccess(data)
        }
      )))
  ))
  getUser$ = createEffect (() => this._actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    switchMap((action) => 
        this._userService.getUser(action.payload).pipe(
        map((data: IUserDetails) => {
          return new GetUserSuccess(data)
        }
      )))
  ))

  getReositories$ = createEffect (() => this._actions$.pipe(
    ofType<GetRepositories>(EUserActions.GetRepositories),
    switchMap((action) => 
        this._userService.getUserRepos(action.payload).pipe(
        map((data: IRepository[]) => {
          return new GetRepositoriesSuccess(data)
        }
      )))
  ))
  constructor(
    private _userService: UserService,
    private _actions$: Actions,
    
  ) {}
}
