import { Cargo } from "./Cargo.js";
import { Astronaut } from "./Astronaut.js";
import{PayLoad} from "./Payload.js";
class Rocket{
    name:string;
    totalCapacityKg:number;
    astronauts:Astronaut[]=[];
    cargoItems:Cargo[]=[];
    constructor( name:string, totalCapacityKg:number){
        this.name=name;
        this.totalCapacityKg=totalCapacityKg;
    }
     
     sumMass(payload):number{
       var weightSum=0;
       payload.forEach(element => {
        weightSum=weightSum+element.massKg;
        
       });
       return weightSum;
     }
    
     currentMassKg(): number{
        var weightSum=this.sumMass(this.cargoItems)+this.sumMass(this.astronauts)
        return weightSum;
     }
     canAdd(payload:number): boolean{
     if (this.currentMassKg() + payload <= this.totalCapacityKg){
     return true;
     }
     else{
         return false;
     }
    }

    addCargo(cargo: Cargo): boolean{
    
        if(this.canAdd(cargo.massKg) ===true){
            this.cargoItems.push(cargo);
            return true;
        }
        else{
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean{
    
        if(this.canAdd(astronaut.massKg) ===true){
            this.astronauts.push(astronaut);
            return true;
        }
        else{
            return false;
        }
    }


}
export{Rocket}