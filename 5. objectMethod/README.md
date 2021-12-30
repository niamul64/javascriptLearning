## Object Methods or object function.

```
const person = {
      firstName: "John",
      lastName: "Doe",
      id: 5566,
      fullName : function() {                         // the method inside a object
        return this.firstName + " " + this.lastName;  // returning
      }
    };

console.log(person.fullName())                       // calling the function of 'person' object

Output:
John Doe
```