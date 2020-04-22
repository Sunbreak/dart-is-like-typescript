class Shape {
    numberOfSides = 0;

    constructor(numberOfSides: number) {
        this.numberOfSides = numberOfSides;
    }

    simpleDescription(){
        return `A shape with ${this.numberOfSides} sides.`;
    }
}

let shape2 = new Shape(4)