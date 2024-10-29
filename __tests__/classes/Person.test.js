const Person = require('../../classes/Person.js');
const Bag = require('../../classes/Bag.js');
describe('Person ', () => {
    let p1 = new Person('John', 'San Jose');
    it('should be a class', () => {
        expect(typeof Person).toBe('function');
    });

    it('should create an instance of Person', () => {
        expect(p1).toBeInstanceOf(Person);
    });
    it('should have a property called name', () => {
    expect(p1.name).toEqual('John');
    })
    it('should have a property called destination', () => {
        expect(p1.destination).toEqual('San Jose');


})
it('should have a property called bags', () => {
    expect(p1.getBags()).toEqual([]);
})
it('addBag should add a bag to the bags array', () => {
    bag1 = new Bag(50, 1, p1);
    p1.addBag(bag1);
    expect(p1.getBags().length).toEqual(1);
})
})