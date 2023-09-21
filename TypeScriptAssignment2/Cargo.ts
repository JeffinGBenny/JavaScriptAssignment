import { PayLoad } from "./Payload.js";

class Cargo implements PayLoad{
    massKg:number;
    material:string;
    constructor( massKg:number, material:string){
        this.massKg=massKg;
        this.material=material;
    }
}
export{Cargo}