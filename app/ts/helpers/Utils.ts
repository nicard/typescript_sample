import {Logged} from "../models/index";

export function log(...args:Logged[]){
    args.forEach(a => a.toLogString());
}