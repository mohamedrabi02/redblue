console.log("day 1 task completed");
console.log("day 2 task completed");
console.log("day 4 task completed");

/* 
Loops
loops in javascript are used to execute a block of code repetedly, eithe a set number of times or while the codition is true.

javasvript supports several types of loops.
1) For loop
    //for(initialization;condition;iteration){}

2) while loop
    //initialization
    while(condition)
    {
        console.log();//iteration
    }

3) do while loop
    //initialization
    do{
            iterations block
    }
    while(condition)

4) for in
5) for of
*/

//for loop
for(let a=1; a<=5;a++)
    {
        console.log(a);        
    }

for(let a=1;a<=5;a++)
    {
        console.log("Rabi");
    }


//while loop
var a=1;
while(a<=5){
    console.log(a);
    a++;
}

//do while loop
var a=1;
do
{
    console.log(a);
    a++;
}while(a<=5);


var a=5;
while(a>=1)
{
    console.log(a);
    a=a-1;
}

// for of
var arr = ["java",5464,545.55,true,null]
for(spl of arr)
    {
        console.log(spl);
    }

//for in
var obj={
    name :"rabi",
    place:"anna nagar",
    city: "chennai"
}
for(splt in obj)
    {
        console.log(splt ,":", obj[splt]);//splt gives key, obj[splt gives values] or (console.log(splt+" : "+obj[splt]))
    }


//Task:(print all even numbers from 1 to 20)
var evenNum=2;
while(evenNum<=20)
  {
    console.log(evenNum);
    evenNum = evenNum+2;
  }
