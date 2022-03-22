import { DiasDaSemana } from './../enums/dias-da-semana.js';
import { MensagemView } from './../views/mensagem-view.js';
import { NegociacoesView } from './../views/negociacoes-view.js';
import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from './../models/negociacao.js';

export class NegociacaoController {
    
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes(); //Obtendo uma inferência de negociações
    private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this.inputData = <HTMLInputElement> document.querySelector('#data'); //Fazendo um cast explícito no ts para o objeto HTMLInputElement
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement; //Fazendo o mesmo cast de forma diferente
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void {
        // Chamada de um método estático para não precisar criar instância da classe
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if(!this.ehDiaUtil(negociacao.data)){
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas');
            return; //Parando a execução desse método.
        }
        
        this.negociacoes.adiciona(negociacao); //Adicionando uma negociação a uma lista de negociações.
        this.limparFormulario();
        this.atualizaView();
    }

    private ehDiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus(); //Definir focus no campo
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes); //Atualizando a view após adiconado
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
}