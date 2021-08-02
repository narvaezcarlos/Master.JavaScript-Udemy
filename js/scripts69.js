'use strict';

window.addEventListener('load', () => {

    //FOCUS
    var input = document.querySelector("#nombre");
    input.addEventListener('focus', function () {
        console.log("FOCUS...!!!");
    });

    //BLUR
    input.addEventListener('blur', function () {
        console.log("BLUR...!!!");
    });

    //KEYDOWN
    input.addEventListener('keydown', function (event) {
        console.log("KEYDOWN...!!!", String.fromCharCode(event.keyCode));
    });

    //KEYPRESS
    input.addEventListener('keypress', function (event) {
        console.log("KEYPRESS...!!!", String.fromCharCode(event.keyCode));
    });

    //KEYUP
    input.addEventListener('keyup', function (event) {
        console.log("KEYUP...!!!", String.fromCharCode(event.keyCode));
    });
});