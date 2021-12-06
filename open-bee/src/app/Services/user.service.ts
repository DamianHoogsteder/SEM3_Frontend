import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public apiUrl = environment.USER_API_URL;
  public userUrl = this.apiUrl + "User/Register"
  public loginUrl = this.apiUrl + "User/Login"

  constructor(private http: HttpClient) { }

  public registrateNewUser(user: User) : void
  {
    this.http.post(this.userUrl, user).toPromise().then(data =>
      {
        console.log(data);
      })
  }

  public Login(user : User) : void
  {
    this.http.post(this.loginUrl, user).toPromise().then(data =>
      {
        console.log(data);
      })
  }
}
