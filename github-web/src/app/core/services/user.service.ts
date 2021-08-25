import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  // getUsers(): Observable<any> {
  //   return this.httpClient.get<any>(`users`);
  // }
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
