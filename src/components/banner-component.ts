import imagens from "../types/ConectarAPI.js";

const banner: HTMLElement = document.querySelector('[data-banner]');

const imgElemento: HTMLElement = document.querySelector('[data-banner-img]');

let indiceListadeImagens: number = 0;

function exibeImagem(): void {
    imgElemento.setAttribute('src', imagens.at(indiceListadeImagens).urlImagem);
    imgElemento.setAttribute('alt', 
      `Photo by ${imagens.at(indiceListadeImagens).fotografo} on Pexels - 
      ${imagens.at(indiceListadeImagens).nomeImagem}`);
    banner.appendChild(imgElemento);
  
    indiceListadeImagens++;
  
    if (indiceListadeImagens == imagens.length) {
      indiceListadeImagens = 0;
    }
}

setInterval(exibeImagem, 8000);