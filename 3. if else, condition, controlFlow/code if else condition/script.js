var x;
x = prompt("Enter your name");


if (x  ) {
      document.getElementById("root").innerHTML = "Hello " + x;
      document.write("Hello " + x);
      console.log("Hello " + x);
}

else {
      window.alert("please enter a value");
      document.getElementById("root").innerHTML ="please enter a value"
}