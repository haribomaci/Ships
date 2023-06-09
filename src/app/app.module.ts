 // 
// * File: app.module.ts
// * Author: Tóth Júlia
// * Copyright: 2023,
// * Group: Szoft II N
// * Date: 2023-05-02
// * Github: https://github.com/haribomaci
// * Licenc: GNU GPL
//  

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipComponent } from './ship/ship.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './shared/api.service';

@NgModule({
  declarations: [
    AppComponent,
    ShipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
