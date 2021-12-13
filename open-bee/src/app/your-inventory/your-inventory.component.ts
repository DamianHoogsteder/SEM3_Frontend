import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item';
import { Market } from '../market';
import { MarketService } from '../MarketService/market.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-your-inventory',
  templateUrl: './your-inventory.component.html',
  styleUrls: ['./your-inventory.component.css']
})

export class YourInventoryComponent implements OnInit {
  @Input() market?: Market;
  public items: Item[] = [];
  public markets: Market[] = [];
  public closeResult = '';
  public newItem: Item = {};
  private userId: any;

  constructor(
    private marketService : MarketService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.getMarkets()
    this.marketService.getItemsByUserId().subscribe(
      res =>{
        this.items = res;
        console.log(this.userId)
      },
      err =>{
        console.log(err);
      },
    );
  }

  getMarkets() : void
  {
    //const id = 1;
    //this.marketService.getMarketItems(id).subscribe((markets: any) => this.markets = markets);
  }


  addItem(item: Item) : void
  {
    console.log(item)
    this.marketService.addItems(item);
  }

  openModal(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
