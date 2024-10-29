class Plane {
    #passengers
constructor(airline, origin, destination) {
    this.airline = airline;
    this.origin = origin;
    this.destination = destination;
    this.#passengers = [];}

addPassenger(passenger) {
    this.#passengers.push(passenger);
}
getPassengers() {
    return this.#passengers;
}


}

module.exports = Plane;