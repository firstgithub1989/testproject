import { Component, OnInit } from '@angular/core';
import { BalancesService } from './balances.service';
import { TranHistory } from '../common/TranHistory';
import { KoinWallets } from '../common/KoinWallets';
import { InrDetails } from '../common/INRDetails';
import { TradeHistory } from '../common/tradeHistory';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.css']
})
export class BalancesComponent implements OnInit {

  tranHistory: TranHistory[];
  koinWallets: KoinWallets[];
  inrDetails: InrDetails[];
  tradeHistory: TradeHistory[];

  constructor(private balancesService: BalancesService) {

  }

  userName: string;

  ngOnInit() {
    this.koinWallets = [];
    this.getCoinWallet();
  }

  getCoinWallet() {

    this.balancesService.getCoinWallet(this.userName).subscribe(res => {
        console.log(res); this.koinWallets = res;
      }
      // this.koinWallets.push(new KoinWallets(res["coinName"],
      //   res["total"], res["inOrders"], res["available"]
    );
  }

  getInrWallet() {
    this.balancesService.getINRWallet(this.userName);
  }

  getTranHistory() {
    this.balancesService.getTransactionHistory(this.userName);
  }

  getTradeHistory() {
    this.balancesService.getTradeHistory(this.userName);
  }
}
