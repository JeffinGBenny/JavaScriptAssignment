class Rocket {
    constructor(name, totalCapacityKg) {
        this.astronauts = [];
        this.cargoItems = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(payload) {
        var weightSum = 0;
        payload.forEach(element => {
            weightSum = weightSum + element.massKg;
        });
        return weightSum;
    }
    currentMassKg() {
        var weightSum = this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
        return weightSum;
    }
    canAdd(payload) {
        if (this.currentMassKg() + payload <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    }
    addCargo(cargo) {
        if (this.canAdd(cargo.massKg) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    }
    addAstronaut(astronaut) {
        if (this.canAdd(astronaut.massKg) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    }
}
export { Rocket };
