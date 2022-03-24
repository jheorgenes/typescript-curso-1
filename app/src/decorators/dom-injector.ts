export function domInjector(seletor: string) { //Decoretor de propriedade (atributos da classe) que recebe o id do do elemento que será buscado no dom como parâmetro
    /*
        Importante lembrar que esse tipo de decorator é executado no momento em que a classe é criada
        No momento em que a classe negociacaoController é chamado, é executado a função abaixo.
    */
    return function(target: any, propertyKey: string) { //Pega o construtor ou o prototype e a propriedade 
        console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);

        let elemento: HTMLElement; //Definindo o elemento como HTMLElement
        /*
            getter criado para retornar o input do dom em tempo de execução. (runtime)
        */
        const getter = function() { //Buscando o getter da propriedade (atributo)
            if(!elemento) { //Se o elemento não for vazio ou null
                // Aqui atualiza a variável elemento com o elemento do dom
                elemento = <HTMLElement> document.querySelector(seletor); //Buscando o id do elemento no dom e quardando no elemento com o tipo HTMLElement
                console.log(`buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`);
            }
            // Se já estiver buscado o elemento, apenas irá retorná-lo sem buscar do DOM novamente
            return elemento; //Retorna o elemento
        }

        // Definindo pra classe Object (classe de objeto genérica) para definir suas propriedades
        Object.defineProperty(
            target, //Recebendo como parametro o construtor ou o prototype da classe
            propertyKey, //Recebendo como parametro a propriedade
            { get: getter } //Recebendo como parametro o get que está sendo recebido como o getter function (que busca os elementos do dom)
        )
    }
}