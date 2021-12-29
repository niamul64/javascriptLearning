# Similar to c, c++ programming language
## If, else conditions / control flow/ switch case

## 1. if (condition){ body } else if(condition){ body } else{body}
```
var x;                                // declearing a variable
x = prompt("Enter your name");        // taking input


if (x ) {                             // if the input is not null then execuite
      document.getElementById("root").innerHTML = "Hello " + x; 
      document.write("Hello " + x);
      console.log("Hello " + x);
}

else {                                 // if the input is null then execuit this
      window.alert("please enter a value");
      document.getElementById("root").innerHTML ="please enter a value"
}
```

## 2. print the largest number among three number inputs:
```
var n1,n2,n3;

n1 = prompt("Enter numer1: "); // taking inputs
n2 = prompt("Enter numer2: ");
n3 = prompt("Enter numer3: ");

n1 = parseInt(n1);             // string to integer
n2 = parseInt(n2);
n3 = parseInt(n3);

if (n1> n2 && n1> n3 ) {
      document.getElementById("root").innerHTML = "n1 largest";
}

else if (n2> n1 && n2> n3 ) {
      document.getElementById("root").innerHTML = "n2 largest";
}


else  {
      document.getElementById("root").innerHTML = "n3 largest";
}
```

## 3. switch case:
```
var choice;
choice = prompt("Enter numer1: ");

var text;

switch (choice) {                         // must use break
      case "a":
            text = "option 1 selected";
            break;
      case "b":
            text = "option 2 selected";
            break;
      case "c":
            text = "option 3 selected";
            break;
      default: // else
            text = "no option selected";
            break;
}

document.getElementById("root").innerHTML=text;
```