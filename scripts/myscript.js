/* global document */

/* code for image changer */

var dogImage = document.querySelector('img');

dogImage.onclick = function () {
    'use strict';
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
      'use strict ;
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
    'use strict ;
    setUserName ( ) ;
};
	