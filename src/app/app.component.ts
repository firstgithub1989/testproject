import { Component, ViewChild, OnInit, AfterViewInit, AfterContentInit, ContentChild } from '@angular/core';
import { AuthenticationComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'Trade here';

  auth: boolean;

  constructor(public authGuard: AuthGuard) {
    this.auth = authGuard.canActivate(null, null);
  }
}

