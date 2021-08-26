import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';
import { PageEvent } from '@angular/material/paginator';
import { IRepository } from '@core/models/repository.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  getUserList(pageOptions: PageEvent): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`users?since=${pageOptions.pageIndex}&per_page=${pageOptions.pageSize}`);
  }
  
  getUser(userName: string): Observable<IUser> {
    return this.httpClient.get<IUser>(`users/${userName}`);
  }

  getUserRepos(userName: string): Observable<IRepository[]> {
    return this.httpClient.get<IRepository[]>(`/users/${userName}/repos`);
  }


  getUserRepositoryContributors(userName: string, repo: string): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`repos/${userName}/${repo}/contributors`);
  }
}
