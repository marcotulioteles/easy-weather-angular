import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { formatForecastData } from 'src/utils';
import { ForecastData, LocationData } from 'src/types/location-data';
import { LocationService } from './location.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private url: string = 'http://api.openweathermap.org/data/2.5';
  private forecastData = new Subject<ForecastData>();

  constructor(private http: HttpClient, private locationService: LocationService) { }

  fetchForecast(location: string) {
    this.locationService.getLocationCoordinates(location)
      .subscribe((data:LocationData[]) => this.http.get<any>(`${this.url}/onecall?lat=${data[0].lat}&lon=${data[0].lon}&exclude=minutely,alerts&appid=${environment.openWeatherAppId}`)
        .subscribe(data => this.forecastData.next(formatForecastData(data))
        ));
  }

  getForecastData() {
    return this.forecastData.asObservable();
  }
}
