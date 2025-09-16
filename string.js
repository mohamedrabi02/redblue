// string methiods

const { log } = require("node:console");

/*
1. length -> gives length of the string
2. toUpperCase() -> changes the sting to Upper Case
3. toLowerCase() -> changes the string to lower case
4. charAt(index) -> to find the character of the particular index
5. indexOf -> return the index of first occurance of specified character
6. lastIndexOf() -> return the index of last occurance of specified character
7. slice() -> extracts the section of the string
8. substring() -> used to get substing from  string using the start and end index
9. replace() -> 
10. replaceAll ->
11. trim() ->
12. split() ->
13. join() ->
14. concat() ->
15. startsWith() ->
16. endsWith() ->
17. include() ->
*/


var str1 = "welcome to javascript";

console.log(str1.length);
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.charAt(5));
console.log(str1.indexOf("o"));
console.log(str1.lastIndexOf("o"));
console.log(str1.slice(10));
console.log(str1.substring(0,10));
console.log(str1.replace("javascript","js"));
console.log(str1.replaceAll("Welcome","Enter"));
console.log(str1.trim());
console.log(str1.split("").join(""));


var str1 = "welcome to trends anna nagar";
str1 = str1.split(" ")
console.log(str1);
var loc=0;
while(str1[loc])
    {
        str1[loc] = str1[loc].charAt(0).toUpperCase()+str1[loc].slice(1)
        loc++;
    }
    str1 = str1.join(" ");
console.log(str1);









