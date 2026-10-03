// let age = 20;

// console.log(age);






// var age = 20;

// age = 25

// var age = 30;

// console.log(age);


// let age = 30;

// age = 45;

// let age = 30;


// console.log(age);



// const age = 30;

// age = 45;

// console.log(age)





// Data Types

// String

// let string = "Hello";

// console.log(string);


// Number 

// let num = 10
// let num2 = 22.45

// console.log(num)

// console.log(num2)


// Boolean

// let a = true;

// let b = false;

// console.log(a);
// console.log(b);


// Undefined

// let a;

// console.log(a);


//null

// let b = null;

// console.log(b);


//bigInt

// let bigInt = 12345678997653213467896433n;

// console.log(bigInt)


//symbol

// let id = Symbol("id");

// console.log(id);



// Reference Data type

// Array

// let arr = [12,"Aman",undefined,null,Boolean,{name:"Aman",}];

// console.log(arr);

// object

// let obj = {
//      name:"Aman",
//      age:23
// }

// console.log(obj)

// function

// function userName()
// {
//      console.log("Hello this is function")
// }

// userName()

// Primitive vs Reference 

// let a = 10;
// let b = a;

// b = 30;

// console.log(a);
// console.log(b);

// Reference 

// let obj1 = {
//      name : "Aman",
//      age : 23
// }

// let obj2 = obj1;

// obj2.name = "Rahul";

// console.log(obj1);
// console.log(obj2);


// Type conversion and Type coercion

// let a1 = 10;

// let newNumber = String(a1);

// console.log(newNumber);

// let num = "10";

// let newNumber = Number(num);

// console.log(newNumber);


// Type Coercion

// let a1 = 10;
// let b1 = "20";

// console.log(a1 + b1);


// let a1 = 10;
// let b1 = "20";

// console.log(a1 -b1);

//  typeof operator

// let num = 20;

// console.log(typeof num);

// let str = "Aman";
// console.log(typeof str);




// Operators and Decision Making

// Arithmatic Operators

// let num1 = 10;
// let num2 = 20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(num1 ** num2);

// Increment and Decrement

// let num1 = 10;
// console.log(num1++);
// console.log(num1)


// Assignment Operators

// let age = 20;
// console.log(age);

// let num = 20;

// num += 25;

// num = num + 25

// console.log(num);

// console.log(num += 20)
// console.log(num -= 10);
// console.log(num *= 2);
// console.log(num /= 4);
// console.log(num %= 5);
// console.log(num **= 3);


// Comparison Operators

// console.log(10 > 5)
// console.log(10 < 5)
// console.log(10 >= 10)
// console.log(10 <= 5);

// == Vs ===

// console.log(10 == "10");
// console.log(10 === "10")

// Logical Operator 

// AND

// let age  = 20;
// let hasLicense = true;

// if(age >= 18 && hasLicense)
// {
//      console.log("It is eligible for drive")
// }

// OR

// let age = 20;

// let hasLicense =  false;

// if(age >=18 || hasLicense)
// {
//      console.log("Drive");
// }

// let isLoggedIn = false;

// if(!isLoggedIn)
// {
//      console.log("Please Login");
// }

// console.log(!false);



// Conditional Statements

// let age = 16;

// if(age > 18)
// {
//      console.log("Eligible");
// }
// else{
//      console.log("Not eligible");
// }


// Example 1

// let marks = 75;

// if(marks > 80)
// {
//      console.log("Grade A")
// }
// else if(marks > 60)
// {
//      console.log("Grade B")
// }
// else if(marks > 40)
// {
//      console.log("Grade C")
// }
// else{
//      console.log("Fail")
// }


// Switch Case 

// let day = 1;

//      switch(day)
//      {
//           case 1:
//                console.log("Monday");
//                break;
//           case 2:
//                console.log("Tuesday");
//                break;
//           case 3 :
//                console.log("Wednesday");
//                break;
//           default:
//                console.log("Invalid day")
//      }


// Ternary Operator 

// let age = 18;

// let result = age > 18 ?"true" : "false";

// console.log(result);

// Loop 

// console.log(1)
// console.log(2)
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for(let i=1;i<=10;i++)
// {
//      console.log(i);
// }

// while loop

// let num = 1;

// while(num <=10)
// {
//      console.log(num);
//      num++
// }





// do-while

// let num =1;

// do{
//      console.log(num);
//      num++
// }while(num<=5)






// break

// for(let i=1; i<=10;i++)
// {
//      if(i==5)
//      {
//           break;
//      }
//      console.log(i)
// }


// Continue

// for (let i = 1; i <= 10; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(i);
// }


// Nested loop

// for(let i=1;i<=10;i++)
// {
//      for(let j=1;j<=10;j++)
//      {
//           console.log(i,j)
//      }
// }

// for(let i=1;i<=5; i++)
// {
//      let row = "";

//      for(let j=1;j<=i;j++)
//      {
//           row += "* "
//      }
//      console.log(row);
// }


// let name = "aman";
// console.log(Name);



// Input,output Statements


// console.log("hello class");


// alert

// alert("Please login first");

// prompt

// let name1  = prompt("enter your name");

// console.log(name1);

// console.table

// let table = [
//      {
//           name:"Aman",
//           age:23
//      },
//      {
//           name:"Rahul",
//           age:25
//      },
//      {
//           name:"Shivam",
//           age:21
//      }
// ]


// console.table(table)


// console.error

// console.error("404 Not found");

// console.warn

// console.warn("Something went Wrong");

// Template literals

let name = "aman"
let age = 23;

// console.log("My name is " + name + " age is " + age);

console.log(`My name is ${name} and age is ${age}`)




