import {NegotiationModel} from "./NegotiationModel";
import {Logged} from "./Logged";

export class List implements Logged{
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
}