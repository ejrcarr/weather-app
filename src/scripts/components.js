import MainPage from './pages';
import DaySunny from '../assets/day-sunny.jpg';
import Mist from '../assets/mist.jpg';
import Snow from '../assets/snow.jpg';
import ThunderNight from '../assets/thunder-night.jpg';
import DayRain from '../assets/day-rain.jpg';
import DarkClouds from '../assets/dark-clouds.jpg';
import DayCloud from '../assets/light-cloudy.jpg';
import NightClear from '../assets/clear-night.jpg';
import HardDayRain from '../assets/hard-rain-sunny.jpg';
import NightLightClouds from '../assets/dark-mode-sunny.jpg';
import ScatteredCloud from '../assets/scattered-clouds.jpg';
import NightRain from '../assets/night-rain.jpg';
import DayThunder from '../assets/day-thunderstorm.jpg';

const ICONS = {
	'01d': [
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-sunny</title><path d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z" /></svg>`,
		DaySunny,
	],
	'01n': [
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-sunset</title><path d="M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M5,16H19A1,1 0 0,1 20,17A1,1 0 0,1 19,18H5A1,1 0 0,1 4,17A1,1 0 0,1 5,16M17,20A1,1 0 0,1 18,21A1,1 0 0,1 17,22H7A1,1 0 0,1 6,21A1,1 0 0,1 7,20H17M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7Z" /></svg>`,
		NightClear,
	],
	'02d': [
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-partly-cloudy</title><path d="M12.74,5.47C15.1,6.5 16.35,9.03 15.92,11.46C17.19,12.56 18,14.19 18,16V16.17C18.31,16.06 18.65,16 19,16A3,3 0 0,1 22,19A3,3 0 0,1 19,22H6A4,4 0 0,1 2,18A4,4 0 0,1 6,14H6.27C5,12.45 4.6,10.24 5.5,8.26C6.72,5.5 9.97,4.24 12.74,5.47M11.93,7.3C10.16,6.5 8.09,7.31 7.31,9.07C6.85,10.09 6.93,11.22 7.41,12.13C8.5,10.83 10.16,10 12,10C12.7,10 13.38,10.12 14,10.34C13.94,9.06 13.18,7.86 11.93,7.3M13.55,3.64C13,3.4 12.45,3.23 11.88,3.12L14.37,1.82L15.27,4.71C14.76,4.29 14.19,3.93 13.55,3.64M6.09,4.44C5.6,4.79 5.17,5.19 4.8,5.63L4.91,2.82L7.87,3.5C7.25,3.71 6.65,4.03 6.09,4.44M18,9.71C17.91,9.12 17.78,8.55 17.59,8L19.97,9.5L17.92,11.73C18.03,11.08 18.05,10.4 18,9.71M3.04,11.3C3.11,11.9 3.24,12.47 3.43,13L1.06,11.5L3.1,9.28C3,9.93 2.97,10.61 3.04,11.3M19,18H16V16A4,4 0 0,0 12,12A4,4 0 0,0 8,16H6A2,2 0 0,0 4,18A2,2 0 0,0 6,20H19A1,1 0 0,0 20,19A1,1 0 0,0 19,18Z" /></svg>`,
		DayCloud,
	],
	'02n': [
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-night-partly-cloudy</title><path d="M22,10.28C21.74,10.3 21.5,10.31 21.26,10.31C19.32,10.31 17.39,9.57 15.91,8.09C14.25,6.44 13.5,4.19 13.72,2C13.77,1.53 13.22,1 12.71,1C12.57,1 12.44,1.04 12.32,1.12C12,1.36 11.66,1.64 11.36,1.94C9.05,4.24 8.55,7.66 9.84,10.46C8.31,11.11 7.13,12.43 6.69,14.06L6,14A4,4 0 0,0 2,18A4,4 0 0,0 6,22H19A3,3 0 0,0 22,19A3,3 0 0,0 19,16C18.42,16 17.88,16.16 17.42,16.45L17.5,15.5C17.5,15.28 17.5,15.05 17.46,14.83C19.14,14.67 20.77,13.94 22.06,12.64C22.38,12.34 22.64,12 22.88,11.68C23.27,11.13 22.65,10.28 22.04,10.28M19,18A1,1 0 0,1 20,19A1,1 0 0,1 19,20H6A2,2 0 0,1 4,18A2,2 0 0,1 6,16H8.5V15.5C8.5,13.94 9.53,12.64 10.94,12.18C11.1,12.13 11.26,12.09 11.43,12.06C11.61,12.03 11.8,12 12,12C12.23,12 12.45,12.03 12.66,12.07C12.73,12.08 12.8,12.1 12.87,12.13C13,12.16 13.15,12.2 13.28,12.25C13.36,12.28 13.44,12.32 13.5,12.36C13.63,12.41 13.74,12.47 13.84,12.54C13.92,12.59 14,12.64 14.07,12.7C14.17,12.77 14.25,12.84 14.34,12.92C14.41,13 14.5,13.05 14.55,13.12C14.63,13.2 14.69,13.29 14.76,13.37C14.82,13.45 14.89,13.53 14.94,13.62C15,13.71 15.04,13.8 15.09,13.9C15.14,14 15.2,14.08 15.24,14.18C15.41,14.59 15.5,15.03 15.5,15.5V18M16.83,12.86C15.9,11.16 14.08,10 12,10H11.87C11.41,9.19 11.14,8.26 11.14,7.29C11.14,6.31 11.39,5.37 11.86,4.55C12.21,6.41 13.12,8.14 14.5,9.5C15.86,10.88 17.58,11.79 19.45,12.14C18.66,12.6 17.76,12.84 16.83,12.86Z" /></svg>`,
		NightLightClouds,
	],
	'03d': [
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-cloudy</title><path d="M6,19A5,5 0 0,1 1,14A5,5 0 0,1 6,9C7,6.65 9.3,5 12,5C15.43,5 18.24,7.66 18.5,11.03L19,11A4,4 0 0,1 23,15A4,4 0 0,1 19,19H6M19,13H17V12A5,5 0 0,0 12,7C9.5,7 7.45,8.82 7.06,11.19C6.73,11.07 6.37,11 6,11A3,3 0 0,0 3,14A3,3 0 0,0 6,17H19A2,2 0 0,0 21,15A2,2 0 0,0 19,13Z" /></svg>`,
		ScatteredCloud,
	],
	'03n': [
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cloud</title><path d="M6.5 20Q4.22 20 2.61 18.43 1 16.85 1 14.58 1 12.63 2.17 11.1 3.35 9.57 5.25 9.15 5.88 6.85 7.75 5.43 9.63 4 12 4 14.93 4 16.96 6.04 19 8.07 19 11 20.73 11.2 21.86 12.5 23 13.78 23 15.5 23 17.38 21.69 18.69 20.38 20 18.5 20Z" /></svg>`,
		ScatteredCloud,
	],
	'04d': [
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>clouds</title><path d="M19.19 12.07C19.69 11.54 20 10.82 20 10C20 8.3 18.7 6.84 17 6.84H14.2C14.2 4.17 12.03 2 9.36 2C7.31 2 5.56 3.28 4.85 5.08C2.72 5.14 1 6.89 1 9.04C1 11.22 2.78 13 4.96 13H8.1C8.04 13.33 8 13.66 8 14H7.5C5.57 14 4 15.57 4 17.5S5.57 21 7.5 21H18.5C21 21 23 19 23 16.5C23 14.26 21.34 12.41 19.19 12.07M18.5 19H7.5C6.67 19 6 18.33 6 17.5S6.67 16 7.5 16H10V14C10 12.07 11.57 10.5 13.5 10.5S17 12.07 17 14H18.5C19.88 14 21 15.12 21 16.5S19.88 19 18.5 19Z" /></svg>`,
		DarkClouds,
	],
	'04n': [
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>clouds</title><path d="M19.19 12.07C19.69 11.54 20 10.82 20 10C20 8.3 18.7 6.84 17 6.84H14.2C14.2 4.17 12.03 2 9.36 2C7.31 2 5.56 3.28 4.85 5.08C2.72 5.14 1 6.89 1 9.04C1 11.22 2.78 13 4.96 13H8.1C8.04 13.33 8 13.66 8 14H7.5C5.57 14 4 15.57 4 17.5S5.57 21 7.5 21H18.5C21 21 23 19 23 16.5C23 14.26 21.34 12.41 19.19 12.07M18.5 19H7.5C6.67 19 6 18.33 6 17.5S6.67 16 7.5 16H10V14C10 12.07 11.57 10.5 13.5 10.5S17 12.07 17 14H18.5C19.88 14 21 15.12 21 16.5S19.88 19 18.5 19Z" /></svg>`,
		DarkClouds,
	],
	'09d': [
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-pouring</title><path d="M9,12C9.53,12.14 9.85,12.69 9.71,13.22L8.41,18.05C8.27,18.59 7.72,18.9 7.19,18.76C6.65,18.62 6.34,18.07 6.5,17.54L7.78,12.71C7.92,12.17 8.47,11.86 9,12M13,12C13.53,12.14 13.85,12.69 13.71,13.22L11.64,20.95C11.5,21.5 10.95,21.8 10.41,21.66C9.88,21.5 9.56,20.97 9.7,20.43L11.78,12.71C11.92,12.17 12.47,11.86 13,12M17,12C17.53,12.14 17.85,12.69 17.71,13.22L16.41,18.05C16.27,18.59 15.72,18.9 15.19,18.76C14.65,18.62 14.34,18.07 14.5,17.54L15.78,12.71C15.92,12.17 16.47,11.86 17,12M17,10V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.43 4,15.6 3.5,15.32V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12C23,13.5 22.2,14.77 21,15.46V15.46C20.5,15.73 19.91,15.57 19.63,15.09C19.36,14.61 19.5,14 20,13.72V13.73C20.6,13.39 21,12.74 21,12A2,2 0 0,0 19,10H17Z" /></svg>`,
		DayRain,
	],
	'09n': [
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-pouring</title><path d="M9,12C9.53,12.14 9.85,12.69 9.71,13.22L8.41,18.05C8.27,18.59 7.72,18.9 7.19,18.76C6.65,18.62 6.34,18.07 6.5,17.54L7.78,12.71C7.92,12.17 8.47,11.86 9,12M13,12C13.53,12.14 13.85,12.69 13.71,13.22L11.64,20.95C11.5,21.5 10.95,21.8 10.41,21.66C9.88,21.5 9.56,20.97 9.7,20.43L11.78,12.71C11.92,12.17 12.47,11.86 13,12M17,12C17.53,12.14 17.85,12.69 17.71,13.22L16.41,18.05C16.27,18.59 15.72,18.9 15.19,18.76C14.65,18.62 14.34,18.07 14.5,17.54L15.78,12.71C15.92,12.17 16.47,11.86 17,12M17,10V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.43 4,15.6 3.5,15.32V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12C23,13.5 22.2,14.77 21,15.46V15.46C20.5,15.73 19.91,15.57 19.63,15.09C19.36,14.61 19.5,14 20,13.72V13.73C20.6,13.39 21,12.74 21,12A2,2 0 0,0 19,10H17Z" /></svg>`,
		NightRain,
	],
	'10d': [
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-partly-rainy</title><path d="M12.75,4.47C15.1,5.5 16.35,8.03 15.92,10.46C17.19,11.56 18,13.19 18,15V15.17C18.31,15.06 18.65,15 19,15A3,3 0 0,1 22,18A3,3 0 0,1 19,21H17C17,21 16,21 16,20C16,19 17,19 17,19H19A1,1 0 0,0 20,18A1,1 0 0,0 19,17H16V15A4,4 0 0,0 12,11A4,4 0 0,0 8,15H6A2,2 0 0,0 4,17A2,2 0 0,0 6,19H7C7,19 8,19 8,20C8,21 7,21 7,21H6A4,4 0 0,1 2,17A4,4 0 0,1 6,13H6.27C5,11.45 4.6,9.24 5.5,7.25C6.72,4.5 9.97,3.24 12.75,4.47M11.93,6.3C10.16,5.5 8.09,6.31 7.31,8.07C6.85,9.09 6.93,10.22 7.41,11.13C8.5,9.83 10.16,9 12,9C12.7,9 13.38,9.12 14,9.34C13.94,8.06 13.18,6.86 11.93,6.3M13.55,2.63C13,2.4 12.45,2.23 11.88,2.12L14.37,0.82L15.27,3.71C14.76,3.29 14.19,2.93 13.55,2.63M6.09,3.44C5.6,3.79 5.17,4.19 4.8,4.63L4.91,1.82L7.87,2.5C7.25,2.71 6.65,3.03 6.09,3.44M18,8.71C17.91,8.12 17.78,7.55 17.59,7L19.97,8.5L17.92,10.73C18.03,10.08 18.05,9.4 18,8.71M3.04,10.3C3.11,10.9 3.25,11.47 3.43,12L1.06,10.5L3.1,8.28C3,8.93 2.97,9.61 3.04,10.3M12,18.91C12.59,19.82 13,20.63 13,21A1,1 0 0,1 12,22A1,1 0 0,1 11,21C11,20.63 11.41,19.82 12,18.91M12,15.62C12,15.62 9,19 9,21A3,3 0 0,0 12,24A3,3 0 0,0 15,21C15,19 12,15.62 12,15.62Z" /></svg>`,
		HardDayRain,
	],
	'10n': [
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-rainy</title><path d="M6,14.03A1,1 0 0,1 7,15.03C7,15.58 6.55,16.03 6,16.03C3.24,16.03 1,13.79 1,11.03C1,8.27 3.24,6.03 6,6.03C7,3.68 9.3,2.03 12,2.03C15.43,2.03 18.24,4.69 18.5,8.06L19,8.03A4,4 0 0,1 23,12.03C23,14.23 21.21,16.03 19,16.03H18C17.45,16.03 17,15.58 17,15.03C17,14.47 17.45,14.03 18,14.03H19A2,2 0 0,0 21,12.03A2,2 0 0,0 19,10.03H17V9.03C17,6.27 14.76,4.03 12,4.03C9.5,4.03 7.45,5.84 7.06,8.21C6.73,8.09 6.37,8.03 6,8.03A3,3 0 0,0 3,11.03A3,3 0 0,0 6,14.03M12,14.15C12.18,14.39 12.37,14.66 12.56,14.94C13,15.56 14,17.03 14,18C14,19.11 13.1,20 12,20A2,2 0 0,1 10,18C10,17.03 11,15.56 11.44,14.94C11.63,14.66 11.82,14.4 12,14.15M12,11.03L11.5,11.59C11.5,11.59 10.65,12.55 9.79,13.81C8.93,15.06 8,16.56 8,18A4,4 0 0,0 12,22A4,4 0 0,0 16,18C16,16.56 15.07,15.06 14.21,13.81C13.35,12.55 12.5,11.59 12.5,11.59" /></svg>`,
		NightRain,
	],
	'11d': [
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-lightning-rainy</title><path d="M4.5,13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.44 4,15.6 3.5,15.33V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59M9.5,11H12.5L10.5,15H12.5L8.75,22L9.5,17H7L9.5,11M17.5,18.67C17.5,19.96 16.5,21 15.25,21C14,21 13,19.96 13,18.67C13,17.12 15.25,14.5 15.25,14.5C15.25,14.5 17.5,17.12 17.5,18.67Z" /></svg>`,
		DayThunder,
	],
	'11n': [
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-lightning-rainy</title><path d="M4.5,13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.44 4,15.6 3.5,15.33V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59M9.5,11H12.5L10.5,15H12.5L8.75,22L9.5,17H7L9.5,11M17.5,18.67C17.5,19.96 16.5,21 15.25,21C14,21 13,19.96 13,18.67C13,17.12 15.25,14.5 15.25,14.5C15.25,14.5 17.5,17.12 17.5,18.67Z" /></svg>`,
		ThunderNight,
	],
	'13d': [
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-snowy-heavy</title><path d="M4,16.36C3.86,15.82 4.18,15.25 4.73,15.11L7,14.5L5.33,12.86C4.93,12.46 4.93,11.81 5.33,11.4C5.73,11 6.4,11 6.79,11.4L8.45,13.05L9.04,10.8C9.18,10.24 9.75,9.92 10.29,10.07C10.85,10.21 11.17,10.78 11,11.33L10.42,13.58L12.67,13C13.22,12.83 13.79,13.15 13.93,13.71C14.08,14.25 13.76,14.82 13.2,14.96L10.95,15.55L12.6,17.21C13,17.6 13,18.27 12.6,18.67C12.2,19.07 11.54,19.07 11.15,18.67L9.5,17L8.89,19.27C8.75,19.83 8.18,20.14 7.64,20C7.08,19.86 6.77,19.29 6.91,18.74L7.5,16.5L5.26,17.09C4.71,17.23 4.14,16.92 4,16.36M1,10A5,5 0 0,1 6,5C7,2.65 9.3,1 12,1C15.43,1 18.24,3.66 18.5,7.03L19,7A4,4 0 0,1 23,11A4,4 0 0,1 19,15A1,1 0 0,1 18,14A1,1 0 0,1 19,13A2,2 0 0,0 21,11A2,2 0 0,0 19,9H17V8A5,5 0 0,0 12,3C9.5,3 7.45,4.82 7.06,7.19C6.73,7.07 6.37,7 6,7A3,3 0 0,0 3,10C3,10.85 3.35,11.61 3.91,12.16C4.27,12.55 4.26,13.16 3.88,13.54C3.5,13.93 2.85,13.93 2.47,13.54C1.56,12.63 1,11.38 1,10M14.03,20.43C14.13,20.82 14.5,21.04 14.91,20.94L16.5,20.5L16.06,22.09C15.96,22.5 16.18,22.87 16.57,22.97C16.95,23.08 17.35,22.85 17.45,22.46L17.86,20.89L19.03,22.05C19.3,22.33 19.77,22.33 20.05,22.05C20.33,21.77 20.33,21.3 20.05,21.03L18.89,19.86L20.46,19.45C20.85,19.35 21.08,18.95 20.97,18.57C20.87,18.18 20.5,17.96 20.09,18.06L18.5,18.5L18.94,16.91C19.04,16.5 18.82,16.13 18.43,16.03C18.05,15.92 17.65,16.15 17.55,16.54L17.14,18.11L15.97,16.95C15.7,16.67 15.23,16.67 14.95,16.95C14.67,17.24 14.67,17.7 14.95,17.97L16.11,19.14L14.54,19.55C14.15,19.65 13.92,20.05 14.03,20.43Z" /></svg>`,
		Snow,
	],
	'13n': [
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-snowy-heavy</title><path d="M4,16.36C3.86,15.82 4.18,15.25 4.73,15.11L7,14.5L5.33,12.86C4.93,12.46 4.93,11.81 5.33,11.4C5.73,11 6.4,11 6.79,11.4L8.45,13.05L9.04,10.8C9.18,10.24 9.75,9.92 10.29,10.07C10.85,10.21 11.17,10.78 11,11.33L10.42,13.58L12.67,13C13.22,12.83 13.79,13.15 13.93,13.71C14.08,14.25 13.76,14.82 13.2,14.96L10.95,15.55L12.6,17.21C13,17.6 13,18.27 12.6,18.67C12.2,19.07 11.54,19.07 11.15,18.67L9.5,17L8.89,19.27C8.75,19.83 8.18,20.14 7.64,20C7.08,19.86 6.77,19.29 6.91,18.74L7.5,16.5L5.26,17.09C4.71,17.23 4.14,16.92 4,16.36M1,10A5,5 0 0,1 6,5C7,2.65 9.3,1 12,1C15.43,1 18.24,3.66 18.5,7.03L19,7A4,4 0 0,1 23,11A4,4 0 0,1 19,15A1,1 0 0,1 18,14A1,1 0 0,1 19,13A2,2 0 0,0 21,11A2,2 0 0,0 19,9H17V8A5,5 0 0,0 12,3C9.5,3 7.45,4.82 7.06,7.19C6.73,7.07 6.37,7 6,7A3,3 0 0,0 3,10C3,10.85 3.35,11.61 3.91,12.16C4.27,12.55 4.26,13.16 3.88,13.54C3.5,13.93 2.85,13.93 2.47,13.54C1.56,12.63 1,11.38 1,10M14.03,20.43C14.13,20.82 14.5,21.04 14.91,20.94L16.5,20.5L16.06,22.09C15.96,22.5 16.18,22.87 16.57,22.97C16.95,23.08 17.35,22.85 17.45,22.46L17.86,20.89L19.03,22.05C19.3,22.33 19.77,22.33 20.05,22.05C20.33,21.77 20.33,21.3 20.05,21.03L18.89,19.86L20.46,19.45C20.85,19.35 21.08,18.95 20.97,18.57C20.87,18.18 20.5,17.96 20.09,18.06L18.5,18.5L18.94,16.91C19.04,16.5 18.82,16.13 18.43,16.03C18.05,15.92 17.65,16.15 17.55,16.54L17.14,18.11L15.97,16.95C15.7,16.67 15.23,16.67 14.95,16.95C14.67,17.24 14.67,17.7 14.95,17.97L16.11,19.14L14.54,19.55C14.15,19.65 13.92,20.05 14.03,20.43Z" /></svg>`,
		Snow,
	],
	'50d': [
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-dust</title><path d="M3 5C3 4.4 3.4 4 4 4H5C5.6 4 6 4.4 6 5S5.6 6 5 6H4C3.4 6 3 5.6 3 5M4 13C4 12.4 4.4 12 5 12H6C6.6 12 7 12.4 7 13S6.6 14 6 14H5C4.4 14 4 13.6 4 13M4 16C3.4 16 3 16.4 3 17S3.4 18 4 18H9C9.6 18 10 17.6 10 17S9.6 16 9 16H4M18 5C18 4.4 18.4 4 19 4H21C21.6 4 22 4.4 22 5S21.6 6 21 6H19C18.4 6 18 5.6 18 5M7 20C6.4 20 6 20.4 6 21S6.4 22 7 22H11C11.6 22 12 21.6 12 21S11.6 20 11 20H7M3 10C2.4 10 2 9.6 2 9S2.4 8 3 8H12C13.1 8 14 7.1 14 6S13.1 4 12 4C11.4 4 10.9 4.2 10.6 4.6C10.2 5 9.6 5 9.2 4.6C8.8 4.2 8.8 3.6 9.2 3.2C9.9 2.5 10.9 2 12 2C14.2 2 16 3.8 16 6S14.2 10 12 10H3M19 12C19.6 12 20 11.6 20 11S19.6 10 19 10C18.7 10 18.5 10.1 18.3 10.3C17.9 10.7 17.3 10.7 16.9 10.3C16.5 9.9 16.5 9.3 16.9 8.9C17.4 8.3 18.2 8 19 8C20.7 8 22 9.3 22 11S20.7 14 19 14H10C9.4 14 9 13.6 9 13S9.4 12 10 12H19M18 18H13C12.4 18 12 17.6 12 17S12.4 16 13 16H18C19.7 16 21 17.3 21 19S19.7 22 18 22C17.2 22 16.4 21.7 15.9 21.1C15.5 20.7 15.5 20.1 15.9 19.7C16.3 19.3 16.9 19.3 17.3 19.7C17.5 19.9 17.7 20 18 20C18.6 20 19 19.6 19 19S18.6 18 18 18Z" /></svg>`,
		Mist,
	],
	'50n': [
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-dust</title><path d="M3 5C3 4.4 3.4 4 4 4H5C5.6 4 6 4.4 6 5S5.6 6 5 6H4C3.4 6 3 5.6 3 5M4 13C4 12.4 4.4 12 5 12H6C6.6 12 7 12.4 7 13S6.6 14 6 14H5C4.4 14 4 13.6 4 13M4 16C3.4 16 3 16.4 3 17S3.4 18 4 18H9C9.6 18 10 17.6 10 17S9.6 16 9 16H4M18 5C18 4.4 18.4 4 19 4H21C21.6 4 22 4.4 22 5S21.6 6 21 6H19C18.4 6 18 5.6 18 5M7 20C6.4 20 6 20.4 6 21S6.4 22 7 22H11C11.6 22 12 21.6 12 21S11.6 20 11 20H7M3 10C2.4 10 2 9.6 2 9S2.4 8 3 8H12C13.1 8 14 7.1 14 6S13.1 4 12 4C11.4 4 10.9 4.2 10.6 4.6C10.2 5 9.6 5 9.2 4.6C8.8 4.2 8.8 3.6 9.2 3.2C9.9 2.5 10.9 2 12 2C14.2 2 16 3.8 16 6S14.2 10 12 10H3M19 12C19.6 12 20 11.6 20 11S19.6 10 19 10C18.7 10 18.5 10.1 18.3 10.3C17.9 10.7 17.3 10.7 16.9 10.3C16.5 9.9 16.5 9.3 16.9 8.9C17.4 8.3 18.2 8 19 8C20.7 8 22 9.3 22 11S20.7 14 19 14H10C9.4 14 9 13.6 9 13S9.4 12 10 12H19M18 18H13C12.4 18 12 17.6 12 17S12.4 16 13 16H18C19.7 16 21 17.3 21 19S19.7 22 18 22C17.2 22 16.4 21.7 15.9 21.1C15.5 20.7 15.5 20.1 15.9 19.7C16.3 19.3 16.9 19.3 17.3 19.7C17.5 19.9 17.7 20 18 20C18.6 20 19 19.6 19 19S18.6 18 18 18Z" /></svg>`,
		Mist,
	],
};

export const CurrentWeatherPanel = (data, isF = true) => {
	const place = data.name;
	const iconId = data.weather[0].icon;

	updateBodyImage(iconId);

	const currentWeatherContainer = document.createElement('div');
	currentWeatherContainer.classList.add('current-weather-container');

	const currentWeatherTile = document.createElement('div');
	currentWeatherTile.classList.add('current-weather-tile');

	const cityName = document.createElement('input');
	cityName.classList.add('city-name');
	cityName.type = 'text';
	cityName.readOnly = true;
	cityName.value = data.name;

	const currentTemperature = document.createElement('h1');
	currentTemperature.classList.add('current-temperature');
	currentTemperature.textContent =
		Math.round(Number(data.main.temp)) + (isF ? `℉` : `℃`);

	const currentWeather = document.createElement('p');
	currentWeather.classList.add('current-weather');
	currentWeather.textContent = data.weather[0].main;

	const highLowTemps = document.createElement('p');
	highLowTemps.classList.add('high-low-temps');
	highLowTemps.textContent = `H:${Math.round(
		Number(data.main.temp_max)
	)}° L: ${Math.round(Number(data.main.temp_min))}°`;

	currentWeatherTile.appendChild(cityName);
	currentWeatherTile.appendChild(currentTemperature);
	currentWeatherTile.appendChild(currentWeather);
	currentWeatherTile.appendChild(highLowTemps);

	currentWeatherContainer.appendChild(currentWeatherTile);
	currentWeatherContainer.appendChild(TimePanel(place, isF));

	return currentWeatherContainer;
};

const TimePanel = (place, isF) => {
	const timeContainer = document.createElement('div');
	timeContainer.classList.add('time-container');

	const h2 = document.createElement('h2');
	h2.classList.add('time-text');
	h2.id = 'ct';

	let d = new Date();
	let minutes = d.getMinutes();
	minutes = minutes < 10 ? '0' + minutes.toString() : minutes;
	h2.textContent = `${d.getHours()}:${minutes}`;

	setInterval(time, 1000);

	timeContainer.appendChild(h2);
	timeContainer.appendChild(OptionsPanel(place, isF));
	return timeContainer;
};

function time() {
	let d = new Date();
	let minutes = d.getMinutes();
	minutes = minutes < 10 ? '0' + minutes.toString() : minutes;
	document.getElementById('ct').textContent = `${d.getHours()}:${minutes}`;
}

const OptionsPanel = (place, isF) => {
	const optionsContainer = document.createElement('div');
	optionsContainer.classList.add('options-container');

	const radioButtonsContainer = document.createElement('div');
	radioButtonsContainer.classList.add('radio-buttons-container');

	radioButtonsContainer.appendChild(radioButton('℉', place, isF));
	radioButtonsContainer.appendChild(radioButton('℃', place, isF));
	optionsContainer.appendChild(radioButtonsContainer);
	optionsContainer.appendChild(searchCityWeather(isF));

	return optionsContainer;
};

const radioButton = (name, place, isF) => {
	const buttonContainer = document.createElement('div');
	buttonContainer.classList.add('radio-container');

	const radio = document.createElement('input');
	radio.type = 'radio';
	radio.id = name;
	radio.name = 'units';
	radio.checked = (isF && name == '℉') || (!isF && name != '℉');

	radio.addEventListener('change', () => {
		MainPage(place, name == '℉');
	});

	const label = document.createElement('label');
	label.textContent = name;
	label.setAttribute('for', name);

	buttonContainer.appendChild(radio);
	buttonContainer.appendChild(label);
	return buttonContainer;
};

export const DailyWeatherPanel = (data, isF = true) => {
	const dailyWeatherContainer = document.createElement('div');
	dailyWeatherContainer.classList.add('daily-weather-container');

	let dayToTemps = getDailyTemperatures(data);
	for (const day in dayToTemps) {
		dailyWeatherContainer.appendChild(
			DailyWeatherTile(day, dayToTemps[day], isF)
		);
	}
	return dailyWeatherContainer;
};

const DailyWeatherTile = (day, weatherAndTempInfo, isF) => {
	const dailyWeatherTile = document.createElement('div');
	dailyWeatherTile.classList.add('daily-weather-tile');

	const dayOfWeek = document.createElement('h3');
	dayOfWeek.classList.add('day-of-week');
	dayOfWeek.textContent = getDayOfWeek(day);

	const temperatureContainer = document.createElement('div');
	const highTemp = document.createElement('p');
	highTemp.classList.add('high-temp-daily');
	highTemp.textContent =
		Math.round(Number(weatherAndTempInfo.temp_max)) + (isF ? `℉` : `℃`);
	const lowTemp = document.createElement('p');
	lowTemp.classList.add('low-temp-daily');
	lowTemp.textContent =
		Math.round(Number(weatherAndTempInfo.temp_min)) + (isF ? `℉` : `℃`);
	temperatureContainer.appendChild(highTemp);
	temperatureContainer.appendChild(lowTemp);

	const icon = document.createElement('h2');
	icon.innerHTML = ICONS[weatherAndTempInfo.icon.replaceAll('n', 'd')][0];
	icon.className = 'daily-icon';

	dailyWeatherTile.appendChild(dayOfWeek);
	dailyWeatherTile.appendChild(temperatureContainer);
	dailyWeatherTile.appendChild(icon);

	return dailyWeatherTile;
};

function getDailyTemperatures(data) {
	let dayToTemps = {};
	for (let day of data.list) {
		let dayText = day.dt_txt.substring(0, 10);
		if (dayText in dayToTemps) {
			dayToTemps[dayText].temp_max = Math.max(
				day.main.temp_max,
				dayToTemps[dayText].temp_max
			);
			dayToTemps[dayText].temp_min = Math.min(
				day.main.temp_min,
				dayToTemps[dayText].temp_min
			);
			continue;
		}
		dayToTemps[dayText] = { ...day.main, ...day.weather[0] };
	}
	return dayToTemps;
}

function getDayOfWeek(date) {
	const newDay = new Date(date);
	newDay.setDate(newDay.getDate() + 1);
	const dayOfWeek = new Date(newDay).getDay();
	return isNaN(dayOfWeek)
		? null
		: [
				'Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday',
		  ][dayOfWeek];
}

const searchCityWeather = (isF) => {
	const searchContainer = document.createElement('div');
	searchContainer.classList.add('search-container');

	const search = document.createElement('input');
	search.type = 'text';
	search.id = 'search-city';
	search.className = 'search-city';
	search.setAttribute('placeholder', 'Search cities...');

	search.addEventListener('keydown', (event) => {
		if (event.key == 'Enter') {
			handleSearch(isF);
		}
	});

	const submitButton = document.createElement('button');
	submitButton.type = 'button';
	submitButton.id = 'search-button';
	submitButton.addEventListener('click', () => handleSearch(isF));
	submitButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>magnify</title><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>`;

	searchContainer.appendChild(search);
	searchContainer.appendChild(submitButton);

	return searchContainer;
};

function handleSearch(isF) {
	const searchBar = document.getElementById('search-city');
	MainPage(searchBar.value.replaceAll(' ', '+'), isF);
	searchBar.value = '';
	setLoading();
	setTimeout(fixLoading, 5000);
}

function fixLoading() {
	const currentWeatherTile = document.querySelector('.current-weather-tile');
	if (currentWeatherTile.childNodes.length > 1) {
		return;
	} else {
		MainPage('Phoenix', true);
	}
}

function updateBodyImage(iconId) {
	let d = new Date();
	let hours = d.getHours();
	let newIcon = iconId;
	if (hours > 17 || hours < 7) {
		newIcon = newIcon.replaceAll('d', 'n');
	} else {
		newIcon = newIcon.replaceAll('n', 'd');
	}
	setTimeout(() => updateBackgroundTransparency(newIcon), 10);
	document.body.style.backgroundImage = `url(./${ICONS[newIcon][1]})`;
}

function updateBackgroundTransparency(iconId) {
	let content = document.getElementById('content');
	if (!content) {
		return;
	}
	if (iconId == '01d') {
		content.classList.add('compensate');
	} else {
		content.classList.remove('compensate');
	}
}

function setLoading() {
	const loader = `<svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
      <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
        <animateTransform 
           attributeName="transform" 
           attributeType="XML" 
           type="rotate"
           dur="1s" 
           from="0 50 50"
           to="360 50 50" 
           repeatCount="indefinite" />
    </path>
  </svg>`;
	const weatherTiles = document.querySelectorAll('.daily-weather-tile');
	weatherTiles.forEach((tile) => (tile.innerHTML = loader));
	const currentWeatherTile = document.querySelector('.current-weather-tile');
	currentWeatherTile.innerHTML = loader;
}

// IMAGE CREDITS
// dark mode sunny - https://unsplash.com/photos/eWuc6TXc8Ok
// clear night - https://unsplash.com/photos/TwZb_z0Cf88
// day sunny - https://unsplash.com/photos/lAsA9_LavJI
//light cloudy - https://unsplash.com/photos/ugy3hWGXqqg
// thunder night - https://unsplash.com/photos/6svIKY_ML9g
// dark clouds - https://unsplash.com/photos/IRHNxX5y_hg
// day rain - https://unsplash.com/photos/HNx4QLRgy2k
// hard rain sunny - https://unsplash.com/photos/rNBaaxyeWWM
// snow - https://unsplash.com/photos/IWenq-4JHqo
// mist - https://unsplash.com/photos/od287vQyufw
// scattered clouds - https://unsplash.com/photos/pvh68_D9qqI
// night rain - https://unsplash.com/photos/tT_SrSMhhgE
// day thunderstorm - https://unsplash.com/photos/MnnXMvs4cQo
