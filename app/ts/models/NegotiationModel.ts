import {Logged} from "./Logged";

export class NegotiationModel implements Logged {

    constructor(readonly date: Date, readonly count: number, readonly value: number){
    }

    get volume() {
        return this.count * this.value;
    }

    toLogString(): void{
        console.log(`
        Date: ${this.date}
        Count: ${this.count}
        Value: ${this.value}
        Volume: ${this.volume}
        `);
    }
}