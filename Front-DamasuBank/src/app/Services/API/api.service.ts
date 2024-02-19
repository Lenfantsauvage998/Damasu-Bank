import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  sendMessageToChatGpt(message : string): Observable<any>{
    return this.http.post<any>("http://"+ environment.IP_PUBLIC +":8080/api", {message: message})
  }

  receiveImageFromChatGpt(imgToPrint : string): Observable<any>{
    return this.http.post<any>("http://"+ environment.IP_PUBLIC +":8080/api/dalle3", {imgToPrint: imgToPrint})
  }
}
