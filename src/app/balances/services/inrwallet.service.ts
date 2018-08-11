import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { InrDetails } from '../../common/INRDetails';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InrwalletService {

  constructor(private http: HttpClient) { }

  public getINRWallet(userName: string): Observable<InrDetails[]> {
    return this.http.get<InrDetails[]>('../assets/inrDetails.json');
  }


}
