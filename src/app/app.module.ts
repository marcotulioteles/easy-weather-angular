import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ForecastCardboardComponent } from './components/forecast-cardboard/forecast-cardboard.component';
import { ForecastService } from './services/forecast.service';
import { HourlyForecastsComponent } from './components/hourly-forecasts/hourly-forecasts.component';
import { DailyForecastsComponent } from './components/daily-forecasts/daily-forecasts.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { LoadingCardboardComponent } from './components/loading-cardboard/loading-cardboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ForecastCardboardComponent,
    HourlyForecastsComponent,
    DailyForecastsComponent,
    EmptyStateComponent,
    LoadingCardboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    FormsModule
  ],
  providers: [ForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
