import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { AuthState } from '@okta/okta-auth-js';

import { OktaAuthService } from '../../shared/services/okta.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    standalone: false
})
export class LoginComponent implements OnInit, OnDestroy {
    private sub$: Subscription = new Subscription();

    constructor(
        protected oktaAuthenticationService: OktaAuthService,
        private readonly router: Router,
    ) {
    }

    ngOnInit(): void {
        this.checkLogin();
    }

    protected async signIn(): Promise<void> {
        await this.oktaAuthenticationService.signIn();
    }

    private checkLogin(): void {
        this.sub$.add(
            this.oktaAuthenticationService.authState.subscribe((authState: AuthState) => {
                if (authState?.isAuthenticated === true && this.router.url.indexOf('login') !== -1) {
                    this.router.navigate(['/users-list']);
                }
            }),
        );
    }

    ngOnDestroy(): void {
        this.sub$.unsubscribe();
    }
}
