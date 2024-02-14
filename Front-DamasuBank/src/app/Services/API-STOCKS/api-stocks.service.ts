import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiStockService {

  constructor(private http:HttpClient) { }

  sendMessageToSTOCKAPI(): Observable<any>{
    return this.http.get<any>("https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/1/day/2024-02-11/2024-02-12?adjusted=true&sort=asc&limit=120&apiKey=pYVn4djFp1_vadC4AAgLB7iyMne3tZMg")
  }

  sendMessageToSTOCKAPIETH(): Observable<any>{
    return this.http.get<any>("https://api.polygon.io/v2/aggs/ticker/X:ETHUSD/range/1/day/2024-02-11/2024-02-12?adjusted=true&sort=asc&limit=120&apiKey=pYVn4djFp1_vadC4AAgLB7iyMne3tZMg")
  }

  
}
