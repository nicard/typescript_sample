import {NegotiationModel} from "../models/index";
import {NegotiationParcel} from "../models/NegotiationParcel";

export class NegotiationService {

    getNegotiations(hanlder: HandlerFunction): Promise<NegotiationModel[]>{
        return fetch('http://localhost:3000/dados')
            .then(res => hanlder(res))
            .then(res => res.json())
            .then((data: NegotiationParcel[]) =>
                data
                    .map(d => new NegotiationModel(new Date(), d.vezes, d.montante))
            )
            .catch(error => {
                console.log(error.message);
                throw new Error("Unable to connect to server ");
            });
    }

}

export interface HandlerFunction {
    (res: Response):Response
}