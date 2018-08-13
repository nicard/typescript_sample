import {NegotiationModel} from "./NegotiationModel";
import {WorkableObject} from "./WorkableObject";

export class List implements WorkableObject<NegotiationModel>{
    private _negotiations: NegotiationModel[] =[];

    add(negotiation: NegotiationModel):void{
        this._negotiations.push(negotiation);
    }

    toArray():NegotiationModel[]{
        return ([] as NegotiationModel[]).concat(this._negotiations);
    }

    toLogString(): void{
        console.log('Show Negotiations List');
        console.log(JSON.stringify(this._negotiations));
    }

    isEqual(object: NegotiationModel): boolean {
        return JSON.stringify(this._negotiations) == JSON.stringify(object._negotiations);
    }
}