class List {
    private _negotiations: NegotiationModel[] =[];

    add(negotiation: NegotiationModel):void{
        this._negotiations.push(negotiation);
    }

    toArray():NegotiationModel[]{
        return [].concat(this._negotiations);
    }
}