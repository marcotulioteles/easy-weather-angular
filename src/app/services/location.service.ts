import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LocationData } from 'src/types/location-data';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private url: string = `http://api.openweathermap.org/geo/1.0`;

  constructor(private http: HttpClient) { }

  getLocationCoordinates(location: string) {
    return this.http.get<LocationData[]>(`${this.url}/direct?q=${location}&appid=${environment.openWeatherAppId}`)
  }
}
