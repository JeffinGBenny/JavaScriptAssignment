import {PayLoad} from "./Payload.js"
class Astronaut implements PayLoad{
    massKg:number;
    name:string;
constructor( massKg:number, name:string){
    this.massKg=massKg;
    this.name=name;
}
}
export{Astronaut}