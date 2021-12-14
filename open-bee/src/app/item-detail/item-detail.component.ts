import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { MarketService } from '../MarketService/market.service';
import { SignalrService } from '../signalr.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item?: Item;
  items: Item[] = [];
  tradeOffer?: String;
  closeResult = '';
  userId: any;

  constructor(
    private marketService : MarketService,
    private route: ActivatedRoute,
    private signalrService: SignalrService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getItemById()
    this.getUserInvetory()
    this.signalrService.startConnection()
  }

  
  getUserInvetory() : void
  {
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

  getItemById() : void
  {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.marketService.getItemById(id).subscribe(items => this.item = items);
  }

  sendTradeOffer(groupName: string)
  {
    this.signalrService.joinGroup(groupName);
      setTimeout(() => {
        this.signalrService.askServerListener();
        this.signalrService.askServer();
      }, 2000); 
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
