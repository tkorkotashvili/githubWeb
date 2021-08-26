import { IRepository } from "@core/models/repository.model";
import { IUser, IUserDetails } from "../../../../core/models/user.model";
import { EUserActions, UserActions } from "../actions/user.actions";

export interface IUserState {
  users: IUser[];
  selectedUser: IUserDetails;
  repositories: IRepository[];
  error: any;
  selectedRepo: IRepository;
  isLoading: boolean;
  contributors: IUser[]
}

export const initialUserState: IUserState = {
  users: [],
  selectedUser: Object.assign({}),
  repositories: [],
  error: '',
  selectedRepo: Object.assign({}),
  isLoading: false,
  contributors: Object.assign({}),
};


export function userReducers(

  state = initialUserState,
  action: UserActions
): IUserState {

  switch (action.type) {
    case EUserActions.GetUsers: {
      return {
        ...state,
        isLoading: true
      };
    }
    case EUserActions.GetUsersSuccess: {
      return {
        ...state,
        users: action.payload,
        isLoading: false,
        error: null
      };
    }
    case EUserActions.GetUsersError: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }

    case EUserActions.GetUser: {
      return {
        ...state,
        isLoading: true
      };
    }
    case EUserActions.GetUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload,
        isLoading: false
      };
    }
    case EUserActions.GetUserError: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }

    case EUserActions.GetRepositories: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case EUserActions.GetRepositoriesSuccess: {
      return {
        ...state,
        repositories: action.payload
      };
    }
    case EUserActions.GetRepositoriesError: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }
    case EUserActions.GetRpositoryContributors: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case EUserActions.GetRpositoryContributorsSuccess: {
      return {
        ...state,
        isLoading: false,
        contributors: action.payload,
      };
    }
    case EUserActions.GetRpositoryContributorsError: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }

    default:
      return state;
  }
};
