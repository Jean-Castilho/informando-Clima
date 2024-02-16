//utilizando o metodo do browser para armazenar informaçoes no navegador local;
const localStoragCity = JSON.parse(localStorage.getItem("StorageCitys"));

//Iniciando LocalStorage;
export function InitLocalStorage() {
  let AllCity = localStorage.getItem("StorageCitys") !== null ? localStoragCity : [];
  
  return AllCity
}