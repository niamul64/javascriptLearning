### AJAX (Asynchronous JavaScript And XML): load data in background.
#### On progress function is used to show somthing on screen when loading the data background.
```
xhr.onprogress= function(){} // for main example see the bottom of this page.

example:
      /////////  show someting when the api is calling for data fatching
      xhr.onprogress= function(){
            document.getElementById('print').innerHTML='<h3>loading....</h3>';
      }
      /////////  show someting when the API is calling for data fatching
```
<hr>

## 1. take data for txt file 2. take data form local JSON file. 3. json data using API.

### 1. use AJAX to take a data from txt file and show to html page (using HXR, open()), onload())
1. make a xhr(object XmlHttp request) object.
2. call open() function of the xhr object
3. call onload function of xhr obj: when loading the data this function is called. if the data coming with a dealay then this function will be called.
4. here,  if (this.status === 200) then successfully file came. here this mean 'xhr' obj
```
// HTTP statuses
            // 200: ok
            // 403: forbidden
            // 404: Not found
```
6. inside the function. we can get the data by this.responseText.
5. Now, xhr.send();
```
document.getElementById("btnClick").addEventListener('click',loadData);
// added an evnt to to a button with id='btnClick'
// if clicked then call function = 'loadData'

function loadData(){
      //create obj of XHR (object XmlHttp request)
      let xhr = new XMLHttpRequest();
      
      //open function: grab the information from data file.
      // structure ('method to take data', 'file path', true);
      xhr.open('GET', 'data.txt', true);
      xhr.onload= function(){ //when loading the data this function is called.
            // HTTP statuses
            // 200: ok
            // 403: forbidden
            // 404: Not found
            if (this.status === 200){ 
            // here,  if (this.status === 200) then successfully file came.
                  console.log(this.responseText);
                  console.log(this.status);
                  document.getElementById('print').innerHTML=`<h4>${this.responseText} </h4>`;
                  // we can print the data to html tag.// here, ` `= is not cotesion
            }
      }
      xhr.send();   ///////// actually sending request from here.
}
```
<img src="picS/simple ajax for data txt.JPG" alt="peng ting" width="100%" >
<br> <br>
<hr>
<br>

## 2. take data form local external JSON file.
```
document.getElementById("btnClick").addEventListener('click',loadData);
// added an evnt to to a button with id='btnClick'
// if clicked then call function = 'loadData'

function loadData(){
      //create obj of XHR (object XmlHttp request)
      let xhr = new XMLHttpRequest();
      
      //open function: grab the information from data file.
      // structure ('method to take data', 'file path', true);
      
      xhr.open('GET', 'data.json', true); ////// json file name is 'data.json' // using get method

      xhr.onload= function(){ //when loading the data this function is called.
            // HTTP statuses
            // 200: ok
            // 403: forbidden
            // 404: Not found
            if (this.status === 200){ 
            // here,  if (this.status === 200) then successfully file came.
                  //console.log(this.responseText);
                  //console.log(this.status);
                  
                  // passing to function
                  jsonDATA(this.responseText);
            }
      }
      xhr.send();
}

function jsonDATA(obj){
      console.log(obj);
      var js_obj= JSON.parse(obj); // convertin to js obj from json obj.

      console.log(js_obj); 
      
      // we can traverse this js obj
      var x;
      for (x in js_obj.person){ // in the 'x' we have the index of obj
            console.log(js_obj.person[x]); // printing each obj
            console.log(js_obj.person[x]['name']); // printing the name value
      }

      //////////////////// or we can use forEach
      var main_obj=js_obj.person;
      main_obj.forEach(element => {
            console.log(element); // printing each obj
            console.log(element['name']); // printing the name value
      });
}
```
<br> <br>
<hr>
<br>

## 3. json data using API: fatch data form a website : http://www.icndb.com/api/

#### // here we will call api for jokes data: http://api.icndb.com/jokes/random

#### 1. with out using the-> xhr.onprogress= function(){}
```
document.getElementById("btnClick").addEventListener('click',loadData);
// added an evnt to to a button with id='btnClick'
// if clicked then call function = 'loadData'

function loadData(event){
      //create obj of XHR (object XmlHttp request)
      let xhr = new XMLHttpRequest();
      
      //open function: grab the information from data file.
      // structure ('method to take data', 'file path', true);

      xhr.open('GET', 'http://api.icndb.com/jokes/random', true); // is the API url: 'http://api.icndb.com/jokes/random'

      xhr.onload= function(){ //when loading the data this function is called.
            // HTTP statuses
            // 200: ok
            // 403: forbidden
            // 404: Not found
            if (this.status === 200){ 
            // here,  if (this.status === 200) then successfully file came.
                // jsonDATA(this.responseText);
                  let js_obj=JSON.parse(this.responseText); // converting jeson to js obj 
                  
                  console.log(js_obj); // printing the full obj

                  console.log(js_obj.value.joke); // accessing the joke 

                  //print the joke at html page inside the tag with id 'print';
                  document.getElementById('print').innerHTML=`<h4>${js_obj.value.joke} </h4>`;
                  
                  console.log(this.status);// printing the status code // output will 200 if gets the data 
            }
      }
      xhr.send();
}
```
<br>

#### 2. Using the-> xhr.onprogress= function(){}
#### take input from user (html)
```
<!-- inside the html -->
<input id="form1" type="text">
```
```
// now in side the js file:
let number_of_Jokes = document.getElementById('form1').value;  
//geting the value from html page
```
#### at API url if we give number, that number indicates how many joke obj will appare
#### url: 'http://api.icndb.com/jokes/random/5' 
#### 5 joke will be loaded.
```
document.getElementById("btnClick").addEventListener('click',loadData);
// added an evnt to to a button with id='btnClick'
// if clicked then call function = 'loadData'

function loadData(event){
      let number_of_Jokes = document.getElementById('form1').value;  //geting the value from html page
      

      //create obj of XHR (object XmlHttp request)
      let xhr = new XMLHttpRequest();


      //open function: grab the information from data file.
      // structure ('method to take data', 'file path', true);

      xhr.open('GET', `http://api.icndb.com/jokes/random/${number_of_Jokes}`, true); // is the API url: 'http://api.icndb.com/jokes/random/number'

      /////////  show someting when the api is calling for data fatching
      xhr.onprogress= function(){
            document.getElementById('print').innerHTML='<h3>loading....</h3>';
      }
      /////////  show someting when the API is calling for data fatching


      xhr.onload= function(){ //when loading the data this function is called.
            // HTTP statuses
            // 200: ok
            // 403: forbidden
            // 404: Not found
            if (this.status === 200){ 
            // here,  if (this.status === 200) then successfully file came.
                // jsonDATA(this.responseText);
                  let js_obj=JSON.parse(this.responseText); // converting jeson to js obj 
                  console.log(js_obj); // printing the full obj

                  //Now travers through the obj
                  // and make a tag obj to show on html
                  let tag_ol= '<ol>';  // genarating a string

                  js_obj.value.forEach(element => {
                        console.log(element.joke); // printing each obj
                        console.log(element['joke']); // printing the name value
                        tag_ol += `<li>${element.joke}</li>`;  // genarating a string

                  }); // Here, element['joke'] and element.joke --> same

                  tag_ol += '</ol>'; // tag_ol= '<ol>'; // ending <ol>

                  // Now print on html page
                  document.getElementById('print').innerHTML=tag_ol;
   
                  console.log(this.status);// printing the status code // output will 200 if gets the data                 
            }
      }
      xhr.send();
}

```