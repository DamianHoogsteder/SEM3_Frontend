import { Component, OnInit } from '@angular/core';
import { MarketService } from '../market.service';
import { Market } from 'src/market';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.css']
})
export class MarketsComponent implements OnInit {

  markets: Market[] = [];

  constructor(private marketService : MarketService) { }

  ngOnInit(): void {
    this.getMarkets();
  }

  getMarkets() : void
  {
    this.marketService.getMarket().subscribe((markets: any) => this.markets = markets);
  }
}
