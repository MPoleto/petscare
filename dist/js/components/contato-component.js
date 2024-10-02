const formulario = document.querySelector('[data-form]');
const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputTelefone = document.querySelector('#telefone');
const inputMensagem = document.querySelector('#mensagem');
const contatoSalvo = document.querySelector('[data-salvo]');
const inputsLista = document.querySelectorAll('[required]');
const contatos = JSON.parse(localStorage.getItem('contatos')) || [];
formulario.addEventListener('submit', (evento) => {
    try {
        evento.preventDefault();
        const novoContato = {
            nome: inputNome.value,
            email: inputEmail.value,
            telefone: parseInt(inputTelefone.value),
            mensagem: inputMensagem.value
        };
        contatos.push(novoContato);
        localStorage.setItem('contatos', JSON.stringify(contatos));
        contatoSalvo.style.visibility = 'visible';
        formulario.reset();
    }
    catch (error) {
        alert(error.message);
    }
});
inputsLista.forEach((input) => {
    input.addEventListener('blur', () => verificarInput(input));
    input.addEventListener('invalid', evento => evento.preventDefault());
});
function verificarInput(input) {
    let mensagemErro = '';
    input.setCustomValidity('');
    erros.forEach(erro => {
        if (input.validity[erro]) {
            mensagemErro = mensagensErros[input.id][erro];
        }
    });
    const mensagemErroElemento = input.parentNode.querySelector('.mensagem-erro');
    const validarInput = input.checkValidity();
    if (!validarInput) {
        mensagemErroElemento.textContent = mensagemErro;
    }
    else {
        mensagemErroElemento.textContent = '';
    }
}
const erros = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort'
];
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
};
export {};
