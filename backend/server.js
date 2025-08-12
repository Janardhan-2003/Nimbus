const express= require('express');
const cors = require('cors');
const axios = require('axios');
require("dotenv").config();

const PORT= process.env.PORT || 5000;
const API_KEY=process.env.OPENWEATHER_API_KEY;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/weather', async (req, res)=>{

    const {city}=req.query;

    if(!city){
        return res.status(400).json({error: "City name is required"});
    }

    try{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

        const response=await axios.get(url);
        const data=response.data;
        console.log(data);

    }catch(error){
        console.error("Error fetching weather data:", error);
        return res.status(500).json({error: "Failed to fetch weather data"});
    }
})

app.listen(PORT,()=>{
    console.log('server is runnig on port', PORT)
})