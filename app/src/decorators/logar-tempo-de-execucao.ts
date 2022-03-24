export function logarTempoDeExecucao(emSegundos: boolean = false) { //Definindo um valor padrão para o parametro.
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value; //Método original recebe o descriptor função.
        let divisor = 1;
        let unidade = 'milisegundos';
        if(emSegundos) {
            divisor = 1000;
            unidade = 'segundos';
        }

        // função que recebe uma quantidade indefinida de parâmetros de todos os tipos
        descriptor.value = function (...args: any[]) { //Spreed operatior
            const t1 = performance.now(); //calcula o tempo antes de executar o método.
            const retorno = metodoOriginal.apply(this, args); //Apply permite passar um contexto e um array de parametros.
            const t2 = performance.now(); //Calcula o tempo depois de executar o método.
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1)/divisor} ${unidade}`); //Imprime o tempo gasto para executar o método.
            retorno; //Retorna o retorno da função. 
        }
        return descriptor;
    }
}