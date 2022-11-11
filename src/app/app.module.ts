import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EroiComponent } from './eroi/eroi.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, EroiComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
