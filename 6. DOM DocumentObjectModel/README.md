# change css style or html tag by js bottom of the page:->
# For Single element: ## 1. getElementById  2. query selector.
# For Multi element: ## 1. getElementsByClassName('') 2. getElementsByTagName('') 3. querySelectorAll()



<br>
<hr>

### 1. this-> window:
```
let value;
value = this;         //window // indicating full document
console.log(value);

// or we can use ->
let value;
value = window;               //indicating full document
console.log(value);
```
<img src="picS/this key word.JPG" alt="peng ting" width="100%" >

### 2. document:
```
let value;
value =window.document;        // indicating full HTML document
console.log(value);

// or we can use only document-->
let value;
value =window.document;       // indicating full HTML document
console.log(value);
```
<img src="picS/window document.JPG" alt="peng ting" width="100%" >

### 3. take all element of document in a array :
```
let value;
value =document.all; // indicating full HTML document
console.log(value);


//OutPut:
[html, head, meta, meta, meta, link, title, body, dir.container, ol, li, li, li, li, hr, ul, li, a, li, a, li, a, li, a, hr, form, label, input, label, input, hr, form, label, input, script, viewport: meta, link_name: input, url: input, name: input]
```

<img src="picS/document array.JPG" alt="peng ting" width="100%" >
<br>

```

value = document.links;             //<a>
value = document.links[0].href;     // first <a> link
value = document.links[0].className;// first <a> classes
value = document.links[0].classList;// first <a> classes in a list
value = document.images;            // all image tag
value = document.scripts;           // js script
value = document.scripts[0];        // first js script

console.log(value);

console.log(value);
```


### 4. apply 'forEach'  on any array of this document. (forEach: https://github.com/niamul64/javascriptLearning/tree/main/4.%20function)
```
value = document.links;  // though it is an array, we can not travers this array directly by forEach
let linkArr= Array.from(value); // converting the array// now we can use forEach
linkArr.forEach(function(link, index_of_link){
      console.log(link);
});
```
<br> <br> <hr>

# (For single element:) 1. getElementById 2. query selector.
<br>

### 1. (getElementById) Take a element from Html page by its ID
```
// use id to take a elemnt from html page
let val;
val = document.getElementById('document-title');
console.log(val); // will get the whole elemnt as output, which id is document-title.
```
### more use: // geting an element from Html
```
let val;
val = document.getElementById('document-title').id; // only give the id.
val = document.getElementById('document-title').className; // only give class name.

```
# change css style by js: to change the style we need '.style'
```
// change background color:
document.getElementById('document-title').style.background ='#FAEBD7';

// change text color:
document.getElementById('document-title').style.color ='#FAEBff';

///set padding
document.getElementById('document-title').style.padding='10px';

// Hide html element
document.getElementById('document-title').style.display='none';

// Show an Hide html element
document.getElementById('document-title').style.display='block';
```
<img src="picS/change background color by js code.JPG" alt="peng ting" width="100%" >
<br>

# Change content of html tag by js:
```
// change content of a html element 'textContent'
document.getElementById('document-title').textContent='block';

// change content of a html element 'innerText'
document.getElementById('document-title').innerText='New title';

// to inser HTML tag inside an element 'innerHTML'
document.getElementById('document-title').innerHTML='<i>New title</i>'; // text will be in italic.
```
<img src="picS/change html content.JPG" alt="peng ting" width="100%" >
<br>
<hr>

# smart way of doing this:
```
// samrt way of using this code:
let val = document.getElementById('document-title');
val.innerHTML='<i>New title2</i>'
```
<br><br>
<hr>

# 2. Query selector. document.querySelector() 
###  can call by name, id, tag, class
<br>

### call by id: , use '#' before id_name
```
// querySelector by id, use '#' before id_name
val = document.querySelector('#document-title');
val.innerHTML='<i>New </i>';
```
### call by class: , use '.' before class_name
```
// querySelector by class, use '.' before class_name
val = document.querySelector('.title-class');
val.innerHTML='<i>New class</i>';
```
### call by tag: we can indicate tag inside another tag:
```
// querySelector by tag
val = document.querySelector('h3');
val.innerHTML='<i>New tag</i>';


// Indicate tag inside a another tag
val = document.querySelector('ul li'); // <li> inside the <ul>
val.innerHTML='<i>New tag</i>';

// Indicate last child among all <li> of first tag
val = document.querySelector('li:last-child'); // Indicate last last child among all <li> of first tag
val.innerHTML='<i>New tag</i>';

// Indicate  n'th child among all <li>
val = document.querySelector('li:nth-child(1)'); // Indicate nth last child among all <li> 
val.innerHTML='<i>New tag</i>';
```
<br><br>
<hr>

# For Multi element selector: 1. getElementsByClassName('')  2. getElementsByTagName('') 3. querySelectorAll()
<br>

## 1. getElementsByClassName('')
<br>

```
// select multi element
let val = document.getElementsByClassName('sample_class');
console.log(val); // showing an array of elements

val[0].innerHTML='<i>hello</i>'; // But to change something we need to specify the index
val[1].style.background ='#FAEBD7';// 
val[1].style.padding ='10px';      //
val[0].style.textContent = 'hello';//
```
<br>

## 2. getElementsByTagName('')
<br>

```
list = document.getElementsByTagName('li');
console.log(list);      // All li tag element will be shown  

console.log(list[2]);   // zero index li tag element will be shown
```

### querySelector and getElementsByTagName('') 
```
list = document.querySelector('ol').getElementsByTagName('li');
console.log(list);
```
### lets apply forEach on this array: (see about: https://github.com/niamul64/javascriptLearning/tree/main/4.%20function )
```
/// let's apply forEach on this array.
// but // though it is an array, we can not travers this array directly by forEach
// converting the array// now we can use forEach
let listArr= Array.from(list); 

listArr.forEach(function(link, index_of_link){
      console.log(link, index_of_link);
});
```
<br>

## 3. querySelectorAll() : support forEach directly here.
#### use for : id -> # , class -> . , tag-> nothing
```

// selcting by className, need to use '.'  before class name
list = document.querySelectorAll('.sample_class');
console.log(list);
list[0].innerHTML='<i>hello</i>';


list = document.querySelectorAll('h3');  // by tag name
list[0].innerHTML='<i>hello</i>';

list = document.querySelectorAll('#document-title'); // by id name
list[0].innerHTML='<i>hello</i>';


let liodd= document.querySelectorAll('li:nth-child(odd)');
let liEven= document.querySelectorAll('li:nth-child(even)');
```

## forEach on list by querySelectorAll:
```
let listOFQu= document.querySelectorAll('ol li');
listOFQu.forEach(function(item, index){
console.log(item);
});

// change color by accessing each element by for each
let liodd= document.querySelectorAll('li:nth-child(odd)');

listOFQu.forEach(function(item, index){
      item.
});


// change color by accessing each element by for each
let liodd= document.querySelectorAll('li:nth-child(even)');
liodd.forEach(function(item, index){
item.style.background = '#FAEBD7';
});

```