import {MessageView, NegotiationView} from "../views/index";
import {List, NegotiationModel} from "../models/index";
import {domInject, throttle} from "../helpers/decorators/index";
import {NegotiationParcel} from "../models/NegotiationParcel";


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

    @throttle()
    importData() {

        function isOk(res: Response){
            if(res.ok)
                return res;
            else
                throw new Error(res.statusText);
        }

        fetch('http://localhost:8080/dados')
            .then(res => isOk(res))
            .then(res => res.json())
            .then((data: NegotiationParcel[]) => {
                data
                    .map(d => new NegotiationModel(new Date(), d.vezes, d.montante))
                    .forEach(negotiation => this._list.add(negotiation))
                this._negotiationView.update(this._list);
            })
            .catch(error => console.log(error.message));


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