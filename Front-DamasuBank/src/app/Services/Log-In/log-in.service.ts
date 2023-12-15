import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { arrayUsers } from '../../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private httpClientMine: HttpClient) { }

  obtenerPersonajes() : Observable<any> {
    return this.httpClientMine.get<any>("http://localhost:8080/users")
  }
}
