// replace element

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