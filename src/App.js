import { Button } from 'bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const apikey='2af0edf66df9fbb9e1f7a03b33073ee9';
  const[inputCity,setInputCity]=useState("")
  const[data,setData]=useState({});

  const getWeatherDetails=(cityName)=>{
    if(!cityName) return
  const apiURL="https://api.openweathermap.org/data/2.5/weather?q=" + cityName+ " &appid="+ apikey
    axios.get(apiURL).then((res)=> {
      console.log("response",res)
      setData(res.data)
    }).catch((err)=> {
      console.log("error",err)
    })
  }
  const handleChangeInput =(e)=>{
    console.log("value",e.target.value)
    setInputCity(e.target.value)
  }
  const handleSearch =()=> {
    
    getWeatherDetails(inputCity)
  }
  useEffect(()=>{
    getWeatherDetails("delhi")
  },[])

  
  return (
    <div className=" shadow rounded weatherBg">

    <div className="col-md-12 text-center mt-5">
    

    <div className="col-md-12 text-center mt-5">
      
        <h1 className="heading">Weather App</h1>

        <div className="d-grid-gap-3 col-4 mt-4">
          <input type="text"className="form_control"
          value={inputCity} 
          onChange={handleChangeInput}/> <br/>
          <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
        </div>
         </div>

            <h1 className="icon">🌞	</h1>
            <h1 className="wetherCity">{data?.name}</h1>
            <h6 className="weatherTemp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
            <h6 className="humidity">{data?.main?.humidity}</h6>
           Sunrise :<h6 className="sunrise">{data?.sys?.sunrise}</h6>
           Sunset: <h6 className="sunset">{data?.sys?.sunset}</h6>

          </div>
         
      
</div>   
    
  );
}

export default App;
