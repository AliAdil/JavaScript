const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio() {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };
  
  //adding personality2 field in person object 
  person['personality2']= "Test";

  //function without any method 
  function myTestFunctionForPrototype (){

  }
  //adding method to function
  myTestFunctionForPrototype.prototype.personality = function(){
    return true;
  }
  
  console.log(new myTestFunctionForPrototype().personality()+" "+person.personality2);

  const person2 = {
    name: {
      first: "Bob",
      last: "Smith"
    },
    name2: {
        first: "Bob",
        last: "Smsaith"
      },
      name3: {
        first: "Bob",
        last: "Smit2h"
      }
   
  };

 console.log (person2["name2"]["last"]);