document.getElementById("btnClick").addEventListener('click', getdata); // if button is clicked then 'getdata' func will be called.
// 'click' is the event listener

//use api to grab joke: url: http://api.icndb.com/jokes/random/(number)
function getdata(){
      // fatch API call
      fetch('http://api.icndb.com/jokes/random')// fatch function returns a promise// to grab that promise, need to use .then key word.
            .then( response => response.json())       // .then(function(response){ return response.json(); }) 
            .then(data => console.log(data.value))    // .then(function(data) { console.log( data.value ) ;}) 
            .catch( err => console.log(err))          // .catch(function(err){console.log(err);})
}




// ////////// very simple| without any arrow functions.  ///////////////

// document.getElementById("btnClick").addEventListener('click', getdata); // if button is clicked then 'getdata' func will be called.
// // 'click' is the event listener

// //use api to grab joke: url: http://api.icndb.com/jokes/random/(number)
// function getdata(){
//       // fatch API call
//       fetch('http://api.icndb.com/jokes/random')// fatch function returns a promise// to grab that promise, need to use .then key word.
//             .then(function(response){       // raw data will be in the 'response'
//                                             //console.log(response.json());
//                   return response.json();  // returning the promise
//             })                             // Now the promise will be accepted by another then
//             .then(function(data){
//                   console.log(data.value); // printing the obj
//             }).catch(function(err){        // if any error occurs. catch the error
//                   console.log(err);        // print the error
//             }).finally(function(error){   

//                  console.log('ThankYou'); // finly this line will printed
//             })
// }