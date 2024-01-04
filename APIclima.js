const keyapi = "26fd334d6b582645ee9f618856253924";


//funçoes;

const validtext = (inputcity) => {
  //validando texto do input .textcity

  if (inputcity.length != 0) {
    let namecity = inputcity;
    return namecity;
  } else {
    alert("por favor prencha o campo!!");
    return false;
  }
};

const buscandoapi = async (city) => {
  const URLapi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${keyapi}&lang=pt_br`;

  const res = await fetch(URLapi);
  const infos = await res.json();

  console.log(res);

  return infos;
};

const exibinformations = async (city) => {
  const infos = await buscandoapi(city);

  console.log(infos);
};


// tags HTML
const inputcity = document.querySelector(".textcity");
const SearchBtn = document.querySelector(".btnclima");

SearchBtn.addEventListener(
  "click",

  (e) => {
    e.preventDefault();

    let namecity = validtext(inputcity.value);

    exibinformations(namecity);

  }
);
