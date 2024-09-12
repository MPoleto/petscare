import { Contato } from "../types/Contato";

const formulario: HTMLFormElement = document.querySelector('[data-form]');
const inputNome: HTMLInputElement = document.querySelector('#nome');
const inputEmail: HTMLInputElement = document.querySelector('#email');
const inputTelefone: HTMLInputElement = document.querySelector('#telefone');
const inputMensagem: HTMLTextAreaElement = document.querySelector('#mensagem');
const contatoSalvo: HTMLTextAreaElement = document.querySelector('[data-salvo]');

const contatos: Contato[] = JSON.parse(localStorage.getItem('contatos')) || [];


formulario.addEventListener('submit', (evento) => {
  try {
    evento.preventDefault();
  
    if (!formulario.checkValidity()) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

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
