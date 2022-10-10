
//https://www.freecodecamp.org/news/how-javascript-implements-oop/

/*
JavaScript isn't a classed-based langauge – it's is a prototype-based langauge
*/

const names = { 
    fNmae: 'adarsh',
    lName: 'shahi'
}

console.log(names);
console.log(names.hasOwnProperty('fName'));

 // fNmae: "adarsh" lName: "shahi"
// Constructor function

const Person = function(firstName, lastName){ // hmm looks like a normal function
    this.firstName = firstName;
    this.lastName = lastName;
}

// lets call it with 'new' keyword
// 4 things happen 
// 1. new empty object is created {}
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const adarsh = new Person('adarsh', 'shahi')
console.log(adarsh);
 