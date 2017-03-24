/* function Cube(length,mass,volume,density,surfaceArea){
  this.lenghth = length;
  this.mass = mass;
  this.volume = volume;
  this.density = density;
  this.surfaceArea = surfaceArea;
}

var Cube = new Cube()
*/

function Pet(type, name) {
    this.type = type;
    this.name = name;
    this.hunger = 0;
    this.sleepy = 0;
    this.nap = 0;
    this.fetch = 0;
    this.shake = 0;

    this.speak = function() {
        if (this.type === "Dog") {
            return "Ruff!";
        } else if (this.type === "Cat") {
            return "Meow!";
        } else {
            return "";
        }
    }
}

 v
var pet1 = new Pet("Dog", "Buzz");
var pet2 = new Pet("Cat", "Whiskey");
