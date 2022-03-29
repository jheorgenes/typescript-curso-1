export abstract class View <T> { //Recebe um tipo genérico que será utilizado pelas classes filhas.

    protected elemento: HTMLElement; //Atributo da classe HTMLElement injetado.

    constructor(seletor: string) {
        // Fazendo isso, não é necessário buscar o elemento toda hora.
        const elemento = document.querySelector(seletor); //buscando no html o seletor e atribuíndo ao atributo elemento.
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique!`);
        }
    }

    protected abstract template(model: T): string; //O tipo que chegar da classe filha será implementado.

    //Renderizar o template no elemento capturado através do construtor
    public update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}