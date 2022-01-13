const apiKey = "ImznmLenxPveqQrPIWQPDpaxaq11YwkI";

// get weather info
const getWeather = async (locationKey) => {
  const baseUrl = "https://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${locationKey}?apikey=${apiKey}`;

  const response = await fetch(baseUrl + query);
  const data = await response.json();
  return data[0];
};

// get location info
const getCity = async (city) => {
  const baseUrl =
    "https://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${apiKey}&q=${city}`;

  const response = await fetch(baseUrl + query);
  const data = await response.json();
  return data[0];
};

// getCity("sylhet")
//   .then((data) => getWeather(data.Key))
//   .then(data => console.log(data))
//   .catch((err) => console.log(err));
