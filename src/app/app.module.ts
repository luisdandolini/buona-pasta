import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { InformationComponent } from './components/information/information.component';
import { DetailsComponent } from './components/details/details.component';
import { HotSalesComponent } from './components/hot-sales/hot-sales.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    InformationComponent,
    DetailsComponent,
    HotSalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
