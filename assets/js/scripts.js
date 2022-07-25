//Local onde será armazenada a API
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

//busca o botão change-cat no html
const catBtn = document.getElementById("change-cat");

//Opção 2: função para pegar as imagens
const getCats = async () => {
    const data = await fetch (BASE_URL)
        .then((res) => res.json())
        .catch((e) => console.log(e));

        return data.webpurl;
}
const loading = async () => {
    const catImg = document.getElementById("cat");
    catImg.src = await getCats();
}

//chama o loading para o site já iniciar com uma img
loading();
catBtn.addEventListener("click", loading);







/*
Opção 1: função para pegar as imagens com try/catch
const getCats = async () => {

   try {
    const data = await fetch(BASE_URL);
    const json = await data.json();//transforma em json

    //retirado da "https://thatcopy.pw/catapi/rest/";
    return json.webpurl;

   } catch (error) {
    console.log(error.message);
    
   }
};
*/