## 1. Create 2. Replace and 3.remove --> HTML tag, class and atribute:

## 1. Create:
#### createElement('tagName'); // create// then modify-> using other functionality
### then add it to HTML document by appendChild()
```
let elemnt = document.createElement('li');
console.log(elemnt);  // we can see an <li></li> at console

//Now, we can add class, title and other atributes
elemnt.className='a b c'; // added 3 class
elemnt.classList.add('New_class'); 
// adding other attributs as title
elemnt.setAttribute('title', 'A title to new Element');

// adding content between tag
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
