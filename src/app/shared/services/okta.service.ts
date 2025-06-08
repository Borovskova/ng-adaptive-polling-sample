import { Inject, Injectable } from '@angular/core';

import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { IDToken, OktaAuth } from '@okta/okta-auth-js';
import { AuthState } from '@okta/okta-auth-js';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class OktaAuthService {
    public idToken: IDToken | undefined = undefined;
    public isAuthenticated$ = new BehaviorSubject<boolean>(false);

    public get authState(): Observable<AuthState> {
        return this.oktaStateService.authState$;
    }

    constructor(
        private readonly oktaStateService: OktaAuthStateService,
        @Inject(OKTA_AUTH) private oktaAuth: OktaAuth,
    ) {}

    public async signIn(): Promise<void> {
        await this.oktaAuth.signInWithRedirect();
    }

       public async signOut() {
        await this.oktaAuth.signOut();
    }

        public setAuthState(): void {
        const authState = this.getAuthState();
        const isAuthenticated = authState?.isAuthenticated
        this.isAuthenticated$.next(isAuthenticated || false)
        this.idToken = authState?.idToken
    }


     public getAuthState() {
        return this.oktaAuth.authStateManager.getAuthState();
    }
}
