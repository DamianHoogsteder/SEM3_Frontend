import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Market } from '../market';
import {catchError, map, tap} from 'rxjs/operators'
import { Item } from '../item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  private apiUrl = environment.API_URL;
  private marketsUrl = this.apiUrl + "Markets"
  private itemUrl = this.apiUrl + "Markets/:id"
  private items = this.apiUrl + "items"
  private itemsByUser = this.apiUrl + "items/user"
  private itemById = this.apiUrl + "items"
  private addItem = this.apiUrl + "items/add"
  private buyItem = this.apiUrl + "items/buy"
  private putItemUpForSaleURL = this.apiUrl + "items/sell"

  constructor(private http: HttpClient) { }

  getMarket() : Observable<Market[]>
  {
    return this.http.get<Market[]>(this.marketsUrl)
  }

  getMarketItems(id: number) : Observable<Market>
  {
    return this.http.get<Market>(`${this.marketsUrl}/${id}/items`).pipe(tap(_ => console.log(_)))
  }

  getItems() : Observable<Item[]>
  {
    return this.http.get<Item[]>(this.items)
  }

  getItemsUpForSale() : Observable<Item[]>
  {
    return this.http.get<Item[]>(this.buyItem)
  }

  getItemsByUserId() : Observable<Item[]>
  {
    var tokenheader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return this.http.get<Item[]>(this.itemsByUser, {headers : tokenheader});
  }

  getItemById(id: number) : Observable<Item>
  {
    return this.http.get<Item>(`${this.itemById}/${id}/`)
  }

  public addItems(item: Item) : void
  {
    var tokenheader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    this.http.post(this.addItem, item, {headers : tokenheader}).toPromise().then(data =>
      {
        console.log(data);
      })
  }

  public putUpForSale(item: Item)
  {
    item.isUpForSale = true;
    console.log(item);
    this.http.patch(this.putItemUpForSaleURL, item).toPromise().then(data =>
      {
        console.log(data);
      })
  }
}
