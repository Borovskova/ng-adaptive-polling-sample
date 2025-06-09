import { CommonModule } from '@angular/common';
import { AfterContentInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderModule } from './shared/components/header/header.module';
import { OktaAuthService } from './shared/services/okta.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HeaderModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterContentInit {
  constructor(private oktaAuthenticationService: OktaAuthService) {}

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.oktaAuthenticationService.setAuthState();
      console.log('Okta ID token:', this.oktaAuthenticationService.idToken);
    }, 2000);
  }
}
