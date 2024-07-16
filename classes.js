// Class Declaration
class Person {
    // Constructor
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  
    // Another Method
    haveBirthday() {
      this.age += 1;
      console.log(`Happy Birthday! I am now ${this.age} years old.`);
    }
  }
  
  // Creating an object of the class
  const person1 = new Person('Alice', 30);
  
  // Using methods
  person1.greet();         // Output: Hello, my name is Alice and I am 30 years old.
  person1.haveBirthday();  // Output: Happy Birthday! I am now 31 years old.
  