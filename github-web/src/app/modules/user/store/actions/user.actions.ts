import { PageEvent } from '@angular/material/paginator';
import { IRepository } from '@core/models/repository.model';
import { Action } from '@ngrx/store';
import { IUser, IUserDetails } from "../../../../core/models/user.model";


export enum EUserActions {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUsersError = '[User] Get Users Error',

  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success',
  GetUserError = '[USer] get User Error',

  GetRepositories = '[User] Get Repositories',
  GetRepositoriesSuccess = '[User] Get Repositories Success'
}

export class GetUsers implements Action {
  public readonly type = EUserActions.GetUsers;
  constructor(public payload: PageEvent) {}
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserActions.GetUsersSuccess;
  constructor(public payload: IUser[]) {}
}
export class GetUsersError implements Action {
  public readonly type = EUserActions.GetUsersError;
  constructor(public payload: IUser[]) {}
}

export class GetUser implements Action {
  public readonly type = EUserActions.GetUser;
  constructor(public payload: string) {}
}

export class GetUserSuccess implements Action {
  public readonly type = EUserActions.GetUserSuccess;
  constructor(public payload: IUserDetails) {}
}
export class GetRepositories implements Action {
  public readonly type = EUserActions.GetRepositories;
  constructor(public payload: string) {}
}

export class GetRepositoriesSuccess implements Action {
  public readonly type = EUserActions.GetRepositoriesSuccess;
  constructor(public payload: IRepository[]) {}
}


export type UserActions = GetUsers | GetUsersSuccess | GetUsersError | GetUser | GetUserSuccess | GetRepositories |GetRepositoriesSuccess;
