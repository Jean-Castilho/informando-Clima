//Tag HTML;
const btnclima = document.querySelector(".btnclima");

//utilizando o metodo do browser para armazenar informaçoes no navegador local;
const localStoragCity = JSON.parse(localStorage.getItem("StorageCitys"));

//Iniciando LocalStorage;

//exibi as informaçao na iniciaçao;
export function InitLocalStorage() {
  let AllCity =
    localStorage.getItem("StorageCitys") !== null ? localStoragCity : [];

  AllCity.length !== 0 ? LoadingCitys(AllCity) : false;

  btnclima.addEventListener("click", (event) => {
    event.preventDefault();

    AddCitys(VerifiInput(), AllCity);
  });
}

/*=====Funçoes=====*/

//verifica os dados de entrada!!
const VerifiInput = () => {
  let namecity = document.querySelector(".textcity").value;

  //validando texto do input .textcity;
  return namecity.length != 0 ? namecity : alert("verifique os dados");
};

//adicionando indentificaçao;
const GeraID = (allcity) => {
  return allcity.length + 1;
};

//adicionando o objeto no array local Allcity;
const AddCitys = (namecity, AllCity) => {
  //objeto do array;
  const city = {
    ID: GeraID(AllCity),
    city: namecity,
  };

  //guarda o valor no Array antes de subir pro LocalStorage;
  AllCity.push(city);

  //sobe o objeto para o armazenamento do browser;
  Updatelocal(AllCity);

  //percorre o array de cidades no armazenamento do navegador local;
  LoadingCitys(AllCity);
};

//subindo o Array allcity para o localStorage utilizando o metodo setItem;
const Updatelocal = (allcity) => {
  //estudar mais sobre metodos do proto: LocalStorage;
  localStorage.setItem("StorageCitys", JSON.stringify(allcity));
};

//importando funcionalidade do APIclima.js;
import { RespostAPI } from "./APIclima.js";

//percorrendo o array do localStorage;
const LoadingCitys = (allcity) => {
  allcity.forEach((element) => {
    //Percorre o Array exibindo o objeto da API referente ao nome da cidade
    RespostAPI(element.city);
  });
};
