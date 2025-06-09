import { Component } from '@angular/core';

import { OktaAuthService } from '../../shared/services/okta.service';
import { HttpService } from '../../shared/services/http.service';
import { Observable } from 'rxjs';
import { IUser } from '../../shared/interfaces/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss',
  standalone: false,
})
export class UsersList {
  public usersList$!: Observable<Array<IUser>>;

  constructor(
    protected httpService: HttpService,
    private oktaAuthenticationService: OktaAuthService,
  ) {
    this.oktaAuthenticationService.setAuthState();
    this.usersList$ = this.httpService.getUsersData();
  }
}
