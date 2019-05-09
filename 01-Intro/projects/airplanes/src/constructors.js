/* Object Constructors */
let Airplanes = '';
class Airplane {
    constructor(name, fuelCapacity, maxSpeed, minSpeed, staff) {
        this._name = name;
        this._fuelCapacity = fuelCapacity;
        this._maxSpeed = maxSpeed;
        this._minSpeed = minSpeed;
        this._staff = staff;
    }
    get name() {
        return this._name;
    }
    get fuelCapacity() {
        return this._fuelCapacity;
    }
    get maxSpeed() {
        return this._maxSpeed;
    }
    get minSpeed() {
        return this._minSpeed;
    }
    get range() {
        return this._maxSpeed - this._minSpeed;
    }
    get staff() {
        return this._staff;
    }
}

// Airplane creation test:
let b737 = new Airplane ('B737', 3000, 950, 250, ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']);
console.log(b737);
console.log(b737.name);
console.log(b737.fuelCapacity);
console.log(b737.maxSpeed);
console.log(b737.minSpeed);
console.log(b737.range);
console.log(b737.staff);