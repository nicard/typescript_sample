class NegotiationModel {
    constructor(_date, _count, _value) {
        this._date = _date;
        this._count = _count;
        this._value = _value;
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
