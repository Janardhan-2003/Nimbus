import { useEffect, useState } from 'react';
import {Weather} from '../../apis/weather';
import { Cloud, Wind, Eye, Droplets, Thermometer, Gauge } from 'lucide-react';


const HeroPage=()=> {
  // Weather data from API
  const [location, setLocation] = useState("kadapa");
  const [country, setCountry] = useState('IN');
  const [temperature, setTemperature] = useState(0);
  const [feelsLike, setFeelsLike] = useState(0);
  const [description, setDescription] = useState('');
  const [humidity, setHumidity] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [visibility, setVisibility] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [clouds, setClouds] = useState(0);
  const [error, setError] = useState(null);

   const getWeatherData = async (cityName) => {
      const data = await Weather(cityName);

      if(data!==null){
      console.log(data);
      setLocation(data.name);
      setCountry(data.sys.country);
      setTemperature(data.main.temp);
      setFeelsLike(data.main.feels_like);
      setDescription(data.weather[0].description);
      setHumidity(data.main.humidity);
      setWindSpeed(data.wind.speed);
      setVisibility(data.visibility);
      setPressure(data.main.pressure);
      setClouds(data.clouds.all);
      setError(null);
      } else{
       setError('This place is not available or not found. Please try another city.');
      }
    }

  useEffect( ()=>{
    getWeatherData(location || 'kadapa');
  },[])

  const handleInputSearch=(e)=>{
    if (e.key === 'Enter') {
      const city = e.target.value;
      if(city){
        getWeatherData(city)
        e.target.value = ''; 
      }
    }
  }


  return (
    <>
    <div className='h-fit'>
      <input type='search' 
    placeholder='Search for any city' 
    className='w-60 border border-slate-50 text-slate-50 ml-10 mt-10 h-10 rounded-lg px-5 mb-1' 
    onKeyDown={handleInputSearch} />

    <p className={`text-sm mx-10 pt-3 text-red-500 error-msg ${error ? 'visible' : ''}`}>
  {error || '\u00A0'}
</p>
    

      <div className="max-w-7xl mx-auto h-fit">
      </div>
    <div className="bg-transparent min-h-screen px-4 py-2">
       
        
        {/* Hero Weather Display */}
        <div className="text-center mb-16">
          
          
          <h1 className="text-8xl md:text-9xl font-light text-gray-100 mb-4 tracking-tight">
            {Math.round(temperature)}°
          </h1>
          
          <div className="space-y-2">
            <p className="text-2xl font-light text-gray-500">
              📍{location}, {country}
            </p>
            <p className="text-lg text-gray-500 capitalize font-medium">
              {description}
            </p>
          </div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
         
          <div className="lg:col-span-1 bg-blur text-white rounded-3xl p-8 border border-blue-200/50 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-blue-500 rounded-2xl">
                <Thermometer className="w-6 h-6 text-white" />
              </div>
              <span className="text-4xl font-light text-gray-100">{Math.round(feelsLike)}°</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-100 mb-1">Feels Like</h3>
            <p className="text-sm text-gray-100">Real feel temperature</p>
          </div>

       
          <div className="bg-transparent rounded-3xl p-8 border border-cyan-200/50 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-cyan-500 rounded-2xl">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className="text-4xl font-light text-gray-100">{humidity}%</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-100 mb-1">Humidity</h3>
            <p className="text-sm text-gray-100">Moisture in air</p>
          </div>

      
          <div className="bg-transparent rounded-3xl p-8 border border-green-200/50 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-green-500 rounded-2xl">
                <Wind className="w-6 h-6 text-white" />
              </div>
              <span className="text-4xl font-light text-gray-100">{windSpeed}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-100 mb-1">Wind Speed</h3>
            <p className="text-sm text-gray-100">m/s</p>
          </div>

        </div>

   
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
     
          <div className="bg-transparent rounded-2xl p-6 border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-purple-100 rounded-xl">
                <Eye className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-light text-gray-100">{visibility / 1000} km</p>
                <p className="text-sm text-gray-100">Visibility</p>
              </div>
            </div>
          </div>

     
          <div className="bg-transparent rounded-2xl p-6 border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-orange-100 rounded-xl">
                <Gauge className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-light text-gray-100">{pressure}</p>
                <p className="text-sm text-gray-100">Pressure (hPa)</p>
              </div>
            </div>
          </div>

          <div className="bg-transparent rounded-2xl p-6 border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-gray-100 rounded-xl">
                <Cloud className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="text-2xl font-light text-gray-100">{clouds}%</p>
                <p className="text-sm text-gray-100">Cloud Cover</p>
              </div>
            </div>
          </div>

        </div>

        {/* Status Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-transparent rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-100">Updated {new Date().toLocaleTimeString()}</span>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}

export default HeroPage