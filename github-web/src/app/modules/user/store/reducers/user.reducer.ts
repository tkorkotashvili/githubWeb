import { IUser } from "../../../../core/models/user.model";
import { EUserActions, UserActions } from "../actions/user.actions";

export interface IUserState {
    users: IUser[];
    selectedUser: IUser;
    repos: any[];
    error: any;
    selectedRepo: any;
    isLoading: boolean
  }
  
  export const initialUserState: IUserState = {
    users: [],
    selectedUser: Object.assign({}),
    repos: [],
    error: '',
    selectedRepo: Object.assign({}),
    isLoading: false
  };
  

export function userReducers  (
  
  state = initialUserState,
  action: UserActions
): IUserState {
  debugger
  switch (action.type) {
    case EUserActions.GetUsersSuccess: {
      console.log('movida',action.payload)
      return {
        ...state,
        users: action.payload
      };
    }
    case EUserActions.GetUsersError: {
      return {
        ...state,
        error: action.payload
      };
    }

    default:
      return state;
  }
};
