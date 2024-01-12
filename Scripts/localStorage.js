//utilizando o metodo do browser para armazenar informaçoes no navegador local;
const localStoragCity = JSON.parse(localStorage.getItem("StorageCity"));

//iniciando armazenamento local do site site;
let Allcity = localStorage.getItem("StorageCity") !== null ? localStoragCity : [];

//exibi as informaçao na iniciaçao do arquivo;
const inits = () => {
  Allcity.forEach((element) => {
    console.log(element);
  });
};

inits();

//adicionando indentificaçao;
const geraID = () => {
  return Allcity.length + 1;
};

//verifica os dados de entrada!!
const VerifiInput = (namecity) => {

  let city = {
    
    id: geraID(),
    city: namecity,

  };

  //validando texto do input .textcity;
  return namecity.length != 0 ? city : alert("verifique os dados");
};

//sobe o objeto para o armazenamento do browser;
const updatelocal = () => {
  //estude mais sobre o metodo LocalStorage;
  localStorage.setItem("StorageCity", JSON.stringify(Allcity));
};

const btnclima = document.querySelector(".btnclima");

//mesclar algumas funcionalidade com o localStorage.js

btnclima.addEventListener("click", (event) => {

  event.preventDefault();

  let namecity = document.querySelector(".textcity").value;

  //adicionando objeto no array local;
  Allcity.push(VerifiInput(namecity));

  updatelocal();
  //percorre o array de cidades no navegador local;
  inits();

});