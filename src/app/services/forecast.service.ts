import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private url: string = 'http://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) { }

  getForecast(lat: number, lon: number) {
    return this.http.get<any>(`${this.url}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${environment.openWeatherAppId}`);
  }
}
