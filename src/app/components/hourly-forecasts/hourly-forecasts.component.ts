import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hourly-forecasts',
  templateUrl: './hourly-forecasts.component.html',
  styleUrls: ['./hourly-forecasts.component.scss']
})
export class HourlyForecastsComponent implements OnInit {
  hourlyList: any[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

  constructor() { }

  ngOnInit(): void {
  }

}
