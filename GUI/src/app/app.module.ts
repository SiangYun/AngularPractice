import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonBarComponent } from './button-bar/button-bar.component';

import { HttpClientModule } from '@angular/common/http';
import { ButtonBarService } from '../app/service/button-bar.service';

@NgModule({
  declarations: [
    AppComponent,
    ButtonBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ButtonBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
