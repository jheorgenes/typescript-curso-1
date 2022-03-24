import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form'); //Escuta o que ocorre no formulário

if(form) { //Verifica se existe form, automaticamente confirma que não é nulo.
    form.addEventListener('submit', event => { //Quando pressionado o botão submit, adiciona o evento abaixo.
        event.preventDefault(); //Para o recarregamento da página
        controller.adiciona(); //Chama o método para adicionar.
    });
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe!.');
}

const botaoImporta = document.querySelector('#botao-importa');
if (botaoImporta) {
    botaoImporta.addEventListener('click', () => {
        controller.importaDados();
    })
} else {
    throw Error('Botão importa não foi encontrado');
}