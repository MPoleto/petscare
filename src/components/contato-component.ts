import { Contato } from "../types/Contato";

const formulario: HTMLFormElement = document.querySelector('[data-form]');
const inputNome: HTMLInputElement = document.querySelector('#nome');
const inputEmail: HTMLInputElement = document.querySelector('#email');
const inputTelefone: HTMLInputElement = document.querySelector('#telefone');
const inputMensagem: HTMLTextAreaElement = document.querySelector('#mensagem');
const contatoSalvo: HTMLParagraphElement = document.querySelector('[data-salvo]');
const inputsLista: NodeListOf<HTMLInputElement> = document.querySelectorAll('[required]');

const contatos: Contato[] = JSON.parse(localStorage.getItem('contatos')) || [];


formulario.addEventListener('submit', (evento) => {
  try {
    evento.preventDefault();

    const novoContato: Contato = {
      nome: inputNome.value as string,
      email: inputEmail.value as string,
      telefone: parseInt(inputTelefone.value) as number,
      mensagem: inputMensagem.value as string
    }

    contatos.push(novoContato);
    localStorage.setItem('contatos', JSON.stringify(contatos));

    contatoSalvo.style.visibility = 'visible';

    formulario.reset();
    
  } catch (error) {
    alert(error.message);
  } 
});

inputsLista.forEach((input) => {
  input.addEventListener('blur', () => verificarInput(input));
  input.addEventListener('invalid', evento => evento.preventDefault());
});

function verificarInput(input: HTMLInputElement): void {
  let mensagemErro = '';
  input.setCustomValidity('');

  erros.forEach(erro => {
    if(input.validity[erro]) {
      mensagemErro = mensagensErros[input.id][erro];
    }
  });

  const mensagemErroElemento = input.parentNode.querySelector('.mensagem-erro');
  const validarInput = input.checkValidity();

  if (!validarInput) {
    mensagemErroElemento.textContent = mensagemErro;
  } else {
    mensagemErroElemento.textContent = '';
  }
}

const erros = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'tooShort'
]

const mensagensErros = {
  nome: {
    valueMissing: "O campo nome é obrigatório",
    patternMismatch: "Por favor, preencha um nome válido",
    tooShort: "Por favor, preencha um nome válido"
  },
  email: {
    valueMissing: "O campo e-mail é obrigatório",
    typeMismatch: "Por favor, preencha um e-mail válido",
    tooShort: "Por favor, preencha um e-mail válido"
  },
  telefone: {
    valueMissing: "O campo telefone é obrigatório",
    typeMismatch: "Por favor, preencha um telefone válido",
    patternMismatch: "Por favor, verifique se o telefone está correto",
    tooShort: "Por favor, verifique se o telefone está completo"
  },
  mensagem: {
    valueMissing: "O campo mensagem é obrigatório",
    patternMismatch: "Por favor, preencha com uma mensagem válida",
    tooShort: "Por favor, preencha com uma mensagem válida"
  }
}