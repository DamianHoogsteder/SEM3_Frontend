import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { MarketService } from '../MarketService/market.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item?: Item;

  constructor(
    private marketService : MarketService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getItemById()
  }

  
  getItemById() : void
  {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.marketService.getItemById(id).subscribe(items => this.item = items);
  }
}
