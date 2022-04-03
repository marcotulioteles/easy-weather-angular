import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { buildForecastData } from 'src/utils';
import { ForecastData, LocationData } from 'src/types/location-data';
import { LocationService } from './location.service';
import { Subject } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private url: string = 'http://api.openweathermap.org/data/2.5';
  private forecastData = new Subject<ForecastData>();

  constructor(
    private http: HttpClient,
    private locationService: LocationService,
    private loadingService: LoadingService
  ) { }

  fetchForecast(location: string) {
    this.loadingService.requestStarted();
    this.locationService.getLocationCoordinates(location)
      .subscribe({
        next: (data:LocationData[]) => {
          if (data[0]) {
            this.http.get<any>(`${this.url}/onecall?lat=${data[0].lat}&lon=${data[0].lon}&exclude=minutely,alerts&appid=${environment.openWeatherAppId}`)
            .subscribe({
              next: data => this.forecastData.next(buildForecastData(data)),
              error: e => {
                console.error(e);
                this.loadingService.resetLoading();
                this.forecastData.next({} as ForecastData)
              },
              complete: () => this.loadingService.requestEnded()
            });
            this.locationService.locationData.next(data[0]);
          } else {
            this.forecastData.next(buildForecastData(undefined));
          }
        },
        error: e => {
          console.error(e);
          this.loadingService.resetLoading();
          this.forecastData.next(buildForecastData(undefined));
        },
        complete: () => {
          this.loadingService.requestEnded();
        }
      });
  }

  getForecastData() {
    return this.forecastData.asObservable();
  }
}
