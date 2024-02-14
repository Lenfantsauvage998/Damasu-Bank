import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  sendMessageToChatGpt(message : string): Observable<any>{
    return this.http.post<any>("http://3.140.1.8:8080/api", {message: message})
  }

  receiveImageFromChatGpt(imgToPrint : string): Observable<any>{
    return this.http.post<any>("http://3.140.1.8:8080/api/dalle3", {imgToPrint: imgToPrint})
  }
}
