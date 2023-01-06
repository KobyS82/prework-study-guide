//CREATING OBJECTS

//object literal
const myObj = {Name: 'koby'};

//constructor function
function MyConstructorFn(name){
  this.name = name;
}
const koby = new MyConstructorFn('koby')
const torre = new MyConstructorFn('torre')

//syntax sugar
class Shape {
  // Just like constructor functions, classes can accept arguments
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  printInfo() {
    console.log(`Area: ${this.area}`);
    console.log(`Perimeter: ${this.perimeter}`);
  }
}

const shape = new Shape(25, 25);
//shape = {area: 25, perimeter: 25, printInfo: function}

shape.printInfo();
