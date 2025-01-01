import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IPublicClientApplication, PublicClientApplication} from '@azure/msal-browser'


export function MSALFactory():IPublicClientApplication {
    return new PublicClientApplication({
       auth:{

        clientId:'ca8e8e55-b28f-495d-b15d-df4e40406f72',
        redirectUri:'http://localhost:4200/'

       }
    });
  }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
