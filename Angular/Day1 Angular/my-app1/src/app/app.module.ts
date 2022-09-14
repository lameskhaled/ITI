import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { firstComponent } from './Component/First/first.component';
import { SecoundComponent } from './Component/secound/secound.component';

@NgModule({
  declarations: [
    AppComponent,
    firstComponent,
    SecoundComponent,
    /* kol l component*/
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
