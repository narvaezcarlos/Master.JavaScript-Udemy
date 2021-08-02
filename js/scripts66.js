'use strict';

//BOM - BROWSER OBJECT MODEL

function getBom(params) {
    console.log(window.innerWidth);
    console.log(window.innerHeight);

    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location);
}
getBom();

function redirect(url) {
    window.location.href = url;    
}

function openWindow(url) {
    window.open(url, "", "width=300, height=600");
    
}