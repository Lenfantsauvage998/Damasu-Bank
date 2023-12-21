import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  constructor(private http:HttpClient ) {}


  registerUser(name : string , age : number , id: number,  phoneNumber:string, address:string , email: string, password:string): Observable<any>{  

    return this.http.post<any>("http://localhost:8080/users" , { name: name , age:age , id:id, phoneNumber:phoneNumber , address:address , email:email , password:password})
  }

  savetoken(token:any){
    localStorage.setItem("Beaver",token)
  }

}
