const keyapi = "26fd334d6b582645ee9f618856253924";

/* export const GeoLocation = async (lat, lon) => {

const geolocat = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={current}&appid=${keyapi}`;

const GETvalue = await fetch(geolocat);

const infos = await GETvalue.json();

return infos

}
*/

// funçoes;
export const buscandoapi = async (city) => {
  const URLapi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${keyapi}&lang=pt_br`;

  const res = await fetch(URLapi);

  const infos = await res.json();

  return infos;
};

