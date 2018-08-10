export class NegotiationModel {

    constructor(private _date: Date, private _count: number, private _value: number){
    }

    get date() {
        return this._date;
    }

    get count() {
        return this._count;
    }

    get value() {
        return this._value;
    }

    get volume() {
        return this._count * this._value;
    }
}