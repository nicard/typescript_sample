export function executionTimeLogger(inSeconds: boolean = false){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]){
            let divisor = 1;
            let unidade = 'milisegundos'
            if(inSeconds) {
                divisor = 1000;
                unidade = 'segundos';
            }

            console.log('-----------------------')
            console.log(`Parâmetros do método ${propertyKey}: ${JSON.stringify(args)}`);
            const t1 = performance.now();
            const result = metodoOriginal.apply(this, args);
            console.log(`Resultado do método: ${JSON.stringify(result)}` )
            const t2 = performance.now();
            console.log(`${propertyKey} demorou ${(t2 - t1)/divisor} ${unidade}`);
            console.log('-----------------------')
            return result;
        }
        return descriptor;
    }
}