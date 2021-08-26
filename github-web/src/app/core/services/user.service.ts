import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';
import { PageEvent } from '@angular/material/paginator';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  getUserList(pageOptions: PageEvent): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`users?since=${pageOptions.pageIndex}&per_page=${pageOptions.pageSize}`);
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
