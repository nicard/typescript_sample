System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegotiationController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegotiationController = class NegotiationController {
                constructor() {
                    this._list = new index_2.List();
                    this._negociacoesView = new index_1.NegotiationView('#negociacoesView');
                    this._messageView = new index_1.MessageView('#messageView');
                    this._inputDate = $('#date');
                    this._inputCount = $('#count');
                    this._inputValue = $('#value');
                    this._negociacoesView.update(this._list);
                }
                add(event) {
                    event.preventDefault();
                    const negotiation = new index_2.NegotiationModel(new Date(this._inputDate.val().replace(/-/g, ',')), parseInt(this._inputCount.val()), parseFloat(this._inputValue.val()));
                    this._list.add(negotiation);
                    this._negociacoesView.update(this._list);
                    this._messageView.update('Negotiation added');
                }
            };
            exports_1("NegotiationController", NegotiationController);
        }
    };
});
