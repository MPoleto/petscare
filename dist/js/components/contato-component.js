const formulario = document.querySelector('[data-form]');
const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputTelefone = document.querySelector('#telefone');
const inputMensagem = document.querySelector('#mensagem');
const contatoSalvo = document.querySelector('[data-salvo]');
const contatos = JSON.parse(localStorage.getItem('contatos')) || [];
formulario.addEventListener('submit', (evento) => {
    try {
        evento.preventDefault();
        if (!formulario.checkValidity()) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
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
export {};
