import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Market } from './market';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  private apiUrl = "https://localhost:44358/";

  private marketsUrl = this.apiUrl + "Market";
  private itemUrl = this.apiUrl + "Market/:id"

  constructor(private http: HttpClient) { }

  getMarket() : Observable<Market[]>
  {
    return this.http.get<Market[]>(this.marketsUrl)
  }

  getMarketItems(id: number) : Observable<Market>
  {
    console.log(id)
    return this.http.get<Market>(`${this.marketsUrl}/${id}/items`)
  }
}
