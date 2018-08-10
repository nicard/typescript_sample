System.register(["../views/MessageView", "../views/NegotiationView", "../models/List", "../models/NegotiationModel"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MessageView_1, NegotiationView_1, List_1, NegotiationModel_1, NegotiationController;
    return {
        setters: [
            function (MessageView_1_1) {
                MessageView_1 = MessageView_1_1;
            },
            function (NegotiationView_1_1) {
                NegotiationView_1 = NegotiationView_1_1;
            },
            function (List_1_1) {
                List_1 = List_1_1;
            },
            function (NegotiationModel_1_1) {
                NegotiationModel_1 = NegotiationModel_1_1;
            }
        ],
        execute: function () {
            NegotiationController = class NegotiationController {
                constructor() {
                    this._list = new List_1.List();
                    this._negociacoesView = new NegotiationView_1.NegotiationView('#negociacoesView');
                    this._messageView = new MessageView_1.MessageView('#messageView');
                    this._inputDate = $('#date');
                    this._inputCount = $('#count');
                    this._inputValue = $('#value');
                    this._negociacoesView.update(this._list);
                }
                add(event) {
                    event.preventDefault();
                    const negotiation = new NegotiationModel_1.NegotiationModel(new Date(this._inputDate.val().replace(/-/g, ',')), parseInt(this._inputCount.val()), parseFloat(this._inputValue.val()));
                    this._list.add(negotiation);
                    this._negociacoesView.update(this._list);
                    this._messageView.update('Negotiation added');
                }
            };
            exports_1("NegotiationController", NegotiationController);
        }
    };
});
