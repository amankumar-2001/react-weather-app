import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=e5eccfea6c9d8df3c773ee0118dbb7d6`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data);
      })
      setLocation("");
    }
  }

  return (
    <div className='app'>
      <div className='titleClass'>
        <h1 className='title'>Weather App</h1>
        <div className='search'>
          <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder='Enter Location'
            type='text' />
        </div>
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()}° F</h1> : null}
            {data.main ? <h1>{(((data.main.temp - 32) * 5) / 9).toFixed()}° C</h1> : null}
          </div>
          <div className='description'>
            {data.weather ? <p className='bold'>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className='bottom'>
            <div className='feels'>
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}</p> : null}
              <p>Feels Like</p>
            </div>
            <div className='humidity'>
              {data.main ? <p className='bold'>{data.main.humidity}</p> : null}
              <p>Humidity</p>
            </div>
            <div className='wind'>
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}</p> : null}
              <p>Wind speed</p>
            </div>
          </div>
        }


      </div>
    </div>
  );
}

export default App;
