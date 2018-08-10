class NegotiationController {
    constructor() {
        this._list = new List();
        this._negociacoesView = new NegotiationView('#negociacoesView');
        this._messageView = new MessageView('#messageView');
        this._inputDate = $('#date');
        this._inputCount = $('#count');
        this._inputValue = $('#value');
        this._negociacoesView.update(this._list);
    }
    add(event) {
        event.preventDefault();
        const negotiation = new NegotiationModel(new Date(this._inputDate.val().replace(/-/g, ',')), parseInt(this._inputCount.val()), parseFloat(this._inputValue.val()));
        this._list.add(negotiation);
        this._negociacoesView.update(this._list);
        this._messageView.update('Negotiation added');
    }
}
