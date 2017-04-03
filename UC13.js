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
    this.speak = function () {
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
    this.eat = function () {
        if (this.type == "Dog") {
            this.hunger = 0;
            this.sleepy++;
            return "Nom nom nom nom. Yum, thank you for this delicious food! I love you!";
        }
        else if (this.type == "Cat") {
            this.hunger = 0;
            this.sleepy++;
            return "Ugh, I guess I'll eat this.";
        }
    }
    this.nap = function () {
        if (this.awake == true) {
            this.sleepy = 0;
            this.awake = false;
            return "Zzzz...";
        }
        else if (this.awake == false) {
            return "Zzzz...";
        }
    }
    this.wakeUp = function () {
        if (this.type == "Cat" && this.awake == true) {
            this.sleepy = 0;
            this.hunger = 4;
            this.awake = false;
            return "Ugh, I'm awake now. Is there anything to eat around here?";
        }
        else if (this.type == "Dog" && this.awake == true) {
            this.sleepy = 0;
            this.hunger = 4;
            this.awake = false;
            return "I'm awake! Let's eat and then play! I love you!";
        }
        else if (this.awake == false) {
            return "Zzzz...";
        }
    }
    this.rollOver = function () {
        if (this.type == "Dog" && this.hunger < 5 && this.awake < 4) {
            this.sleepy++;
            this.hunger++;
            return "Rolling! Now what? I love you!";

        }else if (this.type == "Dog" && this.hunger > 5) {
                return "I'm hungry! Let's eat first. I love you!";
            }
            else if (this.type == "Dog" && this.sleepy > 5) {
                return "Yawn. Let's play after a nap. I love you!"
            }

        if (this.type == "Cat" && this.hunger < 5 && this.awake < 4) {
            this.sleepy++;
            this.hunger++;
            return "Ugh. I'm a cat. I only roll over if I want to.";
        }
            else if (this.type == "Cat" && this.hunger > 5) {
                return "Ugh. Feed me before I'll even think about it.";
            }
            else if (this.type == "Cat" && this.sleepy > 5) {
                return "Ugh. I need a 12 hour nap first."
            }
        }

    this.fetch = function () {
        if (this.type == "Cat" && this.hunger <= 4 && this.awake <= 5) {
            return "Ugh. I'm a cat. I don't fetch.";
        }
        else if (this.type == "Dog" && this.hunger <= 5 && this.awake <= 4) {
            return "Must get the stick! I love you!";
        }
        else if (this.type == "Dog" && this.awake >= 4) {
            return "Yawn. Let's play after a nap. I love you!";
        }
        else if (this.type == "Dog" && this.hunger >= 5) {
            return "I'm hungry! Let's eat first. I love you!";
        }
        else if (this.type == "Cat" && this.hunger > 5 && this.awake > 4) {
            return "Ugh. I need a 12 hour nap first.";
        }
    }
}
