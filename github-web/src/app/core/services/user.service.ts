import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  getUserList(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`users`);
  }
  // getUser(userName: string): Observable<any> {
  //   return this.httpClient.get<any>(`users/${userName}`);
  // }

  // getUserRepos(userName:string): Observable<any> {
  //   return this.httpClient.get<any>( `users/${userName}/repos`);
  // }
  // getUserSelectedRepo(userName: string, repo: string): Observable<any> {
  //   return this.httpClient.get<any>(`/repos/${userName}/${repo}`);
  // }

  // getUserRepositoryContributors(userName: string, repo: string): Observable<any> {
  //   return this.httpClient.get<any>(`/repos/${userName}/${repo}/contributors`);
  // }
}
