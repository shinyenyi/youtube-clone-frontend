import { Component } from '@angular/core';
import { OidcSecurityService, LoginResponse } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'youtube-clone-frontend';

  constructor(private oidcSecurityService: OidcSecurityService) { }

  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe((loginResponse: LoginResponse) => {
      const { isAuthenticated } = loginResponse;
      console.log('app is authenticated', isAuthenticated);
      /*...*/
    });
  }
}
