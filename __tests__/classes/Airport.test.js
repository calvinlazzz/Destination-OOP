const Plane = require('../../classes/Plane');
const Airport = require('../../classes/Airport');

describe('Airplane', () => {
    const airport1 = new Airport('SJC', 1234);
it('should be a class', () => {
    expect(typeof Airport).toBe('function');
})
it('should create an instance of Airport', () => {
    expect(airport1).toBeInstanceOf(Airport);
})
it('should have a property called name', () => {
    expect(airport1.name).toEqual('SJC');
})
it('should have a property called origin', () => {
    expect(airport1.airportcode).toEqual(1234);
})
it('should have a property called planes', () => {
    expect(airport1.getPlanes()).toEqual([]);
})
it('addPlane should add a plane to the planes array', () => {
    const p1 = new Plane('Southwest', 'San Jose', 'Los Angeles');
    airport1.addPlane(p1);
    expect(airport1.getPlanes().length).toEqual(1);
})
}
)
