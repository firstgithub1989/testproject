import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { UserDetails } from '../common/UserDetails';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetails: UserDetails;

  constructor(public profileService: ProfileService) {
    this.userDetails = new UserDetails();
   }

  ngOnInit() {
    this.profileService.getUserDetails('').subscribe(u => this.userDetails = u);
  }
}
