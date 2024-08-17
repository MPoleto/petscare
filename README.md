# Título

Criação de uma página web para uma clínica veterinária fictícia.  
Projeto criado do zero para praticar Typescript.

## Descrição

1º - Criar estrutura do projeto:
  - Diretório `dist` para os arquivos que vão ser usados no ambiente final (produção): `index.html` e subdiretórios para os arquivos de `CSS`, `Javascript` e `imagens`.
  - Diretório `src` para os arquivos usados no desenvolvimento do projeto, que serão os arquivos de `Typescript`.
    - Arquivo `main.ts` - para centralizar todas as importações em apenas um arquivo usando os módulos ES6.
  - Arquivo de configuração do `Typescript`: `tsconfig.json`.

2ª - Desenvolver HTML e CSS:
  - Criar uma logo para representar a clínica veterinária.
  - Seguir a abordagem *mobile-first* para a criação e estilização da página.
    - Menu da página para a versão mobile utilizando `input checkbox`.
  - Aplicar boas práticas CSS para nomenclatura das classes, criação de arquivos separados para os componentes e uso de variáveis.
  - Usar `data attributes` para manipular os elementos HTML com o Typescript.


3º - Typescript:
  - Fazer requisição da `API Pexels` para pegar imagens
    - Arquivo de configuração para adicionar a chave de autorização da API
    - Criar um `type` para pegar só as informações necessárias da API: o nome e a url da imagem.
    - Usar as imagens para criar um banner e alternar a exibição delas usando a função `setInterval`.

## Referências

- [Ícones da biblioteca do Font Awesome](https://fontawesome.com/)
- [Fotos fornecidas por Pexels](https://www.pexels.com/api/documentation/#)
- [Curso da Alura - TypeScript na prática: implemente um projeto completo com TypeScript e módulos](https://cursos.alura.com.br/course/typescript-pratica-projeto-completo-typescript-modulos)