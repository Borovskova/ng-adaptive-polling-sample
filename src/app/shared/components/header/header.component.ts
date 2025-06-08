import { Component } from '@angular/core';

import { OktaAuthService } from '../../services/okta.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone: false
})
export class HeaderComponent {
    constructor(
        protected readonly oktaAuthenticationService: OktaAuthService,
    ) {}
}
