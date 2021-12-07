import { Route } from '@angular/compiler/src/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { flattenDiagnosticMessageText } from 'typescript';
import { SignalrService } from './signalr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'open-bee';

 

  constructor(
    public signalrService: SignalrService,
    private router : Router
  )
  {}

  ngOnInit()
  {
    this.signalrService.startConnection(); 
    
    setTimeout(() => {
    this.signalrService.askServerListener();
    this.signalrService.askServer();
  }, 2000);
  }

  ngOnDestroy()
  {
    this.signalrService.hubConnection?.off("askServerResponse")
  }
}
