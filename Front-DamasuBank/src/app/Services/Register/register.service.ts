import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  constructor(private http:HttpClient ) {}

  headers:HttpHeaders = new HttpHeaders({
    "Content-Type":"application/json"
  })

  savetoken(token:any){
    localStorage.setItem("Beaver",token)
  }

  registerUser(name : string , age : number , id: number,  phoneNumber:string, address:string , email: string, password:string): Observable<any>{  
    return this.http.post<any>("http://"+ environment.IP_PUBLIC +":8080/users" , { name: name , age:age , id:id, phoneNumber:phoneNumber , address:address , email:email , password:password})
  }

  registerUserDataBase(id: number): Observable<any>{  
    return this.http.post<any>("http://"+ environment.IP_PUBLIC +":8080/balance" , {id:id})
  }

  registerUserRecords(id: number): Observable<any>{  
    return this.http.post<any>("http://"+ environment.IP_PUBLIC +":8080/records" , {id:id})
  }

  registerUserCDT( name:string ,id: number, BeginDate: string, PeriodMonths: string, investedMoney:number, ): Observable<any>{ 
    let headers = this.headers;
    const token:string = localStorage.getItem("Beaver") as string
    headers = headers.append("Authorization", token) 
    return this.http.post<any>("http://"+ environment.IP_PUBLIC +":8080/cdt" ,{name:name,id:id,BeginDate:BeginDate,PeriodMonths:PeriodMonths,investedMoney:investedMoney}, {headers})
  }
  
}
