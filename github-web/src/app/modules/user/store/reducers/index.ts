
import * as fromRoot from '@reducers/index';
import * as fromUser from './user.reducer'

import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { IUserState } from './user.reducer';

export interface UserState {
  users: fromUser.IUserState;
}

export interface State extends fromRoot.State {
  users: UserState;
}

export const reducers: ActionReducerMap<UserState> = {
  users: fromUser.userReducers
};

export const getCoreModuleState = createFeatureSelector<UserState>('users');

export const getUserState = createSelector(
  getCoreModuleState,
  (state: UserState) => state.users
);

export const users = {
  selectUsers: createSelector(
    getUserState,
    (state: fromUser.IUserState) => state.users
  ),


  loading: createSelector(
    getUserState,
    (state: fromUser.IUserState) => state.isLoading
  ),
};
const selectUsers = (state: any) => state.users;

export const selectUserList = createSelector(
  selectUsers,
  (state: IUserState) => state.users
);

export const selectSelectedUser = createSelector(
  selectUsers,
  (state: IUserState) => state.selectedUser
);

export const selectRepositories = createSelector(
  selectUsers,
  (state: IUserState) => state.repositories
);

export const selectIsLoading = createSelector(
  selectUsers,
  (state: IUserState) => state.isLoading
);

export const selectError = createSelector(
  selectUsers,
  (state: IUserState) => state.error
)

export const selectContriburorsList = createSelector(
  selectUsers,
  (state: IUserState) => state.contributors
)