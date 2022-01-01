
let form = document.getElementById('form1'); // get the form by it's id

form.addEventListener('focus',message); // if the button clicked then function 'messege()' will be trigered

function message(e){ // this function wii be trigered if the button is clicked
      this.style.background = '#FAEBD7';
}


let f = document.getElementById('form1');
f.addEventListener('keyup',test);

function test(e){ // this function wii be trigered if the button is clicked
      console.log(this.value); // printing on console
      document.getElementById('print').innerText=this.value; // print on the tag which id is 'print'
}
