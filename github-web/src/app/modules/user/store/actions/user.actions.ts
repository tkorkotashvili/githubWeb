import { Action } from '@ngrx/store';
import { IUser } from "../../../../core/models/user.model";


export enum EUserActions {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUsersError = '[User] Get Users Error'
}

export class GetUsers implements Action {
  public readonly type = EUserActions.GetUsers;
  constructor() {}
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserActions.GetUsersSuccess;
  constructor(public payload: IUser[]) {}
}
export class GetUsersError implements Action {
  public readonly type = EUserActions.GetUsersError;
  constructor(public payload: IUser[]) {}
}



export type UserActions = GetUsers | GetUsersSuccess | GetUsersError;
