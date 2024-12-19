const cityInput = document.querySelector('.city-input');
const searchBtn = document.querySelector('.search-btn');
const weatherInfoSection = document.querySelector(".weather-info");

const notFoundSection = document.querySelector('.not-found');
const SearchCitySection = document.querySelector('.Search-city');

const countryTxt = document.querySelector('.country-txt');
const tempTxt = document.querySelector('.temp-txt');
const conditionTxt = document.querySelector('.condition-txt');
const humidityValueTxt = document.querySelector('.humidity-value-txt');
const windValueTxt = document.querySelector('.wind-value-txt');
const weatherSummaryImg = document.querySelector('.weather-summary-img');
const currentDateTxt = document.querySelector('.current-date-txt');
const forecateItemContainer = document.querySelector('.forecate-item-container');

const apiKey = '10697af32ab3e9e4fb2f3ededd63f9ea';

searchBtn.addEventListener('click', () => {
    if (cityInput.value.trim() !== '') {
        updateWeatherInfo(cityInput.value.trim());
        cityInput.value = "";
        cityInput.blur();
        
    }
});

cityInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && cityInput.value.trim() !== '') {
        updateWeatherInfo(cityInput.value.trim());
        cityInput.value = "";
        cityInput.blur();
        SearchCitySection.style.display="none"
    }
});


async function getFetchData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);
    return await response.json();
}


async function getFetchDataForForecast(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);
    return await response.json();
}

function getCurrentDate() {
    const currentDate = new Date();
    const options = {
        weekday: 'short',
        day: '2-digit',
        month: 'short'
    };
    return currentDate.toLocaleDateString('en-GB', options);
}


async function updateWeatherInfo(city) {
    const weatherData = await getFetchData(city);

    if (weatherData.cod !== 200) {
        showDisplaySection(notFoundSection);
    }

    const {
        name: country,
        main: { temp, humidity },
        weather: [{ id, main }],
        wind: { speed }
    } = weatherData;

    countryTxt.textContent = country;
    tempTxt.textContent = Math.round(temp) + ' °C';
    conditionTxt.textContent = main;
    humidityValueTxt.textContent = humidity + '%';
    windValueTxt.textContent = speed + ' M/s';

    weatherSummaryImg.setAttribute("src", getWeatherImage(id));

    await updateWeatherForecastInfo(city);

    showDisplaySection(weatherInfoSection);
}


async function updateWeatherForecastInfo(city) {
    const forecastData = await getFetchDataForForecast(city);

    const timeTaken = '12:00:00'; 
    const todayDate = new Date().toISOString().split('T')[0];


    forecateItemContainer.innerHTML = '';

    forecastData.list.forEach(forecastWeather => {
        const [datePart, timePart] = forecastWeather.dt_txt.split(' ');

    
        if (timePart === timeTaken && datePart !== todayDate) {
            updateForecastItem(forecastWeather);
        }
    });
}

function updateForecastItem(weatherData) {
    const {
        dt_txt: date,
        weather: [{ id }],
        main: { temp }
    } = weatherData;

    const forecastItem = `
        <div class="forecate-item">
            <h5 class="forecate-item-date regular-txt">${date.split(' ')[0]}</h5>
            <img src="${getWeatherImage(id)}" alt="Weather Icon" class="forecate-item-img">
            <h5 class="forecate-item-temp">${Math.round(temp)}°C</h5>
        </div>
    `;

    forecateItemContainer.insertAdjacentHTML('beforeend', forecastItem);
}

function showDisplaySection(section) {
    [weatherInfoSection, SearchCitySection, notFoundSection]
        .forEach(sec => section.style.display = 'none');

    section.style.display = 'flex';
}

function getWeatherImage(weatherId) {
    if (weatherId >= 200 && weatherId < 300) {
        return './wind.png';
    } else if (weatherId >= 300 && weatherId < 500) {
        return './rain.png';
    } else if (weatherId >= 500 && weatherId < 600) {
        return './rain.png';
    } else if (weatherId >= 600 && weatherId < 700) {
        return './snow.png';
    } else if (weatherId >= 700 && weatherId < 800) {
        return './weather.png';
    } else if (weatherId === 800) {
        return './clear-sky_2.png';
    } else if (weatherId > 800) {
        return './partly-cloudy.png';
    } else {
        return './error.png';
    }
}

currentDateTxt.textContent = getCurrentDate();
