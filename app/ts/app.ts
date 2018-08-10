import {NegotiationController} from "./controllers/NegotiationController";

let controller = new NegotiationController();

$('.form').submit(controller.add.bind(controller));
