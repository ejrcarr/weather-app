const APIController = (() => {
	const OPTIONS = { mode: 'cors' };

	function _buildForecastURL(response, units) {
		const lat = response.coord.lat;
		const lon = response.coord.lon;

		return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=7f767ef63b9f3f18df30754f8dc580b0`;
	}

	function _buildCurrentWeatherURL(place, units) {
		return `https://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=7f767ef63b9f3f18df30754f8dc580b0&units=${units}`;
	}

	async function getCurrentData(place = 'California', units = 'Imperial') {
		const url = _buildCurrentWeatherURL(place, units);
		const response = await fetch(url, OPTIONS);
		const weatherData = await response.json();
		return weatherData;
	}

	async function getForecastData(data, units) {
		const url = _buildForecastURL(data, units);
		const res = await fetch(url, OPTIONS);
		const forecastData = await res.json();
		return forecastData;
	}

	return { getCurrentData, getForecastData };
})();

export default APIController;
