//imports
import { InitLocalStorage } from "./Scripts/localStorage.js";
import { AddCitys } from "./Scripts/AddCitys.js";

//Events;
window.addEventListener("load", (event) => {

  event.preventDefault();

  //iniciando armazenamento do browser;

  let StorageCitys = InitLocalStorage();

  console.log(`ultimas pesquisas:` , StorageCitys);

  //Tag HTML;
  const btnclima = document.querySelector("#pesquisa");

  btnclima.addEventListener("click", (event) => {
    event.preventDefault();

    AddCitys(StorageCitys);
    
  });

});