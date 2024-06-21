// validando retorno do objeto API.cod;
import { buscandoapi } from "./APIclima.js";

// verifica os dados de entrada!!
export const VerifiInput = () => {
    let namecity = document.querySelector(".textcity").value;

    //validando texto do input .textcity;
    return namecity.length !== 0 ? ValidadreturnAPI(namecity) : alert("verifique os dados");
};

const ValidadreturnAPI = async (namecity) => {
    const infos = await buscandoapi(namecity);

    return infos;
};