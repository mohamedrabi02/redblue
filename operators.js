/*
1) arithmatic operators(+,-,*,/,%,**,++--)
2) assignment operators(+=,-=)
3) comparision operators(<,>,<=,>=)
4) logical operators
5) strict operators
6) ternary operators
*/

//1) arithmatic operator
let a =10;
let b=5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
console.log(a++);
console.log(b--);

//2) assignment operator
let aa= 10;
let ab=10;
console.log(aa+=ab);
console.log(aa-=ab);
console.log(aa/=ab);
console.log(aa*=ab);
console.log(aa%=ab);


//3) comparision operator(<,>,<=,>=)
let ac= 10;
let ad= 10;
console.log(aa>ab);

//4) logical operators(&&--AND,||--OR,!--not)
let ae = 10;
let af = 10;
console.log(ae !=af);

//5)strict operators(==,===)
let ag = 10;
let ah = "10";
console.log(ag==ah);
console.log(ag===ah);

//6) ternary operator(syntax:= variable_name = (condition)?"true_value":"false_value")
let ba = 21;
let temp = (ba>20 && ba<100)?"eligible to vote":"not eliginle to vote";
console.log(temp);

// let bb =101;
// let res1 = ((bb>=35) || (bb<=100 && bb>=35))?"pass":"fail";
// console.log(res1);

let bb =40;
let res1 = ((bb<=35) || (bb<=100))?"pass":"fail";
console.log(res1);




