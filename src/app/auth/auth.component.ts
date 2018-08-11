import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthenticationComponent implements OnInit {

  user: string;

  @Input() auth: string;
  model: Signup = new Signup();

  logIn: Signup = new Signup();

  constructor(private authService: AuthService) {
    console.log('AuthComponent Contructor');
  }

  ngOnInit() {
  }

  login() {
     this.user  = this.authService.login(this.model.firstName, this.model.password);
  }
}


class Signup {
  constructor(public firstName: string = '',
              public lastName: string = '',
              public email: string = '',
              public password: string = '',
              public language: string = '') {
  }
}
