import React,{useState,useEffect} from 'react';
import "./style.css";
import Clock from 'react-live-clock';
import Icon from './Icon';


// import DatePicker from './DatePicker';

const Tempapp = ()  => {

const [city,setcity]=useState(null);

const [search,setsearch]=useState("Nagpur");



useEffect(() => {
  async function fetchWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bf60f4bf1bb530da7a5290db1d82675f`
    ).then((res) => res.json());

    if (response) {
      setcity(response.main);
    }
  }

  fetchWeather();
}, [search]);






    return (
       <>
       
<div className="container">
  <div className="weather-side">
    <div className="weather-gradient"></div>
    <div className="date-container">
    <Icon />
   
   
      <h2 className="date-dayname"> 
              <Clock
              date={''}
              format={'dddd, MMMM DD, YYYY'} />
              </h2>
              
      <p><Clock format={'HH:mm:ss'} ticking={true} /></p>
      <h2>{search} </h2>
      
      

    </div>
   
   


    <div className="weather-container">
    
    

   
    {!city ? (
              <p> No data found</p>
            ) : (
              <h1 className="weather-temp">{city?.temp}°cel </h1>
            )}

    

      <h3 className="weather-desc">{city?.weatherName}</h3>
    </div>
  </div>
  <div className="info-side">
  
    <div className="today-info-container">
      <div className="today-info">
        <div className="precipitation"> <span className="title">PRECIPITATION</span><span className="value">0 %</span>
          <div className="clear"></div>
        </div>
        <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">{city?.humidity}</span>
          <div className="clear"></div>
        </div>
        <div className="wind"> <span className="title">WIND</span><span className="value">{city?.wind}</span>
        </div>
      
        
      </div>
      
    </div>
   
    
    <div className="location-container">
    <div className="location-button">


<input type ="search" className = "inputfield" placeholder="Search city here"
    onChange={(event)=> {setsearch(event.target.value)}}

    
/>


</div>

  
    </div>
  </div>
 
</div>

       
       </>
    )
}

export default Tempapp;
