import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { MarketService } from '../MarketService/market.service';
import { SignalrService } from '../signalr.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../Services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  //Fields
  public currentItem: Item = {};
  public offeredItem: Item = {};
  public items: Item[] = [];
  public tradeOffer?: any;
  public closeResult = '';
  public userId: any;
  public user: any;
  public userDetails: any;

  constructor(
    private marketService : MarketService,
    private userService : UserService,
    private route: ActivatedRoute,
    public signalrService: SignalrService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.signalrService.startConnection()
    setTimeout(() => {
      this.signalrService.askServerListener();
    }, 2000); 
    this.getItemById()
    this.getUserInvetory()
  }

  
  getUserInvetory() : void
  {
    this.marketService.getItemsByUserId().subscribe(
      res =>{
        this.items = res;
      },
      err =>{
        console.log(err);
      },
    );

    this.userService.GetUserProfile().subscribe(
      res =>{
        this.userDetails = res;
      },
      err =>{
        console.log(err);
      },
    )
  }

  getItemById() : void
  {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.marketService.getItemById(id).subscribe(items => {this.currentItem = items; this.GetUserById(this.currentItem.userId)}); 
  }

  GetUserById(id: any) : void
  {
   this.userService.GetUserById(id).subscribe((user: any) => this.user = user);
  }

  sendTradeOffer(name: string)
  {
    this.signalrService.startConnection()
      setTimeout(() => {
        this.signalrService.askServerListener();
        this.signalrService.askServer(name, null);
      }, 2000); 
  }

  offerTradeItem(username: string, item: Item) 
  {
    this.offeredItem = item;
    this.signalrService.startConnection()
    
      setTimeout(() => {
        this.signalrService.askServerListener();
        this.signalrService.askServer(username, item.name);
      }, 2000); 
  }


  //Modal controls
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
