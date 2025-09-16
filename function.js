/*
function are of 4 types 
1) function statement declaration
2) function expression or anonymous function(storing a function in a variable or calling without any name.)
3) immediate invoke function( storing a function in a circle bracket)
4) arrow function or one-line function(using the syntax ()=>{} )
*/

//1. function statement expression
function f1(temp)
{
    console.log(temp);
}
f1("hello");

//2.function expression or anonymous function
var temp = function f2(para1)
{
    console.log(para1);
}
temp("hello");

//3.immediate invoke function
(function(para1)
{
    console.log(para1);
    
})("hello");

//arrow functions
var temp = (para1)=>{console.log(para1)
}
temp("hello");