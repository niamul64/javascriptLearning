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
                  // we can print the data to html tag.
            }
      }
      xhr.send();
}