//utilizando o metodo do browser para armazenar informaçoes no navegador local;
const localStoragCity = JSON.parse(localStorage.getItem("StorageCitys"));

//importando funcionalidades;
import { buscandoapi } from "./APIclima.js";
import { VerifiInput } from "./ValidInput.js";

//Iniciando LocalStorage;
export function InitLocalStorage() {
  let AllCity = localStorage.getItem("StorageCitys") !== null ? localStoragCity : [];

  AllCity.length !== 0 ? LoadingCitys(AllCity) : false;

  //Tag HTML;
  const btnclima = document.querySelector("#pesquisar");

  btnclima.addEventListener("click", (event) => {
    event.preventDefault();

    AddCitys(VerifiInput(), AllCity);
  });

}

//percorrendo o array do localStorage;
const LoadingCitys = (allcity) => {

  allcity.forEach((element) => {
    //Percorre o Array exibindo o objeto da API referente ao nome da cidade;
    buscandoapi(element.city);
  });

};

//adicionando o objeto no array local Allcity;
export const AddCitys = (namecity, AllCity) => {

  console.log(namecity);

  //objeto do array; 
  const city = {
    ID: GeraID(AllCity),
    city: namecity,
  };

  //guarda o valor no Array antes de subir pro LocalStorage;
  AllCity.push(city);

  //sobe o objeto para o armazenamento do browser;
  Updatelocal(AllCity);

  /*percorre o array de cidades no armazenamento do navegador local;
  LoadingCitys(AllCity);*/
};

/*=====Funçoes=====*/
//adicionando indentificaçao;
const GeraID = (allcity) => {
  return allcity.length + 1;
};

//subindo o Array allcity para o localStorage utilizando o metodo setItem;
const Updatelocal = (allcity) => {
  //estudar mais sobre metodos do proto: LocalStorage;
  localStorage.setItem("StorageCitys", JSON.stringify(allcity));
};