export const formatForecastData = (data: any) => {
  const dataFormatted = {
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
        temp: convertKelvinToCelsius(item.temp),
        icon: item.weather[0].icon
      }
    }),
    daily: data.daily.map((item: any) => {
      return {
        dt: item.dt,
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
