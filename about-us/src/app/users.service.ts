import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  endUrl = 'https://reqres.in/api/user/'

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    let option = {}
    return this.http.get(this.endUrl);
  }
}
