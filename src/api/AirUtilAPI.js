export const AirUtilAPI = async (lat, lng) => {
  const res = await fetch(
    `https://api.ambeedata.com/latest/by-lat-lng?lat=${lat}&lng=${lng}`,
    {
      method: 'GET',
      headers: {
        'x-api-key':
          '00760fe27662c395d6a61f45c0b54bbba02ae8262f7637b3d65f6f7d29fdb4fe',
        'Content-type': 'application/json',
      },
    }
  );
  if (res.ok === true) {
    const data = await res.json();
    //setAirQualityData(data.stations);
    return [
      {
        aqi: data.stations[0].AQI || 0,
        category: data.stations[0].aqiInfo.category,
      },
    ];
  }
};
