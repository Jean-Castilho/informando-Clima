import { VerifiInput } from "./ValidInput.js";
import { LoadingPage} from "./LoadingPage.js"

/*=====Funçoes=====*/
//subindo o Array allcity para o localStorage utilizando o metodo setItem;
const Updatelocal = (AllCity) => {
  //estudar mais sobre metodos do proto: LocalStorage;
  localStorage.setItem("StorageCitys", JSON.stringify(AllCity));

};

//adicionando o objeto no array local Allcity;
export const AddCitys = async (AllCity) => {

  //validando a entrada de input;
  let City = await VerifiInput();

  LoadingPage(City)

  //guarda o valor no Array antes de subir pro LocalStorage;
  AllCity.push(City);

  //sobe o objeto para o armazenamento do browser;
  Updatelocal(AllCity);
  
};