// Get the modal
var modal1 = document.getElementsByClassName('modal-home')[0];
   


var btr1 = document.querySelectorAll(".button-modal-home");
for (var i = 0; i < btr1.length; i++) {
  btr1[i].onclick = function(){
   modal1.style.display = "block";
  };
}

// Get the <span> element that closes the modal
var btn12 = document.getElementById("close-1");


// When the user clicks on <span> (x), close the modal
btn12.onclick = function() {
  modal1.style.display = "none";
}

//------------------------------------------------------------------------------
// Get the modal
var modal2 = document.getElementsByClassName('modal-overexposure')[0];

var btr2 = document.querySelectorAll(".button-modal-overexposure");
for (var i = 0; i < btr2.length; i++) {
  btr2[i].onclick = function(){
   modal2.style.display = "block";
  };
}

// Get the <span> element that closes the modal
var btn22 = document.getElementById("close-2");


btn22.onclick = function() {
   modal2.style.display = "none";
 }


//------------------------------------------------------------------------------
// Get the modal
var modal3 = document.getElementsByClassName('modal-transfer')[0];

var btr3 = document.querySelectorAll(".button-modal-transfer");
for (var i = 0; i < btr3.length; i++) {
  btr3[i].onclick = function(){
   modal3.style.display = "block";
  };
}

// Get the <span> element that closes the modal
var btn32 = document.getElementById("close-3");

btn32.onclick = function() {
  modal3.style.display = "none";
}

//------------------------------------------------------------------------------
// Get the modal
var modal4 = document.getElementsByClassName('modal-carhelp')[0];

var btr4 = document.querySelectorAll(".button-modal-carhelp");
for (var i = 0; i < btr4.length; i++) {
  btr4[i].onclick = function(){
   modal4.style.display = "block";
  };
}

// Get the <span> element that closes the modal
var btn42 = document.getElementById("close-4");


btn42.onclick = function() {
   modal4.style.display = "none";
 }

//------------------------------------------------------------------------------
// Get the modal
var modal5 = document.getElementsByClassName('modal-volunteering')[0];

var btr5 = document.querySelectorAll(".button-modal-volunteering");
for (var i = 0; i < btr5.length; i++) {
  btr5[i].onclick = function(){
   modal5.style.display = "block";
  };
}

// Get the <span> element that closes the modal
var btn52 = document.getElementById("close-5");

var cancel = document.getElementById("button-cancel");

btn52.onclick = function() {
   modal5.style.display = "none";
 }

 cancel.onclick = function() {
  modal5.style.display = "none";
}


//------------------------------------------------------------------------------
// Get the modal
var modal6 = document.getElementsByClassName('modal-detail')[0];

var btr6 = document.querySelectorAll(".button-modal-detail");
for (var i = 0; i < btr6.length; i++) {
  btr6[i].onclick = function(){
   modal6.style.display = "block";
  };
}


// Get the <span> element that closes the modal
var btn62 = document.getElementById("close-6");


btn62.onclick = function() {
   modal6.style.display = "none";
 }


//------------------------------------------------------------------------------
// Get the modal
var modal7 = document.getElementsByClassName('modal-maps')[0];

var btr7 = document.querySelectorAll(".button-modal-maps");
for (var i = 0; i < btr7.length; i++) {
  btr7[i].onclick = function(){
   modal7.style.display = "block";
  };
}


// Get the <span> element that closes the modal
var btn72 = document.getElementById("close-7");


btn72.onclick = function() {
   modal7.style.display = "none";
 }


 //------------------------------------------------------------------------------


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
}

