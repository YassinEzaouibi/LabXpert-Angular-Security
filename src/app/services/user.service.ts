import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8888/api/v1/users";

  constructor(private httpClient: HttpClient) {
  }

  getUsersList(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseURL);
  }

  saveUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.baseURL + '/add', user);
  }

  updateUser(id: number, user: User): Observable<Object> {
    return this.httpClient.put(this.baseURL + '/' + id + '/update', user);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.baseURL + '/' + id);
  }

  deleteUser(id: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL + '/' + id + '/delete');
  }
}
