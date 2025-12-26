# Weather App

A simple and intuitive weather application that provides real-time weather information for any city in the world.

## Features

- **City Search**: Search weather by entering any city name
- **Current Temperature**: Displays temperature in Celsius
- **Weather Description**: Shows current weather conditions
- **Humidity**: Displays humidity percentage
- **Wind Speed**: Shows wind speed in m/s
- **Error Handling**: Clear error messages for invalid locations
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## How to Use

1. Open `index.html` in a web browser
2. Enter a city name in the search box (e.g., "London", "Tokyo", "New York")
3. Click **Search** or press Enter
4. Weather information will be displayed instantly
5. Search for different cities to compare weather conditions

## Files

- `index.html` - HTML structure with search and weather display sections
- `script.js` - OpenWeatherMap API integration and data retrieval
- `style.css` - Styling for the weather interface

## API

This app uses the **OpenWeatherMap API** (Free Tier):

- Endpoint: `https://api.openweathermap.org/data/2.5/weather`
- Temperature Unit: Metric (Celsius)
- No authentication required for basic queries

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- OpenWeatherMap REST API

## Example Usage

- Search for "London" to get weather in London, UK
- Search for "Paris" to get weather in Paris, France
- Works with city names, country codes, and coordinates

## Error Handling

The app gracefully handles:

- Invalid city names with user-friendly error messages
- Network connection issues
- Missing data fields
