class Person{
  constructor(fName, bYear){
    this.firstName = fName
    this.birthYear = bYear 
  }

  //methods will be added to .prototype
  calcAge(){
    console.log(2022 - this.birthYear);
  }

  greet(){
    console.log(`Hey ${this.firstName}`);
  }
}

const adarsh = new Person('Adarsh', 2001)
console.log(adarsh);
adarsh.calcAge()
console.log(Person.prototype);

// Classes are not hoisted
// classes can be passed to function and retuned from function
// classes are executed in strict mode