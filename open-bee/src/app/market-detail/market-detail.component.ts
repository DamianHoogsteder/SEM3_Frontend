import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { Market } from '../market';
import { MarketService } from '../MarketService/market.service';
import { UserService } from '../Services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-market-detail',
  templateUrl: './market-detail.component.html',
  styleUrls: ['./market-detail.component.css']
})
export class MarketDetailComponent implements OnInit {

  @Input() market?: Market;
  items: Item[] = [];
  user: User = {}
  markets: Market[] = [];

  constructor(
    private marketService : MarketService,
    private userService : UserService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getMarkets()
    //this.getItems()
  }

  getMarkets() : void
  {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.marketService.getMarketItems(id).subscribe((markets: any) => this.markets = markets);
  }

  getItems() : void
  {
    this.marketService.getItemsUpForSale().subscribe((item: any) => this.items = item);
  }

  GetUserById(id: any) : void
  {
    this.userService.GetUserById(id);
  }
}
