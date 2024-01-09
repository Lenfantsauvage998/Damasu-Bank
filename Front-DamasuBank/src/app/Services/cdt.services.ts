import { Injectable } from '@angular/core';
import { UserInfo } from '../models/personalInfo.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cdt } from '../models/cdt.model';

@Injectable({
  providedIn: 'root',
})
export class CdtService {
  estado = new BehaviorSubject<UserInfo>({});
  constructor(private http: HttpClient) {}
  addPersonaInfo(userinfo: UserInfo) {
    this.estado.next(userinfo);
  }
  addCdtInfo(cdt:Cdt): Observable<Cdt> {
    return this.http.post<Cdt>(
      'http://localhost:8080/cdtx/createCdt',
      cdt
    );
  }
}
