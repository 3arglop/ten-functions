"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

//ONE
function isTrue(input) {
    return input === true;
}

//TWO
function isFalse(value) {
    return value === false;
}

//THREE
function not(input) {
    return !input;
}

//FOUR
function addOne(input) {
    return Number(input) + 1;
}

//FIVE
function isEven(input) {
    if(parseInt(input) % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

//SIX
function isIdentical(x, y) {
    return typeof x === typeof y;
}

//SEVEN
function isEqual(one, two) {
    return one == two;
}

//EIGHTH
function or(arg1, arg2) {
    return arg1 || arg2;
}

//NINE
function and(a, b) {
     return a && b;
}

//TEN
function concat(uno, dos) {
   return uno.toString() + dos.toString();
}