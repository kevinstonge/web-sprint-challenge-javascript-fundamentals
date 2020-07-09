// 1. Copy and paste your prototype in here and refactor into class syntax.

class Cuboid {
    constructor(l,w,h) {
        this.l = l;
        this.w = w;
        this.h = h;
    }
    volume = () => this.l * this.w * this.h;
    surfaceArea = () => 2 * (this.l * this.w + this.l * this.h + this.w * this.h)
}

// Test your volume and surfaceArea methods by uncommenting the logs below:

const cuboid2 = new Cuboid(4,5,5);
console.info("cuboid created with a class:");
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130
//renamed to cuboid2 because prototypes.js is visible in browser via index.html and 'cuboid' was previously used there

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class Cube extends Cuboid {
    constructor(s) {
        super(s,s,s);
        this.s = s;
    }
    //All the formulae in Cuboid still work for cubes
    //but here are the simplified functions for cubes:
    // volume = () => this.s**3;
    // surfaceArea = () => 6*this.s**2;
} 

const testCube = new Cube(3);
console.info("cube:");
console.log(testCube.volume());
console.log(testCube.surfaceArea());

//note: the same functionality could be achieved with less code like this:

class Cuboid2 {
    constructor(l,w,h) {
        this.l = l;
        this.w = w || l;
        this.h = h || l;
    }
    volume = () => this.l * this.w * this.h;
    surfaceArea = () => 2 * (this.l * this.w + this.l * this.h + this.w * this.h)
}

const testCube2 = new Cuboid2(3);
const testCuboid2 = new Cuboid2(4,5,5);
console.info('no inheritance required for this functionality:')
console.log(testCube2.volume()); 
console.log(testCube2.surfaceArea());
console.log(testCuboid2.volume()); 
console.log(testCuboid2.surfaceArea());
