System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View_1, NegotiationView;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            NegotiationView = class NegotiationView extends View_1.View {
                template(itens) {
                    return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Count</th>
                        <th>Value</th>
                        <th>Volume</th>
                    </tr>
                </thead>
    
                <tbody>
                ${itens.toArray().map(n => `
                    <tr>
                        <td>${n.date.getDate()}/${n.date.getMonth() + 1}/${n.date.getFullYear()}</td>
                        <td>${n.count}</td>
                        <td>${n.value}</td>
                        <td>${n.volume}</td>
                    </tr> 
                `).join('')}
                </tbody>
    
                <tfoot>
                </tfoot>
            </table>
        `;
                }
            };
            exports_1("NegotiationView", NegotiationView);
        }
    };
});
