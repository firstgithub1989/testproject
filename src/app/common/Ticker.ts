export class Ticker {
    currency:string;
    rate:number;
    change: number;

    constructor(currency : string, rate : number, change: number) {
        this.currency = currency;
        this.rate = rate;
        this.change = change;
    }
}
