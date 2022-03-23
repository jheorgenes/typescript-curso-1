export abstract class View <T> { //Recebe um tipo genérico que será utilizado pelas classes filhas.

    protected elemento: HTMLElement; //Atributo da classe HTMLElement injetado.
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) { //Interrogação significa que o parâmetro é opcional
        // Fazendo isso, não é necessário buscar o elemento toda hora.
        const elemento = document.querySelector(seletor); //buscando no html o seletor e atribuíndo ao atributo elemento.
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique!`);
        }

        if(escapar) { //Se autorizado escapar, atribuia o escape.
            this.escapar = escapar;
        }
    }

    protected abstract template(model: T): string; //O tipo que chegar da classe filha será implementado.

    //Renderizar o template no elemento capturado através do construtor
    public update(model: T): void {
        let template = this.template(model);

        if(this.escapar) { //Se houver escape, valide o template se o mesmo tem scripts maliciosos.
            template = template.replace(/<script>[\s\S]*?<\/script>/, ''); //Buscando qualquer script HTML e converte em scring vazia.
        }
        //console.log(template);
        this.elemento.innerHTML = template;
    }
}