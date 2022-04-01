export const formatForecastData = (data: any) => {
  const dataFormatted = {
    temp: data.current.temp,
    humidity: data.current.humidity,
    clouds: data.current.clouds,
    wind_speed: data.current.wind_speed,
    icon: data.current.weather[0].icon,
    description: data.current.weather[0].description,
    hourly: data.hourly.map((item: any) => {
      return {
        dt: item.dt,
        temp: item.temp,
        icon: item.weather[0].icon
      }
    }),
    daily: data.daily.map((item: any) => {
      return {
        dt: item.dt,
        temp: item.temp.day,
        max: item.temp.max,
        min: item.temp.min,
        icon: item.weather[0].icon
      }
    })
  };

  console.log('DATA_FORMATED: ', dataFormatted);
  return dataFormatted;
}
