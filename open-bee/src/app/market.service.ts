import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Market } from 'src/market';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  private marketsUrl = "https://localhost:44358/api/Market";

  constructor(private http: HttpClient) { }

  getMarket() : Observable<Market[]>
  {
    return this.http.get<Market[]>(this.marketsUrl)
  }
}
