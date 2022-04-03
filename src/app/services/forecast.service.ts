import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { buildForecastData } from 'src/utils';
import { ForecastData, LocationData } from 'src/types/location-data';
import { Subject } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private urlGetForecast: string = 'https://api.openweathermap.org/data/2.5';
  private urlGetLocationCoordinates: string = `https://api.openweathermap.org/geo/1.0`;

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
        next: (locationDataFetched: LocationData[]) => {
          locationDataFetched.length === 0 ? this.locationIsEmpty.next(true) : this.locationIsEmpty.next(false);

          if (locationDataFetched.length > 0) {
          this.http.get<any>(`${this.urlGetForecast}/onecall?lat=${locationDataFetched[0].lat}&lon=${locationDataFetched[0].lon}&exclude=minutely,alerts&appid=${environment.openWeatherAppId}`)
            .subscribe({
              next: forecastDataFetched => this.forecastData.next(buildForecastData(forecastDataFetched)),
              error: e => {
                console.error(e);
                this.loadingService.resetLoading();
              },
              complete: () => this.loadingService.requestEnded()
            });
          this.locationData.next(locationDataFetched[0]);
          }
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
