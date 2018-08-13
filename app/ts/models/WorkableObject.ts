import {Logged} from "./Logged";
import {Equals} from "./Equals";

export interface WorkableObject<T> extends Logged, Equals<T>{

}