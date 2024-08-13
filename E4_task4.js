function ElectricAppliance(name, consumption) {
    this.name = name;
    this.consumption = consumption;
    this.poweredUp = false;
}

ElectricAppliance.prototype.switch = function () {
    if (this.poweredUp === true) {
        this.poweredUp = false;
        console.log(this.name + ' is turned off.');
    } else {
        this.poweredUp = true;
        console.log(this.name + ' is turned on.');
    }
}

function WashingMachine(name, consumption, capacity) {
    this.name = name;
    this.consumption = consumption;
    this.capacity = capacity;
    this.economicMode = false;
}

WashingMachine.prototype = new ElectricAppliance();

WashingMachine.prototype.switchMode = function () {
    if (this.economicMode === true) {
        this.economicMode = false;
    } else {
        this.economicMode = true;
    }
}

WashingMachine.prototype.getConsumption = function () {
    if (this.poweredUp === true) {
        if (this.economicMode === true) {
            return this.consumption * 0.7;
        } else {
            return this.consumption;
        }
    } else {
        return 0;
    }
}

function ElectricKettle(name, consumption, capacity, color) {
    this.name = name;
    this.consumption = consumption;
    this.capacity = capacity;
    this.color = color;
}

ElectricKettle.prototype = new ElectricAppliance();

ElectricKettle.prototype.switch = function () {
    if (this.poweredUp === true) {
        this.poweredUp = false;
        console.log(this.name + ' is turned off.');
    } else {
        this.poweredUp = true;
        console.log(this.name + ' is turned on.');
        setTimeout( () => {
            this.poweredUp = false;
            console.log(this.name + ' is turned off.');
            }, 60000);
    }

}

ElectricKettle.prototype.getConsumption = function () {
    if (this.poweredUp === true) {
        return this.consumption;
    } else {
        return 0;
    }
}

function totalConsumption(...appliances) {
    let total = 0;
    for (let appliance of appliances) {
        total += appliance.getConsumption();
    }
    return total;
}

const bosch = new WashingMachine('bosch', 0.62, 8);
const tefal = new ElectricKettle('tefal', 1.2, 2, 'red')

bosch.switch();
tefal.switch();
bosch.switchMode();
console.log(totalConsumption(bosch, tefal));
bosch.switchMode();
console.log(totalConsumption(bosch));