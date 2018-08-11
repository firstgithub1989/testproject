import { Component, OnInit } from '@angular/core';
import { InrDetails } from '../../common/INRDetails';
import { InrwalletService } from '../services/inrwallet.service';

@Component({
  selector: 'app-inrwallet',
  templateUrl: './inrwallet.component.html',
  styleUrls: ['./../balances.component.css']
})
export class InrwalletComponent implements OnInit {

  inrDetails: InrDetails[];

  constructor(private inrWalletService: InrwalletService) { }

  ngOnInit() {
    this.inrDetails = [];
    this.getInrWallet();
  }

  getInrWallet() {
    this.inrWalletService.getINRWallet("").subscribe(res =>
      
      {console.log(res);
        this.inrDetails = res;}
      // this.koinWallets.push(new KoinWallets(res["coinName"],
      //   res["total"], res["inOrders"], res["available"]
    );;
  }

}
