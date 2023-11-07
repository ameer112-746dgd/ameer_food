/* global document */

/* code for image changer */


function showSrc() {

  var dogImage = document.querySelector('.img1'); //#id
  var dsrc = dogImage.getAttribute('src')
  dogImage.setAttribute('src', "images/Beans%20and%20plantain.jpg.jpeg")
  //alert(dsrc)
}

function changeimageOnHover() {
  // let image =document.querySelector('#${imageld}');
const img2 = document.querySelector(".img2")
img2.setAttribute("src", "images/Amala.jpg.jpeg")
  /*
   image.addEventListener('mouseover',function(){
   }); */
}

function returnimage() {
    const img2 =document.querySelector(".img2")
    img2.setAttribute("src", "images/Beans%20and%20plantain.jpg.jpeg")
}
// changeimage()
/*
dogImage.onfocus = function () {

    var myImages = dogImage.getAttribute('src');
    if (myImages === 'images/puppy.jpg') {
        dogImage.setAttribute('src', 'images/dog.jpg');
    } else {
        dogImage.setAttribute('src', 'Images/puppy.jpg');
    }
};

// personlized welcome message code

var nameButton = document.querySelector('button');
var myHeading = document. querySelector( 'h1' );

function setUserName() {
      //'use strict' ;
    var myName = window.prompt('Please enter your name.');
    localStorage.setItem( 'name', myName);
    myHeading.textContent = 'Have a nice day, ' + myName;
}
if (!localStorage.getItem('name')) {
    setUserName () ;
} else {
    var storedName = localStorage.getItem('name');
    myHeading . textContent = 'Have a nice day, ' + storedName; 
}
nameButton.onclick = function () {
   // 'use strict ;
    setUserName ( ) ;
};
*/	