//validando retorno do objeto API.cod
import { buscandoapi } from "./APIclima.js";

//verifica os dados de entrada!!
export const VerifiInput = () => {
    let namecity = document.querySelector(".textcity").value;

    //validando texto do input .textcity;
    return namecity.length !== 0 ? ValidadcityAPI(namecity) : alert("verifique os dados");
};

const ValidadcityAPI = async (namecity) => {
    const infos = await buscandoapi(namecity);

    return infos;
};