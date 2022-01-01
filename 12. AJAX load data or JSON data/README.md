### AJAX (Asynchronous JavaScript And XML): load data in background.

## 1. use AJAX to take a data from txt file and show to html page
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
      xhr.send();
}
```
<img src="picS/simple ajax for data txt.JPG" alt="peng ting" width="100%" >
<br> <hr>