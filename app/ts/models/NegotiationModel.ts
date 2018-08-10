export class NegotiationModel {

    constructor(readonly date: Date, readonly count: number, readonly value: number){
    }

    get volume() {
        return this.count * this.value;
    }
}