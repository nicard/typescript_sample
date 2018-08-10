class NegotiationView  extends View<List> {

    template(itens:List) :string{
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
                        <td>${n.date.getDate()}/${n.date.getMonth()+1}/${n.date.getFullYear()}</td>
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

}