
//imports
import { InitLocalStorage } from "./Scripts/localStorage.js";


//Events
window.addEventListener("load", (event) => {
  event.preventDefault();

  //iniciando armazenamento do browser;
  InitLocalStorage();

});
