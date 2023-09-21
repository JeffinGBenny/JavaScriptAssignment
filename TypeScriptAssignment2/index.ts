import { Cargo } from "./Cargo.js";
import { Astronaut } from "./Astronaut.js";
import { Rocket } from "./Rocket.js";

var astronaut=new Astronaut(200,"Neil");
var cargo=new Cargo(2000,"steel");
var rocket= new Rocket("PSLV",5000)

console.log(rocket.addCargo(cargo));
console.log(rocket.addAstronaut(astronaut));

