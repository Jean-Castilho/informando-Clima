const keyapi = "26fd334d6b582645ee9f618856253924";

//funçoes;
export const buscandoapi = async (city) => {
  const URLapi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${keyapi}&lang=pt_br`;

  const res = await fetch(URLapi);

  const infos = await res.json();

  return infos;
};

