### addEventListener() : bottom of the page
<br>

### Triger js code from html page
### Add event on html page --> built in function call | own made function call at js file
<hr>

## events: 1. onclick="" 2. onmouseover(""),  there are more like this: https://www.w3schools.com/js/js_events_examples.asp
#### onclick, onselect, ondblclick, onmouseover, onmousedown, onmouseup, onmouseout, onmousemove, onkeydown, onkeyup, onkeypress

<br><br>
<hr>

### 1. onclick=""

```
<!--  inside the HTML page -->

<button onclick="alert('hi');" >click me</button>  

<!-- Saying that, if the button clicked the hi alert appear (trigered)-->

```
<img src="picS/simple on click.JPG" alt="peng ting" width="100%" >

### 2. onmouseover("")
```
<button onmouseover="alert('hi');">click me</button> 

<!-- if we take the mouse on the button then the alert with hi will appear (trigered) -->

```
<br><br>
<hr>

# function call from html page to js file
```
<!-- inside html page -->
<button onclick="message();">click me</button>
<!-- if 'click me' button clicked then message() function will called (from js file)-->

// in js file
function message(){
      console.log("clicked"); // if we want to grab the element, use: 'this'. // this key word will point to button element
}

// when the button clicked then we can see "clicked" on browser console.
```


<br><br>
<hr>

# Smarter way: don't write the event on html page. triger from js file.
## addEventListener()
### events for addEventListener: mouseover, click, mouseout, dblclick, etc. (same as html events, just without 'on' word )
###### here, dblclick= double click.
<hr>

```
// structure:
document.getElementById('id_of_html_element').addEventListener('
EVENT_name',Function_name);
```

### 1. example:

```
let btn = document.getElementById('btnClick'); // get the button to add event

btn.addEventListener('click',message); // if the button clicked then function 'messege()' will be trigered

function message(parameter){ // this function wii be trigered if the button is clicked
      console.log("clicked"); // if we want to grab the element, use: 'this'. // this key word will point to button element
}
```
<br>

## Now the function we are calling: accepts a parameter.

# see the: video with this folder to know about the useage of the parameter. 

### timeStamp, target, target.id (html targeted element's id), clientY (x_axis pixel) , (clientX) y_axis pixel, offsetY, offsetX etc.

## we can use these events on any html tags: div, span, form, etc

## lets see an example on form, of mouse clicked(focus) on form then change background color change.
```
<!-- inside the html file -->
<form  action="">
      <input id="form1" type="text">
</form>
<!-- inside the html file -->


/// inside the js file
let form = document.getElementById('form1'); // get the form by it's id

form.addEventListener('focus',message); // if the button clicked then function 'messege()' will be trigered

function message(e){ // this function wii be trigered if the form is on fucus
      this.style.background = '#FAEBD7'; // color change if the form is on focus
      // we can point the element by this key word.
}
```

## example 2: write in the form and print on browser console on real-time.
### after every typing a kew, print the value on brouser console.
### if we can print on the console then we can print in a tag of html
### lets take a sample p tag under the <from>, and what ever write on form print on the <p>.

```
<!-- inside html file -->
<form  action="">
      <input id="form1" type="text">
</form>
<p id='print'> Sample P Tag</p>
<!-- inside html file -->

let f = document.getElementById('form1'); // Grab the form input field
f.addEventListener('keyup',test);         // Now test function will be called if any key pressed and released.


function test(e){ // this function wii be trigered if the button is clicked
      console.log(this.value); // printing on console
      document.getElementById('print').innerText=this.value; // print on the tag which id is 'print'.
}
```