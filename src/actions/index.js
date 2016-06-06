import axios from 'axios';

const API_KEY  = '2fce6fcc4cf3bdbed4081dd1b3f2ed6e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`; //search query
  const request = axios.get(url); //ajax request

  console.log('Request: ', request);

  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
