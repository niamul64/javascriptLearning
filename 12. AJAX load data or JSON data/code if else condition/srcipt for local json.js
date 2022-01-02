document.getElementById("btnClick").addEventListener('click',loadData);
// added an evnt to to a button with id='btnClick'
// if clicked then call function = 'loadData'

function loadData(){
      //create obj of XHR (object XmlHttp request)
      let xhr = new XMLHttpRequest();
      
      //open function: grab the information from data file.
      // structure ('method to take data', 'file path', true);
      xhr.open('GET', 'data.json', true);
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

      //////////////////// or we can use for each
      var main_obj=js_obj.person;
      main_obj.forEach(element => {
            console.log(element); // printing each obj
            console.log(element['name']); // printing the name value
      });

}