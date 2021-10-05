import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Market } from '../market';
import { MarketService } from '../market.service';

@Component({
  selector: 'app-market-detail',
  templateUrl: './market-detail.component.html',
  styleUrls: ['./market-detail.component.css']
})
export class MarketDetailComponent implements OnInit {

  market?: Market;

  constructor(
    private marketService : MarketService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getMarkets()
  }

  getMarkets() : void
  {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.marketService.getMarketItems(id).subscribe(markets => this.market = markets);
    console.log(this.market);
  }
}
