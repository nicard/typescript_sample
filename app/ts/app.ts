import {NegotiationController} from "./controllers/NegotiationController";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/js/modal';
let controller = new NegotiationController();

$('.form').submit(controller.add.bind(controller));
$('#btn-import').click(controller.importData.bind(controller));
