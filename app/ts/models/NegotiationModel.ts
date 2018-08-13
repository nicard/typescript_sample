import {WorkableObject} from "./WorkableObject";

export class NegotiationModel implements WorkableObject<NegotiationModel> {

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

    isEqual(object: NegotiationModel): boolean {
        return this.date.getDate() == object.date.getDate()
            && this.date.getMonth() == object.date.getMonth()
            && this.date.getFullYear() == object.date.getFullYear();
    }
}