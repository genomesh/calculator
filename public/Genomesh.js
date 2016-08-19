
"use strict";

function bufferToAccumlator(aVal, bVal) {
    return bVal;
}
function add(aVal, bVal) {
    return aVal + bVal;
}
function sub(aVal, bVal) {
    return (aVal - bVal);
}
function multiply(aVal, bVal) {
    return aVal * bVal;
}
function divide(aVal, bVal) {
    return aVal / bVal;
}
function modu(aVal, bVal) {
    return aVal % bVal;
}
function noOp(aVal, bVal) {
    return 0;
}

const operatorFunctions = {
    'Add': add,
    'Sub': sub,
    'Mult': multiply,
    'Div': divide,
    'Mod': modu,
    '=': noOp
};

var accumlator=0;
var buffer="";
var applyOp=bufferToAccumlator;

function onNumber(num) {
    console.log('num', num);
    buffer+=num;
    display(parseFloat(buffer));
}
function onOperator(op) {
    console.log('op', op);
    var bufferVal=parseFloat(buffer);
    accumlator=applyOp(accumlator, bufferVal);
    buffer="";
    applyOp=operatorFunctions[op];
    display(accumlator);
}
function onClear() {
    accumlator=0;
    buffer="";
    applyOp=bufferToAccumlator;
    display(0)
}
function display(num) {
    document.getElementById("display").innerHTML = num;
}

onClear();


