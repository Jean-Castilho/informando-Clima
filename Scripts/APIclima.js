const keyapi = "26fd334d6b582645ee9f618856253924";

//funçoes;

const buscandoapi = async (city) => {
  const URLapi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${keyapi}&lang=pt_br`;

  const res = await fetch(URLapi);
  const infos = await res.json();

  return await infos;
};

const ExibeAPI = (infos) => {
  console.log(infos);
};

const alertSpan = (infos) => {
  console.log(`objeto nao aceito: cod ${infos.cod}`);
};

//exportando funcionalidade que percorerra o Array e exibir no front-end;

export async function RespostAPI(city) {
  const infos = await buscandoapi(city);

  //lembre de fazer esta vaildaçao com um pouco mais de atençao!!

  infos.cod !== 200 ? alertSpan(infos) : ExibeAPI(infos);
}
