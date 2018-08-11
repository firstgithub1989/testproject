import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BuySellDetials } from '../common/BuySellDetails';

@Injectable()
export class BuySellServicesService {

  constructor(public http: HttpClient) {

  }

  buyOrder(buyDetails: BuySellDetials) {
        
  }

  sellOrder(sellDetails: BuySellDetials) {

  }

  getInrAmount(userName: string): number {
      return 1;
  }

  getCoinAmount(userName: string, coinName: string): number {
      return 1;
  }

}
