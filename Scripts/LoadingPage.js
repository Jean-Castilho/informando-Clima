export const LoadingPage = (City) => {


    let TagTemperat = document.getElementById("temperat");

    console.log(`Previsao da ultima cidade pesquisada:`,City);


    TagTemperat.innerHTML = ``;
    TagTemperat.innerHTML += `
    
        <span id="graus">
        <p>${parseInt(City.main.temp)}º</p>
        </span>


        <span id="water-dat">
        <img src="https://openweathermap.org/img/wn/${City.weather[0].icon}.png" alt="icon">
        <p>${City.weather[0].description}</p>        
        </span>

        <span id="max-min">

        <p>Max:  ${parseInt(City.main.temp_max)}º</p>
        <p>Min:  ${parseInt(City.main.temp_min)}º</p>

        </span>`;

    console.log(TagTemperat);

};