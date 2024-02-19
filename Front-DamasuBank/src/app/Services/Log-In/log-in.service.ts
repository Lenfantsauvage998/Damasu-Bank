import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})


export class LogInService {

  constructor(private httpClientMine: HttpClient) { }

  newuserbox : any = [] 

  headers:HttpHeaders = new HttpHeaders({
    "Content-Type":"application/json"
  })

  obtenerPersonajes() : Observable<any> {
    return this.httpClientMine.get<any>("http://"+ environment.IP_PUBLIC +":8080/users")
  }


  getinfo():Observable<any>{
    let headers = this.headers;
    const token:string = localStorage.getItem("Beaver") as string
    headers = headers.append("Authorization", token)
    return this.httpClientMine.get<any>("http://"+ environment.IP_PUBLIC +":8080/users/account", { headers })
  }

  getinfoDataBase():Observable<any>{
    let headers = this.headers;
    const token:string = localStorage.getItem("Beaver") as string
    headers = headers.append("Authorization", token)
    return this.httpClientMine.get<any>("http://"+ environment.IP_PUBLIC +":8080/balance/account", { headers })
  }

  getinfoRecords():Observable<any>{
    let headers = this.headers;
    const token:string = localStorage.getItem("Beaver") as string
    headers = headers.append("Authorization", token)
    return this.httpClientMine.get<any>("http://"+ environment.IP_PUBLIC +":8080/records/account", { headers })
  }

  getinfoCDT():Observable<any>{
    let headers = this.headers;
    const token:string = localStorage.getItem("Beaver") as string
    headers = headers.append("Authorization", token)
    return this.httpClientMine.get<any>("http://"+ environment.IP_PUBLIC +":8080/cdt/account", { headers })
  }

  savetoken(token:any){
    localStorage.setItem("Beaver",token)
  }

  login(email : string, password:string): Observable<any>{
    return this.httpClientMine.post<any>("http://"+ environment.IP_PUBLIC +":8080/users/login", {email : email, password : password})
  }

}
