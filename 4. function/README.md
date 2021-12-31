## function, forEach(bottom of this file) and map has three parameters

#### 1. Basic function 2. function expression 3.Arrow Function(ES6)

<hr>

# 1. Basic function
```
// structure:
function funaction_name(Arguments){
      //Body
}

```
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
<br><br>
<hr>

# 2. Function expression (A fuction assinged into a variable)
```
// structure:
let funaction_name= function (Arguments){
      //Body
}
```
## 1. Simple example
```
let printSometingEx = function (text){
      console.log(`Hello Niamul ${text}`);   //printing on console of browser
}
printSometingEx("Hasan");                   // calling the function
```
<br><br>
<hr>

# 3. Arrow function (Very important, for react):
```
// structure:
let funaction_name= () => {
      //Body
}
```
## 1. Simple example
```
let printSometingAr= (text) => {            
      console.log(`Hello Niamul ${text}`);  //printing on browser console
}
printSometingAr("Hasan");                   // function call
```
<br><br>
<hr>

## Comaparison of 3 types of functions

```
| // basic function                             | /// Expression function                       | // arrow function
|:----------------------------------------------|:--------------------------------------------: |--------------------------------------:|
| function printSometing( text="Islam"){&nbsp;  | let printSometingEx= function (text){         | let printSometingAr= (text) => {       //FUNCTION WORD GONE AND JUST AN ARROW '=>' ADDED.
|                                               |                                               |      
|       console.log(`Hello Niamul ${text}`);    |       console.log(`Hello Niamul ${text}`);    |           console.log(`Hello Niamul ${text}`);
|       }                                       |       }                                       |           }
 
 
//function calls
let last_name='Hasan';
printSometing(last_name);  // CALLING THE Basic function
printSometingEx(last_name);// CALLING THE Expression function 
printSometingAr(last_name);// CALLING THE Arrow function
```


<br><br>
<hr>

# Now,  1.forEach and 2. map  (both almost similar)
<hr>

# 1. forEach: (has three parameters)
### We can use 1 or 2 or all three parameters
<hr>

```
// structure:
var foods =['cake', 'Ice Cream', 'chocolates','Bread'];

// 1st parameter : Item 
// 2nd parameter : index
// 3rd parameter : whole array

foods.forEach( function() {function_body} );    // here, the fuction will be execuite for each element of the array 'foods'-> Here 4 times will execuite the function.
```
##  1. example: 
```



var foods =['cake', 'Ice Cream', 'chocolates','Bread'];
var number = [1,32,31,2];

// 1st parameter : Item
// 2nd parameter : index
// 3rd parameter : whole array
foods.forEach(function(item, index_of_the_item, whole_Array){  // here, we can use 1 or 2 parameters. 
                                                               // here, the paremeters name could be different
      console.log(`${item} er index: ${index_of_the_item} from array [${whole_Array}].\n`);
});

Output:
cake er index: 0 from array [cake,Ice Cream,chocolates,Bread].
Ice Cream er index: 1 from array [cake,Ice Cream,chocolates,Bread].
chocolates er index: 2 from array [cake,Ice Cream,chocolates,Bread].
Bread er index: 3 from array [cake,Ice Cream,chocolates,Bread].
```

##  2. example: declare function outside the forEach.
```
var foods =['cake', 'Ice Cream', 'chocolates','Bread'];

let func= function( i, index){                                   // not using whole array
      console.log(`${i} er index: ${index}\n`);
}

foods.forEach(func);     // calling function for forEach

Output:
cake er index: 0
Ice Cream er index: 1
chocolates er index: 2
Bread er index: 3
```

<br><br>
<hr>

# 2. Array iteration Using mapping: change one array to another--> By changing value
<hr>

```
// structure:
var foods =['cake', 'Ice Cream', 'chocolates','Bread'];

// 1st parameter : Item
// 2nd parameter : index
// 3rd parameter : whole array

let function_name = function(item){ // also can use indx and whole_array as parameter
      return `${item} is a food`;   // must return
}

let arry = foods.map(function_name);  // this 'function_name' is called for each item of 'foods' array
console.log(arry);

Output:
['cake is a food', 'Ice Cream is a food', 'chocolates is a food', 'Bread is a food']
```

### forEach on array by html or css selector 
```
/// let's apply forEach on this array.

// but // though it is an array, we can not travers this array directly by forEach
// converting the array// now we can use forEach
let listArr= Array.from(list); 

listArr.forEach(function(link, index_of_link){
      console.log(link, index_of_link);
});
```

## forEach can be used on list by 'querySelectorAll'
```
// change color by accessing each element by for each
let liodd= document.querySelectorAll('li:nth-child(even)');
liodd.forEach(function(item, index){
item.style.background = '#FAEBD7';
});
```