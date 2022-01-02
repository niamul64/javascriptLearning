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
