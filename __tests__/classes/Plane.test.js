const Plane = require('../../classes/Plane');
const Person = require('../../classes/Person');
describe('Plane ', () => {  
const p2 = new Plane('Southwest', 'San Jose', 'Los Angeles');
it('should be a class', () => {
    expect(typeof Plane).toBe('function');
})
it('should create an instance of Plane', () => {
    expect(p2).toBeInstanceOf(Plane);
})
it('should have a property called airline', () => {
    expect(p2.airline).toEqual('Southwest');

})
it('should have a property called origin', () => {
    expect(p2.origin).toEqual('San Jose');

})
it('should have a property called destination', () => {
    expect(p2.destination).toEqual('Los Angeles');

})
it('should have a property called passengers', () => {
    expect(p2.getPassengers()).toEqual([]);
})
it('addPassenger should add a passenger to the passengers array', () => {
    const p1 = new Person('John', 'San Jose');
    p2.addPassenger(p1);
    expect(p2.getPassengers().length).toEqual(1);
})
})