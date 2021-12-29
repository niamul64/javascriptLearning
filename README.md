### JavascriptLearning

### Note:
```
Line: document.getElementById("root")
//document = from html document
//find the element which id is 'root'.
```

#### 1. Printing/ Display/ output a text: https://github.com/niamul64/javascriptLearning/tree/main/1.%20OutPrint
#### 2. Input/ prompt/ scan/ user input taking: https://github.com/niamul64/javascriptLearning/tree/main/2.%20InputPromptScan
```
var in_str=  '2';
var in_int= parseInt(in_str);       //converting to integer
console.log(`value: ${int_int}`);  // Here, ` ` = is the key above tab button on keyboard 
```
#### 3. Condition/ control flow/ if, else/ switch case: https://github.com/niamul64/javascriptLearning/tree/main/3.%20if%20else%2C%20condition%2C%20controlFlow
#### 4. Loop/ while/ for: similar to c, c++ 
#### 5. "for in"(gives index)-->works on--> string/array/object | and | "for of"(gives value)-->works on--> string/ array
```
let list = [4, 5, 6];

for (let i in list) { // see link, for obj iteration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
   console.log(i); // output: "0", "1", "2",
}

for (let i of list) { // can not iterate obj
   console.log(i); // output: "4", "5", "6"
}
```
#### 6. find the length of an string:    string_lenth= str.length
```
var i=0;
let name= "niamul"
for(i=0;i<name.length;i++){
   console.log(`value of i: ${i}`); // Here, ` ` = is the key above tab button on keyboard 
   console.log(name[i]);
}
```
#### 7. function: https://github.com/niamul64/javascriptLearning/tree/main/4.%20function