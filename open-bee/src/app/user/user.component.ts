import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  newUser: User = {} as User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  public registrateNewUser(user: User) : void
  {
    return this.userService.registrateNewUser(user);
  }
}
