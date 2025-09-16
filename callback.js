//settimeout -- is a js funtion to delay a block of code, by some milliseconds.

function box1()
{
    setTimeout(()=>{
        console.log("loading");        
    }, 5000)    
}

function box2()
{
    setTimeout(()=>{
        console.log("loading successful");        
    }, 1000)    
}

box1();
box2();

//Call Back
function box1(callback)
{
    setTimeout(()=>{
        console.log("loading");
        callback()        
    }, 5000)    
}

function box2(callback)
{
    setTimeout(()=>{
        console.log("loading successful");
        //callback()        
    }, 1000)    
}

// function box3(callback){
//     setTimeout(()=>{
//         console.log("loading damaged");
//         //callback()        
//     }, 1000)
// }
box1(box2)
//box1(box2(box3));
//box2(box1);

//call back hell
function box1(callback)
{
    setTimeout(()=>{
        console.log("loading");
        callback()        
    }, 5000)    
}

function box2(callback)
{
    setTimeout(()=>{
        console.log("loading successful");
        callback()        
    }, 1000)    
}

function box3(){
    setTimeout(()=>{
        console.log("loading finished");
        //callback()        
    }, 1000)
}

box1(()=>{
    box2(()=>{
        box3()
    })
})

