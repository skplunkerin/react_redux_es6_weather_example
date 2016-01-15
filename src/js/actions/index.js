import axios from 'axios';
import { FETCH_WEATHER } from '../config/constants';
import { API_KEY, API_URL } from '../config/config';

export function fetchWeather(city, country = 'us') {
  const url = `${API_URL}?mode=json&appid=${API_KEY}&q=${city},${country}`
  const request = axios.get(url)
  console.log('Request:', request) // shows as "Promise"

  return {
    type: FETCH_WEATHER,
    payload: request // does NOT return as "Promise" here because of 'ReduxPromise', instead it resolves promise first, then sends it
  }
}
