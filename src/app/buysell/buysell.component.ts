import { Component, OnInit } from '@angular/core';
import { BuySellDetials } from '../common/BuySellDetails';
import { BuySellServicesService } from './buy-sell-services.service';

@Component({
  selector: 'app-buysell',
  templateUrl: './buysell.component.html',
  styleUrls: ['./buysell.component.css']
})
export class BuysellComponent implements OnInit {

  coinName: string;
  inrValue: number;
  coinAvailable: number;
  buyselldetail: BuySellDetials;

  constructor(private buySellService: BuySellServicesService) {

  }

  ngOnInit() {
    this.inrValue = 1.0;
  }


  buy() {
    this.buySellService.buyOrder(this.buyselldetail);
  }

  sell() {
    this.buySellService.sellOrder(this.buyselldetail);
  }

  getINRAmount() {
    this.inrValue = this.buySellService.getInrAmount('');
  }


  getCoinAvailable() {
    this.coinAvailable = this.buySellService.getCoinAmount('', '');
  }

}
