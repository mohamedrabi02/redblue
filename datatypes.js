
/*
primitive:
1) string : used to store sequence of characters,numbers and special characters.
2) number : used to store numbers and decimals
3) boolean : true/false
4) null 
5) undefined

non-primitive:
1) object
2) array
3) function - 

variables( variable-type variable-name = value)
1) var : can be redeclared and reassigned
2) let : cannot be redeclared and reassigned
3) const : cannot be redeclared and reassigned
*/

const { log } = require("node:console");

var un;
console.log("rabi02@1999");
console.log(12345.564);
console.log(true);
console.log(null);
console.log(un);



var a =10;
var a=20;
console.log(a);

let b=30;
b=40;
console.log(b);

const c=60;
console.log(c);


let arr =["java",5464,555.67,true]
console.log(arr);

let obj={
    23.23 :"rabi",
    place:"anna nagar",
    city: "chennai"
}
console.log(obj);

//array methods:(map, filter, reduce)
//map
 
var arr1 = [1,2,3,4,5,6,7,8]
var arr1times2 = arr1.map(x => x*2);
console.log(arr1times2);

//filter
var arr1greater5 = arr1.filter(x => x>5)
console.log(arr1greater5);

//reduce
var reducearr1 = arr1.reduce((acc,cur)=>acc+cur);
console.log(reducearr1);

//pop
arr1.pop();
console.log(arr1);

//push
arr1.push(40)
console.log(arr1);

//shift
arr1.shift();
console.log(arr1);

//unshift
arr1.unshift(200);
console.log(arr1);

//reverse
var temp = arr1.reverse();
console.log(temp);
console.log(arr1);










