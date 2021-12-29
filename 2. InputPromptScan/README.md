## Input taking

## 1. prompt("");
```
prompt("Enter your name");
```
<img src="picS/basic prompt.JPG" alt="peng ting" width="100%" >
<br> <hr>
 
## 2. Now, take a variable and store the user input and print it on html page using all 4 method. 
4 printing methods are: https://github.com/niamul64/javascriptLearning/tree/main/1.%20OutPrint

```
// inside js file
var x;                                                // just delcearing a variable.

x = prompt("Enter your name");                        // will take a input from alart screen and save in 'x' variable.

document.getElementById("root").innerHTML="Hello "+ x;// printing in html tag which id is 'root'.
window.alert("Hello "+ x);                            // printing on alart tab
document.write("Hello "+ x);                          // printing in html page
console.log("Hello "+ x);                             // printing on browser console

```