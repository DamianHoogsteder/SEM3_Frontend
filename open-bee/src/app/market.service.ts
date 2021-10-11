import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Market } from './market';
import {catchError, map, tap} from 'rxjs/operators'
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  private apiUrl = "https://localhost:44358/";

  private marketsUrl = this.apiUrl + "Market"
  private itemUrl = this.apiUrl + "Market/:id"
  private items = this.apiUrl + "items"

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
}
