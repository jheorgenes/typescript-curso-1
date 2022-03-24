export function espace(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]) {
        let retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === 'string') { //Testa se o retorno é do tipo string
            /*
            console.log(`@escape em ação na classe ${this.constructor.name} para o método ${propertyKey}`); //Retornando a classe e o método que está sendo executado
            */
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    }
    return descriptor;
}