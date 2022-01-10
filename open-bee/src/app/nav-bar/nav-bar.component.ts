import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedIn!: Boolean;

  constructor(private router: Router ) {}

  ngOnInit(): void {
    if(localStorage.getItem('token') != null)
    {
      this.loggedIn = true;
    }
    else
    {
      this.loggedIn = false;
    }
  }

  onLogOut()
  {
    localStorage.removeItem('token');
    this.loggedIn = false;
    console.log(this.loggedIn)
  }
}
