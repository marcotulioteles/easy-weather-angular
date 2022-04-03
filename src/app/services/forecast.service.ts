import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { buildForecastData } from 'src/utils';
import { ForecastData, LocationData } from 'src/types/location-data';
import { Subject } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private urlGetForecast: string = 'http://api.openweathermap.org/data/2.5';
  private urlGetLocationCoordinates: string = `http://api.openweathermap.org/geo/1.0`;

  private forecastData = new Subject<ForecastData>();
  private locationIsEmpty = new Subject<boolean>();
  private locationData = new Subject<LocationData>();

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) { }

  fetchForecast(location: string) {
    this.loadingService.requestStarted();
    this.http.get<LocationData[]>(`${this.urlGetLocationCoordinates}/direct?q=${location}&appid=${environment.openWeatherAppId}`)
      .subscribe({
        next: (data:LocationData[]) => {
          data.length === 0 ? this.locationIsEmpty.next(true) : this.locationIsEmpty.next(false);

          this.http.get<any>(`${this.urlGetForecast}/onecall?lat=${data[0].lat}&lon=${data[0].lon}&exclude=minutely,alerts&appid=${environment.openWeatherAppId}`)
          .subscribe({
            next: data => this.forecastData.next(buildForecastData(data)),
            error: e => {
              console.error(e);
              this.loadingService.resetLoading();
            },
            complete: () => this.loadingService.requestEnded()
          });
          this.locationData.next(data[0]);
        },
        error: e => {
          console.error(e);
          this.loadingService.resetLoading();
        },
        complete: () => {
          this.loadingService.requestEnded();
        }
      });
  }

  getForecastData() {
    return this.forecastData.asObservable();
  }

  getLocationData() {
    return this.locationData.asObservable();
  }

  getLocationIsEmpty() {
    return this.locationIsEmpty.asObservable();
  }
}
