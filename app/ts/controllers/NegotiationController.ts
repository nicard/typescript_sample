import {MessageView, NegotiationView} from "../views/index";
import {List, NegotiationModel} from "../models/index";

export class NegotiationController {
    private _inputDate: JQuery;
    private _inputCount: JQuery;
    private _inputValue: JQuery;
    private _list = new List();
    private _negociacoesView = new NegotiationView('#negociacoesView');
    private _messageView = new MessageView('#messageView');

    constructor(){
        this._inputDate = $('#date');
        this._inputCount = $('#count');
        this._inputValue= $('#value');
        this._negociacoesView.update(this._list);
    }

    add(event: Event){
        event.preventDefault();
        const negotiation = new NegotiationModel(
            new Date(this._inputDate.val().replace(/-/g,',')),
            parseInt(this._inputCount.val()),
            parseFloat(this._inputValue.val())
        )

        this._list.add(negotiation);
        this._negociacoesView.update(this._list);
        this._messageView.update('Negotiation added');
    }
}