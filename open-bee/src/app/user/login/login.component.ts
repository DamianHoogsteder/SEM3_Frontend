import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public currentUser: User = {};
  
  constructor(private userService : UserService,
    private router: Router) { }

  ngOnInit(): void {
    //If user is logged this rejects them from going to login page through url.
    if(localStorage.getItem('token') != null)
    {
      this.router.navigateByUrl('/home');
    }
  }

  login(user: User)
  {
    this.userService.Login(user).subscribe(
      (res: any) =>
      {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
      },
      err => 
      {
        console.log(err);
      }
    );
  }
}
