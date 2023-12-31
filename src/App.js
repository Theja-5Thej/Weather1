import React, { useState } from 'react';
import axios from "axios";
import Searchpage from './Components/SearchPage';
import Weathercomp from './Components/weathercomp';

const Api_Key = "fe4feefa8543e06d4f3c66d92c61b69c";
function App() {
  const [city,setCity] = useState('');
  const [weather,setWeather] = useState();

  const fetchWeather = async(e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`,
    );
    // console.log(response)
    setWeather(response.data);
  };
  
  return (
    <div className="weather-container">
      <h2>React Weather App</h2>
      {weather ?(
        <Weathercomp weather={weather}/>
      ) : <Searchpage  setCity={setCity} fetchWeather={fetchWeather} />}
      
    </div>
  )
}

export default App;
