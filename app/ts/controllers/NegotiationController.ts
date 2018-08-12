import {MessageView, NegotiationView} from "../views/index";
import {List, NegotiationModel} from "../models/index";
import {domInject} from "../helpers/decorators/domInject";

export class NegotiationController {
    @domInject('#date')
    private _inputDate: JQuery;

    @domInject('#count')
    private _inputCount: JQuery;

    @domInject('#value')
    private _inputValue: JQuery;

    private _list = new List();
    private _negotiationView = new NegotiationView('#negociacoesView', true);
    private _messageView = new MessageView('#messageView');

    constructor(){
        this._negotiationView.update(this._list);
    }

    add(event: Event){
        event.preventDefault();
        let date = new Date(this._inputDate.val().replace(/-/g,','));
        if(!this.isWeekDay(date)){
            this._messageView.update('Only negotiation in Weekdays.');
            return;
        }

        const negotiation = new NegotiationModel(
            date,
            parseInt(this._inputCount.val()),
            parseFloat(this._inputValue.val())
        )

        this._list.add(negotiation);
        this._negotiationView.update(this._list);
        this._messageView.update('Negotiation added');
    }

    private isWeekDay(date :Date): boolean{
        if(date.getDay() == WeekDays.Sunday || date.getDay() == WeekDays.Saturday){
            this._messageView.update('Only negotiation in Weekdays.');
            return false;
        }
        return true;
    }
}

enum WeekDays {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday


}