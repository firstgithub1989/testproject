import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserDetails } from '../common/UserDetails';
import { Observable } from 'rxjs/Observable';
import { KoinWallets } from '../common/KoinWallets';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService {

  constructor(public http: HttpClient) { }

  getUserDetails(user: String): Observable<UserDetails> {
    return this.http.get<UserDetails>('../assets/userDetails.json');
  }

}
