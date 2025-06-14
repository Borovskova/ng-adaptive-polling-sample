import { Component } from '@angular/core';

import { Observable, take } from 'rxjs';

import { OktaAuthService } from '../../shared/services/okta.service';
import { HttpService } from '../../shared/services/http.service';
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

  protected generatePurchasesHistory(userId: string): void {
    this.httpService
      .generatePurchasesHistory(userId)
      .pipe(take(1))
      .subscribe({
        next: (res: Array<{ [key: string]: string }>) => {
          console.log(res); //here is purchases history
        },
        error: (err: any) => console.warn(err),
      });
  }
}
