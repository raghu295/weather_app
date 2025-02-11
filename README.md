# Weather App

This is a simple weather application built with React and Vite. It allows users to search for the current weather in any city using the OpenWeatherMap API.

## Features

- Search for current weather by city name
- Displays temperature, location, humidity, and wind speed
- Shows weather icons based on the current weather conditions

## Project Structure
weather_app/ ├── .gitignore ├── .env ├── eslint.config.js ├── index.html ├── package.json ├── public/ │ └── vite.svg ├── README.md ├── src/ │ ├── App.jsx │ ├── assets/ │ │ ├── clear.png │ │ ├── cloud.png │ │ ├── drizzle.png │ │ ├── humidity.png │ │ ├── rain.png │ │ ├── search.png │ │ ├── snow.png │ │ └── wind.png │ ├── components/ │ │ ├── Weather.css │ │ └── Weather.jsx │ ├── index.css │ └── main.jsx ├── vite.config.js


## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>

2. Navigate to project Directory
- cd weather_app

3. Install the dependencies
- npm install

## Usage
1. Start the developement server
- npm run dev

2. Open your browser and go to http://localhost:3000

## Environment Variables
- Create a .env file in the root directory and add your OpenWeatherMap API key:

- VITE_APP_ID=your_openweathermap_api_key

## Build
- To build the project for production, run: npm run build
