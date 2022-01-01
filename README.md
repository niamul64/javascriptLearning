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
#### 22. Triger js code from HTML/ add event on a element of HTML file: https://github.com/niamul64/javascriptLearning/tree/main/9.%20EVENT%20add%20on%20HTML
#### 23. 1. onclick="" : https://github.com/niamul64/javascriptLearning/tree/main/9.%20EVENT%20add%20on%20HTML
###### events to triger js functiion: https://www.w3schools.com/js/js_events_examples.asp
###### onclick, ondblclick, onmouseover, onmousedown, onmouseup, onmouseout, onmousemove, onkeydown, onkeyup, onkeypress
#### 24. Event listener at js (addEventListener): https://github.com/niamul64/javascriptLearning/tree/main/9.%20EVENT%20add%20on%20HTML
#### 25. error handeling: try, catch, finally: (simple like java exception handeling) : https://www.w3schools.com/js/js_errors.asp
##### see video error handeling: https://github.com/niamul64/javascriptLearning/tree/main/10.%20error%20handeling%2C%20try%20catch
  
#### 26. Regular expression and pattern matching (exec): see video: https://github.com/niamul64/javascriptLearning/tree/main/11.%20Regular%20expression%20and%20pattern%20matching
##### in sort about 'exec()' see : https://www.w3schools.com/jsref/jsref_regexp_exec.asp
##### in sort about 'search(), replace(), test()' see : https://www.w3schools.com/js/js_regexp.asp
#### 27. literal ad meta Characters: https://github.com/niamul64/javascriptLearning/tree/main/11.%20Regular%20expression%20and%20pattern%20matching
##### short note: https://www.ibm.com/docs/en/rational-clearquest/9.0.1?topic=tags-meta-characters-in-regular-expressions
##### short note: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
#### 28. Character Sets, Quantifier and Grouping: https://github.com/niamul64/javascriptLearning/tree/main/11.%20Regular%20expression%20and%20pattern%20matching
##### short note: https://www.ibm.com/docs/en/rational-clearquest/9.0.1?topic=tags-meta-characters-in-regular-expressions
##### short note: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
#### 29. Shorthand Characters and Assertions: https://github.com/niamul64/javascriptLearning/tree/main/11.%20Regular%20expression%20and%20pattern%20matching
##### short note: https://www.ibm.com/docs/en/rational-clearquest/9.0.1?topic=tags-meta-characters-in-regular-expressions
##### short note: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
### See example to be clear: https://github.com/niamul64/javascriptLearning/tree/main/11.%20Regular%20expression%20and%20pattern%20matching