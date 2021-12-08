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
  userDetails: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.GetUserProfile().subscribe(
      res =>{
        
        this.userDetails = res;
        console.log(this.userDetails)
      },
      err =>{
        console.log(err);
      },
    )
  }

  public registrateNewUser(user: User) : void
  {
    return this.userService.registrateNewUser(user);
  }
}
