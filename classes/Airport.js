const Plane = require('./Plane');
class Airport {
    #planes
constructor(name, airportcode,planes) {
    this.name = name;
    this.airportcode = airportcode;
    this.#planes = [];

}
getPlanes() {
    return this.#planes;
}
addPlane(plane) {
    this.#planes.push(plane);
}
}


module.exports = Airport;