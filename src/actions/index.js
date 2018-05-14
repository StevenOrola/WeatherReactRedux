const API_KEY = 'dd1fb385cb100a1fd634dfbf38078014';
const ROOT_URL = 'http://samples.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = ROOT_URL + '&q=' + city + ',us';
	

	return {
		type: FETCH_WEATHER
	};
}