import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { KoinWallets } from '../common/KoinWallets';
import { InrDetails } from '../common/INRDetails';
import { TranHistory } from '../common/TranHistory';
import { TradeHistory } from '../common/tradeHistory';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class BalancesService {

    constructor(public http: HttpClient) {

    }

    getCoinWallet(userName: string): Observable<KoinWallets[]> {
        return this.http.get<KoinWallets[]>('../assets/data.json');
    }


    getINRWallet(userName: string): InrDetails {
        return null;
    }

    getTransactionHistory(username: string): TranHistory {
        return null;
    }

    getTradeHistory(username: string): TradeHistory {
        return null;
    }

}
