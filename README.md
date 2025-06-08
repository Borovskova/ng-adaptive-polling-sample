# ng-okta-auth-sample

A **basic sample project** demonstrating Okta authentication integration with Angular (version 20+) using the `@okta/okta-angular` library.

It covers fundamental flows like login, logout, protecting routes, retrieving user information, and **making authenticated API calls**.

## Features

*   Okta login (Redirect flow)
*   Okta logout
*   Protecting Angular routes using `AuthGuard`
*   Retrieving authenticated user information
*   Making authenticated API calls with the access token via HTTP Interceptor

## Prerequisites

*   Node.js (LTS version recommended)
*   Angular CLI (install globally: `npm install -g @angular/cli`)
*   An Okta Developer Account (sign up at [https://developer.okta.com/signup](https://developer.okta.com/signup))
*   An Okta **Web Application** configured:
    *   Login redirect URI: `http://localhost:4200/login/callback`
    *   Logout redirect URI: `http://localhost:4200`
    *   Grant Type: Authorization Code (PKCE)

## Setup

1.  Clone the repository:
    ```bash
    git clone https://github.com/Borovskova/ng-okta-auth-sample.git
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

## Running the Project

Run the Angular development server:

```bash
ng serve -o

How it Works (Key Concepts)

@okta/okta-angular: Provides the core services and components for Angular integration.

OktaAuthStateService: An observable service that provides real-time information about the user's authentication state (e.g., isAuthenticated$, authState$).
