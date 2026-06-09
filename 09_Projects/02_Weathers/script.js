document.addEventListener('DOMContentLoaded',()=>{
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-wether-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");

    const API_KEY = "fd014c5a40a2beb20d39dd8608787a80";

    getWeatherBtn.addEventListener('click',async()=>{
        const city = cityInput.value.trim();
        if(!city) return;

        // it may throw an error
        // server/database is always in another continent
        try{
           const wetherData = await fetchWetherData(city)
           displayWetherData(wetherData);
        }catch(error){
            showError()
        }
    })

    async function fetchWetherData(city){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const resp = await fetch(url);


        // console.log(typeof(resp));
        // console.log("Ressponse",resp);

        if(!resp.ok) {
            throw new Error('city not found')
        }
        const data = await resp.json();
        console.log(data)
        return data;
    }

    function displayWetherData(wetherData){
        // console.log(wetherData)
        const {name, main, weather} = wetherData;
        cityNameDisplay.textContent = name || '';
        temDisplay.textContent = main && main.temp ? `Temperature : ${main.temp} °C` : '';
        descriptionDisplay.textContent = weather && weather[0] && weather[0].description ? `Weather : ${weather[0].description}` : '';

        // unlock the display
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
        
    }
    function showError(){
        // hide weather info and show error message
        weatherInfo.classList.add('hidden');
        errorMessage.classList.remove('hidden');

    }
})







// const API_KEY = "fd014c5a40a2beb20d39dd8608787a80";
// async function fetchWetherData(city){
//         const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
//         const resp = await fetch(url);


//         console.log(typeof(resp));
//         console.log("Ressponse",resp);

//         if(!resp.ok) {
//             throw new Error('city not found')
//         }
//         const data = await resp.json();

//         console.log(data);
//     }
// fetchWetherData("jaipur")