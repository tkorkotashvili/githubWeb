import { Injectable } from "@angular/core"
import { createEffect, ofType , Actions} from "@ngrx/effects"
import { EUserActions, GetUsers, GetUsersSuccess } from "../actions/user.actions"
import { switchMap, map, withLatestFrom, tap, mergeMap } from 'rxjs/operators';
import { UserService } from "@core/services/user.service";
import { IUser } from "@core/models/user.model";


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

  constructor(
    private _userService: UserService,
    private _actions$: Actions,
    
  ) {}
}
