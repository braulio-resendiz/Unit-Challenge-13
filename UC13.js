/* function Cube(length,mass,volume,density,surfaceArea){
  this.lenghth = length;
  this.mass = mass;
  this.volume = volume;
  this.density = density;
  this.surfaceArea = surfaceArea;
}

var Cube = new Cube()
*/
function Pet(name, type) {
    this.type = type;
    this.name = name;
    this.sleepy = 0;
    this.hunger = 0;
    this.awake = true
    this.speak = function() {
            if (this.type == "Dog") {
                this.hunger++;
                this.sleepy++;
                return "Woof! That means I love you!";
            }
            else if (this.type == "Cat") {
                this.hunger++;
                this.sleepy++;
                return "Ugh. meow.";
            }
        }
        /* this.shake = function () {
             if (this.type === "Dog") {
                 return "Ruff!";
             }
             else if (this.type === "Cat") {
                 return "Meow!";
             }
             else {
                 return "";
             }
         }
         this.nap = function () {
             if (this.awake == "true") {
                 return "zzz";
             }
         }
         this.nap = 0;
         this.fetch = 0; */
}
