const KEY = "3d5c986fdd18b9049d14b574eaca809b";
const weather = document.querySelector(".weather");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");

// 날씨에 따른 아이콘 출력
function weatherSeven(e) {
  if (e === "Clouds") {
    weather.classList.add("fa", "fa-cloud");
    localStorage.setItem("weatherId", e);
  } else if (e === "Clear") {
    weather.classList.add("fa", "fa-sun");
    localStorage.setItem("weatherId", e);
  } else if (e === "Thunderstorm") {
    weather.classList.add("fa", "fa-bolt");
    localStorage.setItem("weatherId", e);
  } else if (e === "Drizzle") {
    weather.classList.add("fa", "fa-tint");
    localStorage.setItem("weatherId", e);
  } else if (e === "Rain") {
    weather.classList.add("fa", "fa-cloud-showers-heavy");
    localStorage.setItem("weatherId", e);
  } else if (e === "Snow") {
    weather.classList.add("fa", "fa-snowflake");
    localStorage.setItem("weatherId", e);
  } else if (e === "Atmosphere") {
    weather.classList.add("fa", "fa-smog");
    localStorage.setItem("weatherId", e);
  } else {
    weather.classList.add("fa", "fa-cloud");
    localStorage.setItem("weatherId", e);
  }
}

function OnGeoOk(position) {
  // 온도 저장
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let dataWeather = data.weather[0].main; // 날씨 저장
      weatherSeven(dataWeather); // 날씨에 따른 아이콘 출력

      temp.innerText = data.main.temp;
      city.innerText = data.name;
      localStorage.setItem("tempId", data.main.temp);
      localStorage.setItem("cityId", data.name);
    });
}

function OnGeoError() {
  alert("허용을 눌러주셔야 날씨 확인이 가능하셔요");
}

const getweather = localStorage.getItem("weatherId");
const gettemp = localStorage.getItem("tempId");
const getcity = localStorage.getItem("cityId");

// 만약 저장된 값이 없다면 입력받기
if (getweather === null) {
  navigator.geolocation.getCurrentPosition(OnGeoOk, OnGeoError);
} // 저장된 값이 있다면 저장된 값 출력
else {
  weatherSeven(getweather);
  temp.innerText = gettemp;
  city.innerText = getcity;
}
