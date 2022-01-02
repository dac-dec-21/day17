let obj = {
  coord: {
    lon: 72.8479,
    lat: 19.0144,
  },
  weather: [
    {
      id: 711,
      main: "Smoke",
      description: "smoke",
      icon: "50d",
    },
  ],
  base: "stations",
  main: {
    temp: 28.99,
    feels_like: 29.77,
    temp_min: 28.94,
    temp_max: 28.99,
    pressure: 1016,
    humidity: 51,
  },
  visibility: 2500,
  wind: {
    speed: 3.09,
    deg: 100,
  },
  clouds: {
    all: 0,
  },
  dt: 1641102785,
  sys: {
    type: 1,
    id: 9052,
    country: "IN",
    sunrise: 1641087720,
    sunset: 1641127357,
  },
  timezone: 19800,
  id: 1275339,
  name: "Mumbai",
  cod: 200,
};

// looking for the members inside the object
let dt1 = obj.dt;
let name1 = obj.name;
let main1 = obj.main;

// destructuring.
let { main, rahul } = obj;

console.log(main, rahul);
