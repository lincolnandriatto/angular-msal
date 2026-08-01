import { MSAL_INSTANCE, MsalModule, MsalService } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: 'd2c00c02-04bf-4082-b214-2a43d3075ecc', 
      authority:  'https://login.microsoftonline.com/4176967d-94cb-402b-9b66-f11178c22d72',
      redirectUri: 'http://localhost:3000'
    }
  })
} 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule
  ],
  providers: [
    {
    provide: MSAL_INSTANCE,
    useFactory: MSALInstanceFactory,
  },
  MsalService 
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
