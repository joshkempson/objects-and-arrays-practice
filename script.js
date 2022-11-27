//arrow function

const playThat = () => { return "funky music"; }

const playThe = funky => {
    return funky + " music";
  }

console.log(playThat());
console.log(playThe("Happy"));

//callback
const notes = ['do', 're', 'me'];

notes.forEach((note) => console.log(note));

function myDisplayer(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);


  //object
  let user = {
    name: "John",
    age: 30,

    sayHi() {
        console.log(this.name + " says hi!")
    }
  }

console.log(user.name); //call property
console.log("name" in user); //test to see if a property called name
user.isAdmin = true;
console.log(user.isAdmin)
user.sayHi();

//Constructor
function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log("Hi I'm " + this.name);
    };
}

const ben = new Person("Ben");
ben.name;


