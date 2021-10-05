import { Component, OnInit } from '@angular/core';
import { Market } from '../market';
import { MarketService } from '../market.service';

@Component({
  selector: 'app-markets',
  templateUrl: './marketdetails.component.html',
  styleUrls: ['./marketdetails.component.css']
})
export class MarketdetailsComponent implements OnInit {

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