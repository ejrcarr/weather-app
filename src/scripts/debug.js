import APIController from './api.js';

export const ConsoleController = (() => {
	async function displayData(place = 'California', units = 'Imperial') {
		const data = await APIController.getCurrentData(place, units);
		console.log(data);
	}

	async function displayDaily(place = 'California', units = 'Imperial') {
		const response = await APIController.getCurrentData(place, units);
		const data = await APIController.getForecastData(response);
		console.log(data);
	}

	return { displayData, displayDaily };
})();
