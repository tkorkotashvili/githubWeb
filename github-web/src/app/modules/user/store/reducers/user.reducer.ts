import { IRepository } from "@core/models/repository.model";
import { IUser, IUserDetails } from "../../../../core/models/user.model";
import { EUserActions, UserActions } from "../actions/user.actions";

export interface IUserState {
    users: IUser[];
    selectedUser: IUserDetails;
    repositories: IRepository[];
    error: any;
    selectedRepo: IRepository;
    isLoading: boolean
  }
  
  export const initialUserState: IUserState = {
    users: [],
    selectedUser: Object.assign({}),
    repositories: [],
    error: '',
    selectedRepo: Object.assign({}),
    isLoading: false
  };
  

export function userReducers  (
  
  state = initialUserState,
  action: UserActions
): IUserState {
  
  switch (action.type) {
    case EUserActions.GetUsersSuccess: {
      return {
        ...state,
        users: action.payload
      };
    }
    case EUserActions.GetUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }
    case EUserActions.GetRepositoriesSuccess: {
      return {
        ...state,
        repositories: action.payload
      };
    }

    default:
      return state;
  }
};
