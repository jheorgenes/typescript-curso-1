import { Negociacao } from '../models/negociacao.js';
import { NegociacoesDoDia } from '../interfaces/negociacao-do-dia.js';

export class NegociacoesService {

    public obterNegociacoesDoDia(): Promise<Negociacao[]>{ //Metodo estabelecido para devolver uma Promice (objeto) com um array de Negociação
        // Função promess
        return fetch('http://localhost:8080/dados') //Operação assincrona que busca no caminho proposto e faz a instrução abaixo
            .then(res => res.json()) //Pega a resposta e retorna a mesma convertida para JSON
            .then((dados: NegociacoesDoDia[]) => { //Pega um array de dados (do tipo NegociacoesDoDia Intercace)
                return dados.map(dadoDeHoje => { //Mapea esse array de dados, pra cada dado faça a ação abaixo e retorne esses dados
                    // retorna uma instancia de negociação completa com as informações do dado do array.
                    return new Negociacao(
                        new Date(), 
                        dadoDeHoje.vezes,
                        dadoDeHoje.montante
                    )
                })
            })
    }
}