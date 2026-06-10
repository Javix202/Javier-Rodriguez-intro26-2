function getWeatherIcon(condition) {
  switch (condition) {
    case "Clear":
      return "☀️";
    case "Clouds":
      return "☁️";
    case "Rain":
      return "🌧️";
    case "Thunderstorm":
      return "⛈️";
    case "Snow":
      return "❄️";
    case "Drizzle":
      return "🌦️";
    case "Mist":
    case "Fog":
    case "Haze":
      return "🌫️";
    default:
      return "🌤️";
  }
}

const result = document.getElementById("result");
const cityInput = document.getElementById("cityInput");

async function fetchWeather(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=553de29bae9f2e44b9dee5f1701e5cf6&units=metric`
    );

    if (!res.ok) {
      result.innerHTML = `<p>❌ City not found</p>`;
      return null;
    }

    return await res.json();
  } catch {
    result.innerHTML = `<p>⚠️ Connection error</p>`;
    return null;
  }
}

document.getElementById("tempBtn").addEventListener("click", async () => {
  const city = cityInput.value;
  if (!city) return;

  const data = await fetchWeather(city);
  if (!data) return;

  const icon = getWeatherIcon(data.weather[0].main);

  result.innerHTML = `
    <h2>${icon} ${data.name}</h2>
    <p>🌡️ Temperature: ${data.main.temp}°C</p>
  `;
});

document.getElementById("condBtn").addEventListener("click", async () => {
  const city = cityInput.value;
  if (!city) return;

  const data = await fetchWeather(city);
  if (!data) return;

  const icon = getWeatherIcon(data.weather[0].main);

  result.innerHTML = `
    <h2>${icon} ${data.name}</h2>
    <p>Conditions: ${data.weather[0].description}</p>
  `;
});

const states = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado",
  "Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho",
  "Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana",
  "Maine","Maryland","Massachusetts","Michigan","Minnesota",
  "Mississippi","Missouri","Montana","Nebraska","Nevada",
  "New Hampshire","New Jersey","New Mexico","New York",
  "North Carolina","North Dakota","Ohio","Oklahoma","Oregon",
  "Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington",
  "West Virginia","Wisconsin","Wyoming"
];

const statesList = document.getElementById("statesList");

cityInput.addEventListener("input", () => {
  const text = cityInput.value.toLowerCase();
  statesList.innerHTML = "";

  if (text === "") {
    statesList.style.display = "none";
    return;
  }

  const filtered = states.filter(state =>
    state.toLowerCase().startsWith(text)
  );

  filtered.forEach(state => {
    const li = document.createElement("li");
    li.textContent = state;

    li.addEventListener("click", () => {
      cityInput.value = state;
      statesList.style.display = "none";
    });

    statesList.appendChild(li);
  });

  statesList.style.display = filtered.length > 0 ? "block" : "none";
});
