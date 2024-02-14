//validando retorno do objeto API.cod
import { buscandoapi } from "./APIclima.js";

//verifica os dados de entrada!!
export const VerifiInput = () => {
    let namecity = document.querySelector(".textcity").value;

    //validando texto do input .textcity;
    return namecity.length !== 0 ? Validadnamecity(namecity) : alert("verifique os dados");
};

const promiss = new Promise((aceito, recusado) => {

    const ValidAInfo = async (namecity) => {

        let value = await buscandoapi(namecity);

        return value.cod === 200 ? true : false;

    }

    let namecity = document.querySelector(".textcity").value;
    return ValidAInfo(namecity) ? aceito(namecity) : recusado(namecity);

});

const Validadnamecity = async (namecity) => {

    let result = await promiss.then(result => {
        return result

    })
        .catch(result => {
            return result

        })
        .finally(() => {
            console.log("teste concluido");
        });

};