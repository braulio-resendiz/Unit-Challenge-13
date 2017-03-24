function Cube(length,mass,volume,density,surfaceArea){
  this.lenghth = length;
  this.mass = mass;
  this.volume = volume;
  this.density = density;
  this.surfaceArea = surfaceArea;
}

var Cube = new Cube()

function Pet(type, name, age) {
    this.type = type;
    this.name = name;
    this.age = age;
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

 var Pet1 = {
    type: "Dog",
    name: "Spot",
    age: 2,
    hairColor: "brown"
};

 var Pet2 = {
    type: "Cat",
    name: "Whiskers",
    age: 4,
    hairColor: "orange"
};

var pet1 = new Pet("Dog", "Spot", 2);
var pet2 = new Pet("Cat", "Whiskers", 4);
