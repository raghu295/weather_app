# Weather App

This is a simple weather application built with React and Vite. It allows users to search for the current weather in any city using the OpenWeatherMap API.

## Features

- Search for current weather by city name
- Displays temperature, location, humidity, and wind speed
- Shows weather icons based on the current weather conditions

### Prerequisites

- **Node.js:** Ensure you have Node.js installed.
- **OpenWeatherMap API Key:** Sign up at [OpenWeatherMap](https://openweathermap.org/) to get your API key.

## Project Structure
weather_app/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Weather.jsx
│   │   └── Weather.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── index.html
├── package.json
├── vite.config.js
└── README.md

## Technologies Used
- React: For building the user interface.
- Vite: For fast development and optimized builds.
- OpenWeatherMap API: For retrieving current weather data.


## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/raghu295/weather_app.git

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
