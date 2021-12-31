// /// change css style, background color 
// document.getElementById('document-title').style.background ='#FAEBD7';
// /// change css style, text color
// document.getElementById('document-title').style.color ='#FAEBff';
// /// change css style, set padding
// document.getElementById('document-title').style.padding='10px';


// // Hide html element
// document.getElementById('document-title').style.display='none';

// // show an Hide html element
// document.getElementById('document-title').style.display='block';

// // change content of a html element
// document.getElementById('document-title').textContent='block';



// // change content of a html element
// document.getElementById('document-title').textContent='block';

// // change content of a html element
// document.getElementById('document-title').innerText='New title';


// // to inser HTML tag inside an element 'innerHTML'
// document.getElementById('document-title').innerHTML='<i>New title</i>';

// // samrt way of using this code:
// let val = document.getElementById('document-title');
// val.innerHTML='<i>New title2</i>'

// // querySelector by id
// val = document.querySelector('#document-title');
// val.innerHTML='<i>New </i>';

// // querySelector by class
// val = document.querySelector('.title-class');
// val.innerHTML='<i>New class</i>';

// // querySelector by tag
// val = document.querySelector('h3');
// val.innerHTML='<i>New tag</i>';


// // Indicate tag inside a another tag
// val = document.querySelector('ul li');
// val.innerHTML='<i>New tag</i>';


// // Indicate  last child among all <li> of first tag
// val = document.querySelector('li:last-child'); // Indicate last last child among all <li> of first tag
// val.innerHTML='<i>New tag</i>';


// // Indicate  n'th child among all <li>
// val = document.querySelector('li:nth-child(1)'); // Indicate nth last child among all <li> 
// val.innerHTML='<i>New tag</i>';


// select multi element // but to change sumthin we need to specify
// let val = document.getElementsByClassName('sample_class');
// console.log(val); // showing an array of elements

// val[0].innerHTML='<i>hello</i>'; // But to change something we need to specify the index
// val[1].style.background ='#FAEBD7';// 
// val[1].style.padding ='10px';      //

// val[0].style.textContent = 'hello';//

// // getElementsByTagName('') 
// // get all elements by tag name

// list = document.getElementsByTagName('li');
// console.log(list);      // All li tag element will be shown  

// console.log(list[2]);   // zero index li tag element will be shown

// list = document.querySelector('ol').getElementsByTagName('li');
// console.log(list);

// /// lets apply forEach on this array.
// // but // though it is an array, we can not travers this array directly by forEach
// // converting the array// now we can use forEach
// let listArr= Array.from(list); 
// listArr.forEach(function(link, index_of_link){
//       console.log(link, index_of_link);
// });


/// querySelectorAll()
/// use for : id -> # , class -> . , tag-> nothing
// selcting by class name, need to use '.'  before class name
list = document.querySelectorAll('.sample_class');
console.log(list);
list[0].innerHTML='<i>hello</i>';


list = document.querySelectorAll('h3');  // by tag name
list[0].innerHTML='<i>hello</i>';

list = document.querySelectorAll('#document-title'); // by id name
list[0].innerHTML='<i>hello</i>';





/// forEach on list by querySelectorAll:
let listOFQu= document.querySelectorAll('ol li');
listOFQu.forEach(function(item, index){
console.log(item);
});


// change color by accessing each element by for each
let liodd= document.querySelectorAll('li:nth-child(even)');
liodd.forEach(function(item, index){
item.style.background = '#FAEBD7';
});


let liEven= document.querySelectorAll('li:nth-child(even)');