import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  constructor() { }

  websocketmessage?: String;
  hubConnection!: signalR.HubConnection;

  startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:5001/trade', {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets

    }).build();

    this.hubConnection
    .start()
    .then(() => {
      console.log('Hub connection started');
    })
    .catch(err => console.log('error while starting connection: ' + err))

  }

  askServer() {
    this.hubConnection.invoke("askServer", "zephtos")
      .catch(err => console.log(err));
  }

  async askServerListener() {
    this.hubConnection.on("askServerResponse", (sometext) => {
      this.websocketmessage = sometext;
      console.log(sometext);
    })
  }
}
