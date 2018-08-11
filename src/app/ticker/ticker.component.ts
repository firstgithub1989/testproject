import { Component, OnInit } from '@angular/core';
import { TickerService } from './../ticker.service';
import { Ticker } from '../common/Ticker';
import { Subscription } from 'rxjs/Subscription';
import { share } from 'rxjs/operators';
declare let d3: any;

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css']
})
export class TickerComponent implements OnInit {

  ticker: Array<Ticker>;
  curOptions: {};
  options: {};
  data: {};
  option: string;
  name: string;
  rate: Rate;
  tickerS: Ticker;
  httpdata;
  subscription: Subscription;
  constructor(private tickerService: TickerService) {
    console.log('Init Ticker Component Contructor');
  }

  ngOnInit() {
    this.curOptions = ['BTC', 'XRP', 'LTC', 'INR'];
    this.option = 'LTC';
    console.log('Init Ticker Component Init');
    this.name = 'CryptoTrade';
    this.doSomething();

  }

  onOptionSelect(event) {
    this.option = event.target.value;
    this.subscription.unsubscribe();
    this.doSomething();
  }

  doSomething() {
    this.subscription = this.tickerService.getQuoteStream(this.option).subscribe(
      resultArray => this.ticker = resultArray);
  }
}



interface Rate {
  rate: string;
}
