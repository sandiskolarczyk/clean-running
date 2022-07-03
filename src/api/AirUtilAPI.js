export const AirUtilAPI = async (lat, lng) => {
  const res = await fetch(
    `https://api.ambeedata.com/latest/by-lat-lng?lat=${lat}&lng=${lng}`,
    {
      method: 'GET',
      headers: {
        'x-api-key':
          '8ffe7cc25d0cb2714b3096bf32bfc693c73be6c0132d2823f7497dea9db6a23e',
        'Content-type': 'application/json',
      },
    }
  );
  if (res.ok === true) {
    const data = await res.json();
    //setAirQualityData(data.stations);
    return [
      {
        aqi: data.stations[0].AQI,
        category: data.stations[0].aqiInfo.category,
      },
    ];
  }
};
