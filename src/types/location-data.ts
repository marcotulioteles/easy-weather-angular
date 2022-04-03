export interface LocationData {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

export interface HourlyForecastData {
  dt: number;
  hour: number;
  temp: number;
  icon: string;
}

export interface DailyForecastData {
  dt: number;
  day_string: string;
  temp: number;
  max: number;
  min: number;
  icon: string;
}

export interface ForecastData {
  dt_intl_long_format: string;
  temp_celsius: number;
  temp_fahrenheit: number;
  temp_kelvin: number;
  humidity: number;
  clouds: number;
  wind_speed: number;
  icon: string;
  description: string;
  hourly: HourlyForecastData[];
  daily: DailyForecastData[];
}
