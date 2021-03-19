const express = require('express');
const bodyParser = require('body-parser');
const ejs = require("ejs");
const axios = require('axios');

let city; 
let data;
let cityName;
let countryName;
let temperature;
let feelsTemperature;
let icon;
let imgSrc;
let description;
let day;
let month;
let year;
let comma;
let unit;
let feelsLike;

let message; 

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
app.set('view engine', 'ejs');

app.get("/", function(req,res){

    let date = new Date();
    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();
    let months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

    res.render("index.ejs", {
        cityName: cityName,
        countryName: countryName,
        temperature: temperature,
        feelsTemperature: feelsTemperature,
        imgSrc: imgSrc,
        description: description,
        day: day,
        month: months[month],
        year: year,
        comma: comma,
        unit: unit,
        feelsLike: feelsLike
    });

})

app.post("/", function(req, res){
    const key = '84164ca56f727062dd7e3dbb7b6389ff';
    city = req.body.name;
    

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
        .then(data => {
            data = data.data;
            cityName = data.name;
            countryName = data.sys.country;
            temperature = Math.floor(data.main.temp);
            feelsTemperature = Math.floor(data.main.feels_like);
            icon = data.weather[0].icon;
            description = data.weather[0].description;
            imgSrc = `http://openweathermap.org/img/w/${icon}.png`;
            comma = ",";
            unit = "C";
            feelsLike = "Feels Like";
            res.redirect("/");
        })
        .catch(err => {
            res.render('warning');
        })
 
})

app.listen(process.env.PORT || 3000, function(req,res){
    console.log('server is up');
})