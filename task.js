//Task-1(to print number in a sequence)
var temp = 1;
var nxtTemp ="1";
for(var rows = 5;temp<=rows;temp++)
    {
        if(temp==1)
            {
                console.log(nxtTemp);
            }
        else
            {
                nxtTemp+=temp.toString();
                console.log(nxtTemp);
            }
    }


//Task-2(to find the occurance of a particular character present in a string)
var str1 = "banana";
var occurance = 0;
var selectedChar = "a";
var temp =0;
while(str1[temp])
    {
        if(str1[temp]==selectedChar)
            {
                occurance = occurance+1;
            }
        temp=temp+1;
    }
console.log(occurance);


//Task-3(function Task) 
var name="mohamed rabi";
let age = 20;
let marks=[45,56,78,65,50];
calculateDetails(name,age,marks);


function calculateDetails(name,age,marks)
{
    name=name.toUpperCase()
    let total=0;
    let percentage = 0;
    let remarks="";
    console.log("Name: "+name);
    console.log("Age: "+age);
    for(const temp of marks)
        {
            total+=temp;
        }
    console.log("Total: "+total);
    percentage=total/5;
    console.log("Percentage: ",percentage);
    if(percentage>=91 && percentage<=100){remarks= "Excellent"}
    else if(percentage>=71 && percentage<=90){remarks= "Very Good"}
    else if(percentage>=51 && percentage<=70){remarks= "Good"}
    else if(percentage>=35 && percentage<=50){remarks= "Average"}
    else{remarks= "fail"}
    console.log("Remarks: "+remarks);
}


//Task-4(class task)
class student
{
    name="";
    age;
    marks;
    percentage=0;
    remarks="";
    total=0;
    constructor(studentName,studentAge,studentMarks)
    {
        this.name=studentName;
        this.age=studentAge;
        this.marks=studentMarks;
    }
    calculateDetails()
    {
        for(var mark of this.marks)
            {this.total+=mark}
        this.percentage=this.total/5;
        if(this.percentage>=91 && this.percentage<=100){this.remarks= "Excellent"}
        else if(this.percentage>=71 && this.percentage<=90){this.remarks= "Very Good"}
        else if(this.percentage>=51 && this.percentage<=70){this.remarks= "Good"}
        else if(this.percentage>=35 && this.percentage<=50){this.remarks= "Average"}
        else{this.remarks= "fail"}
    }
    calculatedOutput()
    {
        console.log("Name :"+this.name.toUpperCase());
        console.log("Age :"+this.age);
        console.log("Total :"+this.total);
        console.log("Percentage :"+this.percentage);
        console.log("Remarks :"+this.remarks);
        console.log("");
        
    }
}

var student1 = new student("stud1",30,[45,45,67,89,43]);
var student2 = new student("stud2",27,[45,100,67,100,43]);
var student3 = new student("stud3",25,[45,90,80,89,43]);
var student4 = new student("stud4",21,[100,45,67,89,43]);
var student5 = new student("stud5",30,[90,45,67,89,90]);

student1.calculateDetails();
student2.calculateDetails();
student3.calculateDetails();
student4.calculateDetails();
student5.calculateDetails();

student1.calculatedOutput();
student2.calculatedOutput();
student3.calculatedOutput();
student4.calculatedOutput();
student5.calculatedOutput();