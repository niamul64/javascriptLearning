## 1. Create 2. Replace and 3.remove --> HTML tag, class and atribute:

# 1. Create:
#### createElement('tagName'); // create// then modify-> using other functionality
#### then add it to HTML document by appendChild()
```
let elemnt = document.createElement('li');
console.log(elemnt);  // we can see an <li></li> at console

//Now, we can add class, title and other atributes
elemnt.className='a b c'; // added 3 class
elemnt.classList.add('New_class'); // append class with the existing classses

// adding other attributs as title
elemnt.setAttribute('title', 'A title to new Element');

// adding content between tag <> ... <>
 elemnt.appendChild(document.createTextNode("extra element added"));

// finally adding to HTML doc
// to add an element we need to specify the tag, under which we are going to add the new tag
let ol_tag= document.querySelector('ol'); // <ol_tag><ol> </ol><ol_tag>
// Now under the ol tag add the created tag
ol_tag.appendChild(elemnt);

/////////// Now, add another <li> with a <a> under Element to <ul>
let elemnt2 = document.createElement('li');
let a_tag = document.createElement('a');

a_tag.appendChild(document.createTextNode("instragram"));
a_tag.setAttribute('href', 'https://www.instragram.com');
// Now insert a_tag inside the <li> that we created
elemnt2.appendChild(a_tag); // <elemnt2> <a_tag> </a_tag></elemnt2>

// now insert this on HTML doc under <ul> 
document.querySelector('ul').appendChild(elemnt2);

console.log(elemnt2); // printing on browser console

```
<img src="picS/create tag.JPG" alt="peng ting" width="100%" >
<br><br>
<hr>

# 2. Replace:
#### Create a tag by # createElement('tagName'); by this tag we will replace the existing one.
#### Now, modify the tag fuctionality(using: classList.add, className, attribut add, etc)
#### Now, select the tag we want to replace from the HTML doc file, and its parent <tag>
### Now call the replace by: parent.replaceChild(new_tag, old_tag);
```
let newHeading = document.createElement('h1')// first creating a tag to replace with a existing tag

newHeading.setAttribute('title', 'A title to new Element');

newHeading.classList.add('New_class'); // append class with the existing classses
// inserting text inside the <tag>
newHeading.appendChild(document.createTextNode('H1 New Heading')); 
// select the element that we want to replace
let oldHeading = document.querySelector('h3');

//Now we need to call the parent of that tag which we are replacing
let parent = oldHeading.parentElement;
// or we can use: let parent = document.querySelector('container');

// Now replace:
parent.replaceChild(newHeading, oldHeading);

console.log(parent);

```
<img src="picS/replace tag.JPG" alt="peng ting" width="100%" >


# 3. Remove element: remove()
```
document.getElementById('document-title').remove(); // directly removed the tag with the id 'document-title'

// delete a element from a list of array
let listItems= document.querySelectorAll('li'); // will have a array of <li> elements
listItems[0].remove(); // directly removed the first <li>..</li>
```
# 4. removechild(): https://www.w3schools.com/jsref/met_node_removechild.asp


### class add or remove:
```
// add
element.classList.add ("new_Class");
element.classList.add ("new_Class2");

// remove class
element.classList.remove("class name");

// remove attribut
element.removeAttribute("title");

                                     // check is there any tag with 'title' attribute
list document.querySlector('ul');    // get list of <ul>
let val = list.hasAttribute('title');// is ther any tag  in <ul> with attribute 'title'.

console.log(val);                   // if there is any tag with attribute 'title' then we will get output: true other wise false

```
