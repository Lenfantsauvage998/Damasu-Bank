import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http:HttpClient) { }

  headers:HttpHeaders = new HttpHeaders({
    "Content-Type":"application/json"
  })

  sendMoney(id : number, amount: number): Observable<any>{
    let headers = this.headers;
    const token:string = localStorage.getItem("Beaver") as string
    headers = headers.append("Authorization", token)
    return this.http.put<any>("http://localhost:8080/balance", {id : id, request: amount }, {headers})
  }

  sendMoneyPSE(id : number, amount: number): Observable<any>{
    let headers = this.headers;
    const token:string = localStorage.getItem("Beaver") as string
    headers = headers.append("Authorization", token)
    return this.http.put<any>("http://localhost:8080/cdt/PSE", {id : id, request: amount }, {headers})
  }

}
