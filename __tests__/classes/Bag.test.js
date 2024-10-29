const Bag = require('../../classes/Bag.js');


    describe('Bag', () => {
        const bag1 = new Bag(10, 20);

        it('should be a class', () => {
            expect(typeof Bag).toBe('function');
        });

        it('should create an instance of Bag', () => {
            expect(bag1).toBeInstanceOf(Bag);
        });
        it('should have a property called weight', () => {
        expect(bag1.weight).toEqual(10);
        })
        it('should have a property called id', () => {
            expect(bag1.id).toEqual(20);
        })
        it('should have a person assigned to it', () => {
        expect(bag1.getOwner()).toBe(null);
        })
        // Add more tests as needed
    });

