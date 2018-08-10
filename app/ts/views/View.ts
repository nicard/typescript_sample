import {executionTimeLogger} from "../helpers/decorators/executionTimeLogger";

export abstract class View<T> {
    private _element: JQuery;
    private _escape: boolean;

    constructor(seletor: string, escape: boolean = false) {
        this._element = $(seletor);
        this._escape = escape;
    }

    update(model: T) {
        let template = this.template(model);
        if(this._escape)
            template.replace(/<script>[\s\S]*?<\/script>/, '');
        this._element.html(this.template(model));
    }

    abstract template(model: T): string;
}
