'use strict';

/*
    JavaScript Basics
    Inderjeet Cheema

*/
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}
function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

export {onEvent , getElement, select};
