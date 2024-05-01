export const LoadingPage = (City) => {


  let TagarticleTemperat = document.getElementById("temperat");
  let TagSectionLocat = document.getElementById("location");
  let TagDivInfos = document.getElementById("infos-");

  console.log(`Previsao da ultima cidade pesquisada:`, City);


  TagarticleTemperat.innerHTML = ``;
  TagarticleTemperat.innerHTML += `
    
        <span id="graus">
        <p>${parseInt(City.main.temp)}&deg;C</p>
        </span>

        <span id="max-min">

        <p>Max:  ${parseInt(City.main.temp_max)}&deg;C</p>
        <p>Min:  ${parseInt(City.main.temp_min)}&deg;C</p>

        </span>

        <span id="icon-water-dat">
        <img src="https://openweathermap.org/img/wn/${City.weather[0].icon}.png" alt="icon">
        <p>${City.weather[0].description}</p>        
        </span>

    `;

  TagSectionLocat.innerHTML = ``;
  TagSectionLocat.innerHTML = `
    <article>

      <span class="material-symbols-outlined">
        location_on
      </span>

      <p>${City.name}/ ${City.sys.country}</p>


    </article>`;

  TagDivInfos.innerHTML = ``;
  TagDivInfos.innerHTML = `
      
    <div>

      <p>Vento</p>

        <span>
          <p>${parseFloat(City.wind.speed)} km/h</p>
        </span>

    </div>
      
    <div>

      <p>Pressao</p>

      <span>
        <p>${City.main.pressure}</p>
      </span>

    </div>

    <div>

      <p>Umidade</p>

      <span>${City.main.humidity}%</span>

    </div>

    <div>

      <p>Visibilidade</p>

      <span>${City.visibility}</span>

    </div>
      
      `;

  console.log(TagarticleTemperat, TagSectionLocat);

};