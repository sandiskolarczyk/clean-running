import { AMBEE_API } from '../apiKeys/apiKeys';

export const AirUtilAPI = async (lat, lng) => {
  const res = await fetch(
    `https://api.ambeedata.com/latest/by-lat-lng?lat=${lat}&lng=${lng}`,
    {
      method: 'GET',
      headers: {
        'x-api-key': AMBEE_API,
        'Content-type': 'application/json',
      },
    }
  );
  if (res.ok === true) {
    const data = await res.json();
    return [
      {
        aqi: data.stations[0].AQI || 0,
        category: data.stations[0].aqiInfo.category,
      },
    ];
  }
};
