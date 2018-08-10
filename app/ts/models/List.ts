import {NegotiationModel} from "./NegotiationModel";

export class List {
    private _negotiations: NegotiationModel[] =[];

    add(negotiation: NegotiationModel):void{
        this._negotiations.push(negotiation);
    }

    toArray():NegotiationModel[]{
        return ([] as NegotiationModel[]).concat(this._negotiations);
    }
}