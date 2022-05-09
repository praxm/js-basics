console.log(a);

console.log(b);
//let-const-example.js:2 Uncaught ReferenceError: Cannot access 'b' before initialization 
// As b is defined under temporal dead zone


console.log(x);
//Uncaught ReferenceError: x is not defined

var a= 10;

let b=20;