class ElectricAppliance {
    constructor(name, consumption) {
        this.name = name;
        this.consumption = consumption;
        this.poweredUp = false;
    }

    switch() {
        if (this.poweredUp === true) {
        this.poweredUp = false;
        console.log(this.name + ' is turned off.');
        } else {
        this.poweredUp = true;
        console.log(this.name + ' is turned on.');
        }
    }
}


class WashingMachine extends ElectricAppliance {
    constructor(name, consumption, capacity, poweredUp = false) {
        super(name, consumption, poweredUp);
        this.capacity = capacity;
        this.economicMode = false;
    }

    switchMode() {
        if (this.economicMode === true) {
        this.economicMode = false;
        } else {
        this.economicMode = true;
        }
    }

    getConsumption() {
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
}


class ElectricKettle extends ElectricAppliance {
    constructor(name, consumption, capacity, color, poweredUp = false) {
        super(name, consumption, poweredUp);
        this.capacity = capacity;
        this.color = color;
    }

    switch() {
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

    getConsumption() {
        if (this.poweredUp === true) {
            return this.consumption;
        } else {
            return 0;
        }
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
console.log(totalConsumption(bosch, tefal));
bosch.switchMode();
console.log(totalConsumption(bosch, tefal));
bosch.switch();
console.log(totalConsumption(bosch, tefal));
