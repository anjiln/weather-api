const apiKey = "9aad832620396cb9a449bfd8e0c442eb";

const cityEl = document.getElementById("city");
const tempEl = document.getElementById("temp");
const descEl = document.getElementById("desc");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const weatherBox = document.getElementById("weather");
const errorEl = document.getElementById("error");

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (!city) return;

  errorEl.textContent = "";
  weatherBox.style.display = "none";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("Location not found");
    }

    const data = await response.json();

    cityEl.textContent = data.name + ", " + data.sys.country;
    tempEl.textContent = Math.round(data.main.temp) + " °C";
    descEl.textContent = data.weather[0].description;
    humidityEl.textContent = data.main.humidity + "%";
    windEl.textContent = data.wind.speed + " m/s";

    weatherBox.style.display = "block";

  } catch (error) {
    errorEl.textContent = error.message;
  }
}
