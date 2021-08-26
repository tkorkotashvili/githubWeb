export interface IUser { 
    id: number,
    login: string,
    avatar_url: string
}

export interface IUserDetails {
    id: number,
    login: string,
    avatar_url: string,
    followers: number,
    following: number
}