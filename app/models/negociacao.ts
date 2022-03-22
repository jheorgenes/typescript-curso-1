export class Negociacao {

    constructor(
        private _data: Date,
        //Ao declarar public readonly, eu defino que esse atributo é o mesmo que privado.
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    // Programação defensiva
    get data(): Date {
        //Definindo uma nova referência para data para que ela não seja modificada.
        const data = new Date(this._data.getTime()); //getTime() retorna a data em milisegundos e o construtor do Objeto Date entende e converte.
        return data;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        /* Atribuíndo valores as variáveis conforme chegou do input */
        const exp = /-/g; //Criando uma expressão regurar identificando o ífem
        const date = new Date(dataString.replace(exp, ',')); //convertendo a string data pegando um regex e substituíndo com virgula
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}