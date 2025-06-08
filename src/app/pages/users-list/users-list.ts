import { Component } from '@angular/core';

import { OktaAuthService } from '../../shared/services/okta.service';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss',
  standalone: false
})
export class UsersList {


  constructor(protected httpService:HttpService, private oktaAuthenticationService: OktaAuthService){
    this.oktaAuthenticationService.setAuthState();
  }
}
