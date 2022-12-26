import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [city, setCity] = useState('Delhi')
  const searchCity = (event) => {
    console.log(event.target.value)
    setCity(event.target.value)
  }
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cad091efab7bc046cbb7d69b8e135851`
      const res = await fetch(url);
      const resJson = await res.json();
      console.log(resJson);
    }
    fetchApi();
  })

  return (
    <>
      <input type="search" name="" id="" placeholder='Search city' onChange={searchCity} />
      <h2>{city}</h2>
      {/* {city.weather} */}
      {/* {city} */}
    </>
  );
}

export default App;
