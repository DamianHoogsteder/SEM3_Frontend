import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './Item';
import { Market } from './market';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  private apiUrl = "https://localhost:44358/";

  private marketsUrl = this.apiUrl + "Market"
  private itemsUrl = this.apiUrl + "Market/:id/items"

  constructor(private http: HttpClient) { }

  getMarket() : Observable<Market[]>
  {
    return this.http.get<Market[]>(this.marketsUrl)
  }

  getMarketItems(id: number) : Observable<Market[]>
  {
    const url = `${this.marketsUrl}/${id}/items`;
    return this.http.get<Market[]>(url);
  }
}
