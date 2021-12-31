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
#### 6. forEach and map (see no. 8 or => https://github.com/niamul64/javascriptLearning/tree/main/4.%20function )

```
let list = [4, 5, 6];

for (let i in list) { // see link, for obj iteration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
   console.log(i); // output: "0", "1", "2",
}

for (let i of list) { // can not iterate obj
   console.log(i); // output: "4", "5", "6"
}
```
#### 7. find the length of an string:    string_lenth= str.length
```
var i=0;
let name= "niamul"
for(i=0;i<name.length;i++){
   console.log(`value of i: ${i}`); // Here, ` ` = is the key above tab button on keyboard 
   console.log(name[i]);
}
```
#### 8. function, forEach and map (array iteration using mapping): https://github.com/niamul64/javascriptLearning/tree/main/4.%20function
#### 9. Object Methods or object function: if the function is inside an object then we call that object method: https://github.com/niamul64/javascriptLearning/tree/main/5.%20objectMethod
#### 10. Math (search on google) : https://www.w3schools.com/js/js_math.asp
#### 11. Date Object (search on google): https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_new_string
#### 12. Javascript Classes (OOP [like JAVA oop]): https://www.w3schools.com/js/js_classes.asp
#### 13. Javascript Classes static function: https://www.w3schools.com/js/js_class_static.asp
#### 14. DOM: Document Object model: When a web page is loaded, the browser creates a Document Object Model of the page.(HTML DOM model is constructed as a tree of Objects)
```
see : https://www.youtube.com/watch?v=XY96d0vEdFk
D = Document --> HTML page
O = Object   --> elements(head, body, H_tag, P_tah etc)
M = Model    -->  tree structure model: 
```
#### 15. DOM : https://github.com/niamul64/javascriptLearning/tree/main/6.%20DOM%20DocumentObjectModel
#### 16. Change css style or html tag by js code: https://github.com/niamul64/javascriptLearning/tree/main/6.%20DOM%20DocumentObjectModel
#### 17. getElementById  2. query selector: (Change css style or html tag by js code, for single element): https://github.com/niamul64/javascriptLearning/tree/main/6.%20DOM%20DocumentObjectModel
#### 18. MultiSelector: 1. getElementsByclassName('') 2. getElementsByTagName('') 3. querySelectorAll(''): https://github.com/niamul64/javascriptLearning/tree/main/6.%20DOM%20DocumentObjectModel
#### 19. forEach can be used on list by 'querySelectorAll'
#### 20. DOM traversing: https://github.com/niamul64/javascriptLearning/tree/main/6.%20DOM%20traverse
```
Navigating Between Nodes: https://www.w3schools.com/js/js_htmldom_navigation.asp
You can use the following node properties to navigate between nodes with JavaScript:

parentNode
childNodes[nodenumber]
firstChild
lastChild
nextSibling
previousSibling
```
#### 21. Create Replace and remove and HTML tag, class atribute: https://github.com/niamul64/javascriptLearning/tree/main/8.%20Create%20Replace%20and%20remove
