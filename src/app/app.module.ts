import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EnemigosComponent } from './enemigos/enemigos.component';
import { SplashComponent } from './splash/splash.component';
import { GuiaComponent } from './guia/guia.component';
import { DescargasComponent } from './descargas/descargas.component';
import { FondosComponent } from './fondos/fondos.component';
import { SaberMasComponent } from './saber-mas/saber-mas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EnemigosComponent,
    SplashComponent,
    GuiaComponent,
    DescargasComponent,
    FondosComponent,
    SaberMasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
