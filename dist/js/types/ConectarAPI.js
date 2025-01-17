const myKey = config.MY_KEY;
async function buscarImagens() {
    const conexao = await fetch('https://api.pexels.com/v1/search?query=petcare&size=medium&per_page=30', {
        method: 'GET',
        headers: {
            'Authorization': myKey
        }
    });
    const response = await conexao.json();
    return response['photos'];
}
const imagens = [];
(async function listaDeImagens() {
    try {
        const imagensAPI = await buscarImagens();
        imagensAPI.forEach(i => {
            if (imagens.length < 10) {
                const url = i['src']['landscape'];
                const nome = i['alt'];
                const nomeFotografo = i['photographer'];
                imagens.push({
                    urlImagem: url,
                    nomeImagem: nome,
                    fotografo: nomeFotografo
                });
            }
        });
        return imagens;
    }
    catch (error) {
        console.log("Ocorreu um erro durante acesso a API - " + error);
    }
})();
export default imagens;
