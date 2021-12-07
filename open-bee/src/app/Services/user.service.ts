import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user : User = {} as User

  public apiUrl = environment.USER_API_URL;
  public userUrl = this.apiUrl + "User/Register"
  public loginUrl = this.apiUrl + "User/Login"
  public profileUrl = this.apiUrl + "UserProfile"


  constructor(private http: HttpClient) { }

  public registrateNewUser(user: User) : void
  {
    this.http.post(this.userUrl, user).toPromise().then(data =>
      {
        console.log(data);
      })
  }

  public Login(user : User) : Observable<User>
  {
   return this.http.post(this.loginUrl, user)
  }

  public FetchUserDataOnLogin(data: any)
  {
    this.http.get<User>(this.profileUrl)
  }
}
