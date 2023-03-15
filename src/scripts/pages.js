import { CurrentWeatherPanel, DailyWeatherPanel } from './components.js';
import APIController from './api.js';
import BackgroundImage from '../assets/dark-mode-sunny.jpg';
import '../styles/main.css';

const MainPage = async (place = 'California', isF = true) => {
	const units = isF ? 'Imperial' : 'Metric';
	const data = await APIController.getCurrentData(place, units);
	const forecastData = await APIController.getForecastData(data, units);

	document.body.style.backgroundImage = `url(./${BackgroundImage})`;
	const content = document.getElementById('content');

	content.appendChild(CurrentWeatherPanel(data, isF));
	content.appendChild(DailyWeatherPanel(forecastData, isF));
};

export default MainPage;
