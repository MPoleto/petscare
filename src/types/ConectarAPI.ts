import { Imagem } from "./Imagem";

const myKey: string = config.MY_KEY;

async function buscarImagens(): Promise<Object[]> {
  const conexao = await fetch('https://api.pexels.com/v1/search?query=petcare&orientation=landscape&size=medium', {
    method: 'GET',
    headers: {
      'Authorization': myKey
    }
  });
  
  const response: object = await conexao.json();
  return response['photos'];
}

const imagens: Imagem[] = [];

(async function listaDeImagens(): Promise<Imagem[]> {
  try {
    const imagensAPI: Object[] = await buscarImagens();
    
    imagensAPI.forEach(i => {
      const url: string =  i['src']['landscape'];
      const nome: string = i['alt'];
      const nomeFotografo: string = i['photographer'];
      
      imagens.push({
        urlImagem: url,
        nomeImagem: nome,
        fotografo:nomeFotografo
      });
    });
  
    return imagens;
    
  } catch (error) {
    console.log("Ocorreu um erro durante acesso a API - " + error);
  }
})()

export default imagens;