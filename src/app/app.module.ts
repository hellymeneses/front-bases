import { CounterComponent } from './counter/counter.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './heroes/list/list.component';
import { HeroComponent } from './heroes/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ListComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
