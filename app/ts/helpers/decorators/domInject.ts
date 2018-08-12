export function domInject(selector: string){
    return function(target: any, key: string){
        let element: JQuery;
        const getter = function(){
            if(!element){
                console.log(`Searching DOM element for selector ${selector} for inject in ${key}`);
                element = $(selector);
            }
            return element;
        }

        Object.defineProperty(target, key, {
            get: getter
        });
    }
}