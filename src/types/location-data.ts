export interface LocationData {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

export interface ForecastData {
  temp_celsius: number;
  temp_fahrenheit: number;
  temp_kelvin: number;
  humidity: number;
  clouds: number;
  wind_speed: number;
  icon: string;
  description: string;
  hourly: [
    {
      dt: number;
      temp: number;
      icon: string;
    }
  ];
  daily: [
    {
      dt: number;
      temp: number;
      max: number;
      min: number;
      icon: string;
    }
  ]
}
