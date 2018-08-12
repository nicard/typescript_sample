import {NegotiationModel} from "../models/index";
import {NegotiationParcel} from "../models/NegotiationParcel";

export class NegotiationService {

    getNegotiations(hanlder: HandlerFunction): Promise<NegotiationModel[]>{
        return fetch('http://localhost:8080/dados')
            .then(res => hanlder(res))
            .then(res => res.json())
            .then((data: NegotiationParcel[]) =>
                data
                    .map(d => new NegotiationModel(new Date(), d.vezes, d.montante))
            )
            .catch(error => console.log(error.message));
    }

}

export interface HandlerFunction {
    (res: Response):Response
}