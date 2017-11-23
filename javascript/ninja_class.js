
function Ninja(name) {
    this.name = name;
    this.health = 100;
    let speed = 3;
    this.strength = 3;

    this.showStats = function () {
        console.log("(Speed: " + speed + " | Strength: " + this.strength + " | Health: " + this.health);
        return this;
    };

    this.punch = function (other) {
        // If instance is valid...
        if (other instanceof Ninja) {
            other.health -= 5;
            console.log(other.name + " was punched by " + this.name + " and lost -5 health.");
            console.log(other.name + " now has only " + other.health + " health remaining.");
            return this;
        }
        // Invalid instance
        else {
            console.log("I need a ninja dood!");
            return this;
        }
    };
}

Ninja.prototype.sayName = function() {
    console.log("Hello, my name is " + this.name + "... the best ninja ever!");
    return this;
};

Ninja.prototype.drinkSake = function() {
    this.health += 10;
    return this;
};

Ninja.prototype.kick = function(other) {
    // If instance is valid...
    if (other instanceof Ninja) {
        let deduction = this.strength * 15;
        other.health -= deduction;
        console.log(other.name + " was kicked by " + this.name + " and lost " + deduction + " health.");
        console.log(other.name + " now has only " + other.health + " health remaining.");
        return this;
    }
    // Invalid instance
    console.log("Give me a ninja dood!");
};

const ninja1 = new Ninja("Hyabusa");
const ninja2 = new Ninja("Ginger");
console.log(ninja1);
ninja2.sayName();
ninja2.showStats();
ninja1.drinkSake();
ninja1.showStats();
ninja1.punch(ninja2);               // Returns valid
ninja2.kick(ninja1);                // Returns valid
ninja2.kick(ninja1.name);           // Returns invalid
ninja1.punch(ninja2.strength);      // Returns invalid
ninja2.punch(ninja1);               // Returns valid


class ClassNinja {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.strength = 3;
    this.speed = 3;
    console.log("You created a new ClassNinja named " + this.name + "!");
  }

  // Example of a static function within an ES6 class constructor
  help() {
    console.log(`This is an example of an ES6 class constructor that creates a new ${this.constructor.name}.`);
  }

  displayName() {
    console.log(`This ${this.constructor.name} is named ${this.name}.`);
  }

  parentFunction() {
    return "This is a parent message.";
  }
}

ClassNinja.prototype.drinkSake = function() {
  this.health += 10;
  return this;
};

class Sensei extends ClassNinja {
  constructor(name, superPower) {
    // Needed before using 'this', setting instance to object using super
    let me = super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
    this._superPower = superPower;
    console.log(name + "'s super power is " + this._superPower + ".");
    this.speakWisdom = function() {
        me.drinkSake();
        console.log(`That was some tasty sake. My health is now ${this.health}.`);
        console.log(`Everything up must come down. This is a wise mesaage.`);
        return this;
    }
  }

  // Custom getter
  get superPower() {
      return this._superPower.toUpperCase();
  }

  // Custom setter
  set superPower(superPower) {
      this._superPower = superPower;
  }

  childFunction() {
      // Use super to call the parent method
      const message = super.parentFunction();
      console.log(message);
  }

}

let ninja3 = new ClassNinja("Javier");
console.log(ninja3);

const superSensei = new Sensei("Juniper", "freeze toes");
superSensei.displayName();
superSensei.help();
superSensei.childFunction();
console.log(superSensei.superPower);

// Change the sensei's super power
superSensei.superPower = "Turkey fingers";
console.log(superSensei.superPower);
superSensei.speakWisdom();