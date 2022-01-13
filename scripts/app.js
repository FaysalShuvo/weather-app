const cityForm = document.querySelector(".change-location");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const updateUi = (data) => {
  const { cityDetails, weather } = data;

  //   update details
  details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;</span>
        </div>
`;

  // update icon
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  // update night/day

  let timeSrc = weather.IsDayTime
    ? ("img/day.svg")
    : ("img/night.svg");

  time.setAttribute("src", timeSrc);

  // remove d-none class
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);
  return {
    cityDetails,
    weather,
  };
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //   get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //   update the ui with city
  updateCity(city)
    .then((data) => updateUi(data))
    .catch((err) => console.log(err));
});
