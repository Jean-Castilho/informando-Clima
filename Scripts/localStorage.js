// A propriedade permite acessar um objeto Storage local.
const localStoragCity = JSON.parse(localStorage.getItem("StorageCitys"));

// Iniciando LocalStorage;
export function InitLocalStorage() {
  let AllCity = localStorage.getItem("StorageCitys") !== null ? localStoragCity : [];
  
  return AllCity
};