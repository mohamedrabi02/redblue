/*
class: is a blueprint
syntax ex: class car{}

object: instance created from a class
new keyword: is used to create an object

constructor: 
it is like a setup process, which runs when you create an object.

*/ 

class room
{
    color(){console.log("colored with red");
    }
    table(){console.log("2 teak tables");}
    ac(){console.log("2 tonne split A/C");}
}

const mod  = new room()
mod.color()
mod.table()
mod.ac()