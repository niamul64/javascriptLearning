const person = {
      firstName: "John",
      lastName: "Doe",
      id: 5566,
      fullName : function() {                         // the method inside a object
        return this.firstName + " " + this.lastName;  // returning
      }
    };

console.log(person.fullName()) 