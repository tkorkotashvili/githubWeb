import { HttpErrorResponse } from '@angular/common/http';
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
  GetRepositoriesSuccess = '[User] Get Repositories Success',
  GetRepositoriesError = '[User] Get Repositories Error',

  GetRpositoryContributors = '[User] Get Repository Contributors',
  GetRpositoryContributorsSuccess = '[User] Get Repository Contributors Success',
  GetRpositoryContributorsError = '[User] Get Repository Contributors Error'
}

export class GetUsers implements Action {
  public readonly type = EUserActions.GetUsers;
  constructor(public payload: PageEvent) { }
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserActions.GetUsersSuccess;
  constructor(public payload: IUser[]) { }
}
export class GetUsersError implements Action {
  public readonly type = EUserActions.GetUsersError;
  constructor(public payload: string) { }
}

export class GetUser implements Action {
  public readonly type = EUserActions.GetUser;
  constructor(public payload: string) { }
}

export class GetUserSuccess implements Action {
  public readonly type = EUserActions.GetUserSuccess;
  constructor(public payload: IUserDetails) { }
}
export class GetUserError implements Action {
  public readonly type = EUserActions.GetUserError;
  constructor(public payload: string) { }
}

export class GetRepositories implements Action {
  public readonly type = EUserActions.GetRepositories;
  constructor(public payload: string) { }
}

export class GetRepositoriesSuccess implements Action {
  public readonly type = EUserActions.GetRepositoriesSuccess;
  constructor(public payload: IRepository[]) { }
}
export class GetRepositoriesError implements Action {
  public readonly type = EUserActions.GetRepositoriesError;
  constructor(public payload: string) { }
}

export class GetRpositoryContributors implements Action {
  public readonly type = EUserActions.GetRpositoryContributors;
  constructor(public payload: { userName: string, repository: string }) { }
}

export class GetRpositoryContributorsSuccess implements Action {
  public readonly type = EUserActions.GetRpositoryContributorsSuccess;
  constructor(public payload: IUser[]) { }
}
export class GetRpositoryContributorsError implements Action {
  public readonly type = EUserActions.GetRpositoryContributorsError;
  constructor(public payload: string) { }
}


export type UserActions = GetUsers | GetUsersSuccess | GetUsersError |
  GetUser | GetUserSuccess | GetUserError | GetRepositories |
  GetRepositoriesSuccess | GetRepositoriesError | GetRpositoryContributors |
  GetRpositoryContributorsSuccess | GetRpositoryContributorsError;
