import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';

@Injectable()
export class AuthService {


    isLoggedIn: boolean;

    constructor(public http: Http) {

    }

    login(userName: string, password: string): string {
        console.log(userName + ':' + password);
        const headers = new Headers();
        let user = null;
        headers.append('Authorization', 'Basic' + btoa(userName + ':' + password));
        console.log(headers.toJSON());

        const options = new RequestOptions();
        options.headers = headers;
        options.withCredentials = true;
        this.http.get('http://localhost:8304/login', options)
        .map((response: Response) => {
            user = response;
            console.log(user);
            }
        )
        .subscribe();

        this.isLoggedIn = (user != null);

        return user;
    }

}
