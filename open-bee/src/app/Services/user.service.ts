import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private 
  constructor(private http: HttpClient) { }

  public registrateNewUser(user: User)
  {
    this.http.post();
  }
}
