import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'https://dev-oyjvf3d6plbg7wng.us.auth0.com',
            redirectUrl: window.location.origin,
            clientId: 'O1LRJ0TGQre5ZTBBlfO5IdfPVaVKM71n',
            scope: 'openid profile offline_access',
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
        }
    })],
    exports: [AuthModule],
})
export class AuthConfigModule { }
