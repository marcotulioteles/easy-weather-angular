import { HourlyForecastData } from "src/types/location-data";

export const buildForecastData = (data: any) => {
  const dataFormatted = {
    dt_intl_long_format: formatTheFetchedDate(data.current.dt),
    temp_celsius: convertKelvinToCelsius(data.current.temp),
    temp_kelvin: Number(data.current.temp),
    temp_fahrenheit: convertKelvinToFarenheit(Number(data.current.temp)),
    humidity: data.current.humidity,
    clouds: data.current.clouds,
    wind_speed: data.current.wind_speed,
    icon: data.current.weather[0].icon,
    description: data.current.weather[0].description,
    hourly: data.hourly.map((item: any) => {
      return {
        dt: item.dt,
        hour: getTheHourFromFetchedDate(item.dt),
        temp: convertKelvinToCelsius(item.temp),
        icon: item.weather[0].icon
      }
    }),
    daily: data.daily.map((item: any) => {
      return {
        dt: item.dt,
        day_string: getTheDayOfTheWeek(item.dt),
        temp: convertKelvinToCelsius(item.temp.day),
        max: convertKelvinToCelsius(item.temp.max),
        min: convertKelvinToCelsius(item.temp.min),
        icon: item.weather[0].icon
      }
    })
  };

  return dataFormatted;
}

export const convertKelvinToCelsius = (KELVIN: number) => {
  const CELSIUS = (KELVIN -273.15).toFixed(0);
  return Number(CELSIUS);
}

export const convertKelvinToFarenheit = (KELVIN: number) => {
  const FAHRENHEIT = ((KELVIN - 273.15) * (9/5) + 32).toFixed(1);
  return Number(FAHRENHEIT);
}

export const getTheHourFromFetchedDate = (date: number) => {
  const regex = /\d+:\d{2}\s[a-zA-Z]{2}/;

  const dateFormatted = new Intl.DateTimeFormat('en-US', {
    dateStyle: "full",
    timeStyle: "short"
  }).format(date * 1000);

  const hourExtracted = dateFormatted.match(regex) as Array<string>;
  const hourSliced = hourExtracted[0].split(/\s/);
  const hourInNumber = Number(hourSliced[0].match(/^\d+/));
  let hourToShow = 0;

  if (hourSliced[1] === 'PM' && hourInNumber < 12) hourToShow = hourInNumber + 12;
  else hourToShow = hourInNumber;

  if (hourSliced[1] === 'AM' && hourInNumber === 12) hourToShow = 0;

  return hourToShow < 10 ? `0${hourToShow}:00` : `${hourToShow}:00`;
}

export const formatTheFetchedDate = (date: number) => {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'short'
  }).format(date * 1000);
}

export const getTheDayOfTheWeek = (date: number) => {
  const dateIntlFormatted = formatTheFetchedDate(date);
  const dateSplitted = dateIntlFormatted.split(",");
  return dateSplitted[0];
}
