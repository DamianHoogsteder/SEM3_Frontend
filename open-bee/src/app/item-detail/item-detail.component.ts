import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { MarketService } from '../MarketService/market.service';
import { SignalrService } from '../signalr.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item?: Item;
  tradeOffer?: String;

  constructor(
    private marketService : MarketService,
    private route: ActivatedRoute,
    private signalrService: SignalrService
  ) { }

  ngOnInit(): void {
    
    this.getItemById()
  }

  
  getItemById() : void
  {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.marketService.getItemById(id).subscribe(items => this.item = items);
  }

  async sendTradeOffer()
  {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.signalrService.askServer();
        resolve(this.signalrService.askServerListener());
      }, 2000); 
      this.tradeOffer = this.signalrService.websocketmessage;
    })
    return promise;
  }
  
}
