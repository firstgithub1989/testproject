import { Injectable , NgZone} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {Ticker} from '../app/common/Ticker';
import * as EventSource from 'eventsource';

@Injectable()
export class TickerService {

  ticker: Ticker[];

  constructor(public http: HttpClient, public ngZone: NgZone) {

  }


  getQuoteStream(fromSym: string): Observable<Ticker[]> {

    // this.http.get('http://localhost:8305/crypto/BTC')
    //   .map((response: Response) => {
    //     return response.json();
    //   })
    return Observable.create((observer) => {

      const url = 'http://localhost:8305/crypto/' + fromSym;

      const eventSource = new EventSource(url);
      eventSource.onmessage = (event) => {
        this.ticker = [];
        // console.debug('Received event: ', event);
        const json = JSON.parse(event.data);
        console.log(json);
        json.forEach(element => {
          console.log('Received event: ', element);
          this.ticker.push(new Ticker(element['currency'], element['rate'],  element['change']));
        });
        // this.ticker.push(new Ticker(json['currency'], json['rate']));
        this.ngZone.run(() => observer.next(this.ticker));
      };
      eventSource.onerror = (error) => {
        // readyState === 0 (closed) means the remote source closed the connection,
        // so we can safely treat it as a normal situation. Another way of detecting the end of the stream
        // is to insert a special element in the stream of events, which the client can identify as the last one.
        if (eventSource.readyState === 0) {
          console.log('The stream has been closed by the server.', error);
          eventSource.close();
          observer.complete();
        } else {
          observer.error('EventSource error: ' + error);
        }
      };
    });

  }
  // getPrice(currency:string) : Observable<Ticker> {
  //   return this.http.get<Ticker>('http://localhost:8305/crypto/BTC').pipe();
  // }


}
