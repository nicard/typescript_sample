import {NegotiationController} from "./controllers/NegotiationController";

let controller = new NegotiationController();

$('.form').submit(controller.add.bind(controller));
$('#btn-import').click(controller.importData.bind(controller));
