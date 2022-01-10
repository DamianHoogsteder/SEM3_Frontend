import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { MarketService } from '../MarketService/market.service';

@Component({
  selector: 'app-up-for-sale-page',
  templateUrl: './up-for-sale-page.component.html',
  styleUrls: ['./up-for-sale-page.component.css']
})
export class UpForSalePageComponent implements OnInit {

  items: Item[] = [];
  
  constructor(
    private marketService : MarketService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getItems()
  }

  getItems() : void
  {
    this.marketService.getItemsUpForSale().subscribe((item: any) => this.items = item);
  }
}
