# PetsCare - Clínica Veterinária

Criação de uma página web para uma clínica veterinária fictícia.  
Projeto criado do zero para praticar Typescript.

## Descrição

### Criar estrutura do projeto:  

- Diretório `dist` para os arquivos que vão ser usados no ambiente final (produção): `index.html` e subdiretórios para os arquivos de `CSS`, `Javascript` e `imagens`.
- Diretório `src` para os arquivos usados no desenvolvimento do projeto, que serão os arquivos de `Typescript`.
  - Arquivo `script.ts` - para centralizar todas as importações em apenas um arquivo usando os módulos ES6.
- Arquivo de configuração do `Typescript`: `tsconfig.json`.

### Desenvolver HTML e CSS:  

- Criar uma logo para representar a clínica veterinária.
- Aplicar tags semânticas ao HTML.
- Aplicar boas práticas CSS para nomenclatura das classes, criação de arquivos separados para os componentes e uso de variáveis.
- Seguir a abordagem *mobile-first* para a criação e estilização da página.
  - Menu da página para a versão mobile no estilo *menu hambúrguer* utilizando `input checkbox`.
- Usar `data attributes` para manipular os elementos HTML com o Typescript.  
- Criar um formulário para entrar em contato com a clínica.
- Incorporar um mapa do *Google Maps*, que usa `iframe`, para representar a localização da clínica.
- Adicionar um link para iniciar uma conversa direto no *Whatsapp*

### Typescript:  
- Consumir imagens de uma API para criar um banner com imagens aleatórias de pets.
  - Fazer requisição da `API Pexels` para pegar imagens
    - Arquivo de configuração para adicionar a chave de autorização da API
  - Definir um `type` `Imagem` para pegar só as informações necessárias da API: nome da imagem, url da imagem e nome do fotógrafo.
  - Alternar a exibição das imagens usando a função `setInterval`.
- Na versão mobile, criar uma função para fechar o menu lateral quando clicar em uma das opções do menu.
- Capturar as informações do formulário de contato com evento `addEventListener` 
  - Definir um `type` `Contato` para o objeto onde as informações do formulário vão ser adicionadas.  
  - Criar uma lista para adicionar os objetos.  
  - Armazenar a lista no `localStorage`.
  - Exibir confirmação de que a mensagem foi salva.
  - Limpar o formulário após a captura das informações.

## Referências

- [Ícones da biblioteca do Font Awesome](https://fontawesome.com/)
- [Fotos fornecidas por Pexels](https://www.pexels.com/api/documentation/#)
- [Curso da Alura - TypeScript na prática: implemente um projeto completo com TypeScript e módulos](https://cursos.alura.com.br/course/typescript-pratica-projeto-completo-typescript-modulos)