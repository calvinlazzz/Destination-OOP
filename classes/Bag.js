class Bag {
     #owner
constructor(weight, id, owner) {
    this.weight = weight;
    this.id = id;

    owner = null;
    this.#owner = owner;
    
    
}
getOwner() {
    return this.#owner;

}
setOwner(owner) {
    this.#owner = owner;
}
}

module.exports = Bag;
// In Bag.js
