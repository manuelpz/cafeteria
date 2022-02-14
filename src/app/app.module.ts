import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { DesayunosComponent } from './desayunos/desayunos.component';
import { PulguitasComponent } from './pulguitas/pulguitas.component';
import { TapasComponent } from './tapas/tapas.component';
import { CafesComponent } from './cafes/cafes.component';
import { InfusionesComponent } from './infusiones/infusiones.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    DesayunosComponent,
    PulguitasComponent,
    TapasComponent,
    CafesComponent,
    InfusionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
