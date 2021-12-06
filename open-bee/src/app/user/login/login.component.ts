import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  }

  public login(user: User) : void
  {
    console.log(user)
    this.userService.Login(user)
  }
}
