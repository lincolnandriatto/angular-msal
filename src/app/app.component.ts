import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// Ac..11

export class AppComponent implements OnInit {
  title = 'test-msal-angular';

 loginRequest = { 
    scopes: ["User.Read"], 
};

  constructor(private msalService: MsalService) { 
  }
  async ngOnInit(): Promise<void> {

    await  this.msalService.instance.initialize(); 
    this.msalService.instance.handleRedirectPromise().then((response) => {
      if (response) {
        console.log('Login response from redirect:', response);
        this.msalService.instance.setActiveAccount(response.account);
      }

    }).catch((error) => {
        console.error('Error handling redirect promise:', error);
    });

  }

  isLoggedIn(): boolean {
    return this.msalService.instance.getActiveAccount() != null;
  }

  async login() {
    this.msalService.loginRedirect();
  }

  logout() {
    this.msalService.logout();
  }

}