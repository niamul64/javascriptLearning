### function
```
// structure:
function funaction_name(Arguments){
      //Body
}

```
<hr>

## 1. simple function to print hello at browser console
```
function printSometing(text, text2){
      console.log(`Hello ${text} ${text2}`);
}
let last_name='Hasan';
printSometing("Niamul",last_name);              // calling the function to execuite
```
<img src="picS/basic function.JPG" alt="peng ting" width="85%" >
<br><br>

## 2. function with default value.
####  if we do not pass any value the it will use default value. value passed the it will use the passed values.
```
function printSometing(text="Md.", text2="H"){
      console.log(`Hello ${text} ${text2}`);
}

let last_name='Hasan';
printSometing();    // function calling without parameters // output: "Md. H"
```

## 3. function with return:
```
function printSometing(a=0, b=0){
      return a+b;                   //returning the sum of a,b
}

var a=3;
var b=2;
let result =printSometing(a,b);     // function call, getting the return of a+b
console.log(result);                // will print: 5 
```