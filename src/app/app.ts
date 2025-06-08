import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderModule } from './shared/components/header/header.module';
import { OktaAuthService } from './shared/services/okta.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HeaderModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 
  constructor(private oktaAuthenticationService:OktaAuthService){
     this.oktaAuthenticationService.setAuthState();
     console.log('auth state=', this.oktaAuthenticationService.getAuthState())
  }
}
