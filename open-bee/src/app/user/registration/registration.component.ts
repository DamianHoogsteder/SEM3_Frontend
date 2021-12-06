import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user.component';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  public newUser: User = {};

  constructor(
    private userService : UserService
    ) { }

  ngOnInit(): void {
     
  }

  public register(user : User) : void {
    console.log(user)
    this.userService.registrateNewUser(user)
  }

}
