//JS Hoisting
//In JavaScript, a variable can be declared after it has been used.

console.log(a);
abc();
pqr();


var a = 10;

function abc(){
    var a = 20;
    console.log(a);
}

function pqr(){
    var a = 30;
    console.log(a);
}