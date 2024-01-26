/// <reference types="@angular/localize" />



//component
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { environment } from './environments/environments';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RotasSecundariasModule } from './app/pages/rotas-secundarias.module';

if (environment.production) {
  enableProdMode();
}


  bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(AppRoutingModule),
      importProvidersFrom(HttpClientModule),
      importProvidersFrom(RotasSecundariasModule)
    ]
  }).catch(err => console.error(err));
