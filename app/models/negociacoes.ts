import { Negociacao } from './negociacao.js';

export class Negociacoes {

    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao); //método push é o mesmo que adicionar na lista.
    }

    public lista(): readonly Negociacao[] { //ReadonlyArray define que a lista deve ter os tipos corretos, especificados na classe Negociação
        return this.negociacoes;
        //return [...this.negociacoes]; //Definindo um spreed operatior para pegar cada item do array individualmente e adiciona nessa lista.
    }
}