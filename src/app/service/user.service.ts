import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl: string = 'https://randomuser.me/api';

  constructor(private http: HttpClient) { }

  //fetch users
  getUsers(size: number = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?results=${size}`)
  }

  //fetch users
  getUser(uuid: number = 1): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/?uuid=${uuid}`);
}

  //fetch one user using the user UUID.

}
