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

// let name = "aman"
// let age = 23;

// console.log("My name is " + name + " age is " + age);

// console.log(`My name is ${name} and age is ${age}`)

// function

// function greet()
// {
//      console.log("Welcome");
// }

// greet();

// without function

// console.log("welcome aman");
// console.log("welcome rahul");
// console.log("welcome yash");

// with function

// function greet(name)
// {
//      console.log(`Welcome ${name}`)
// }

// greet("Aman");
// greet("rahul");
// greet("yash");

// greet();

// example 2

// function calculateAdd()
// {
//      let a = 10;
//      let b = 20;

//      console.log(a+b);
// }

// calculateAdd();

// function Declaration

// function greet(){
//      console.log("Hello Javascript");
// }

// Function invocation/Calling

// greet();

// function expression

// let greet = function(){
//      console.log("Hello javascript");
// }

// greet();

// example

// let addtion = function()
// {
//      let num1 = 10;
//      let num2 = 20;

//      console.log(num1 + num2)
// }

// addtion();

// function declaration vs function expression

// function Declaration // Regular function

// function welcome()
// {
//      console.log("Welcome to js class");
// }

// welcome();

// function expression

// let welcome1 = function()
// {
//      console.log("welcome to js class 2");
// }

// welcome1();

// Parameter vs Arguments

// function greet(name)
// {
//      console.log(`Welcome to ${name}`)
// }

// greet("Aman");
// greet("Rahul");

// Default parameter

// function greet(name)
// {
//      console.log(`Hello ${name}`);
// }

// greet();

// function greet(name="Guest")
// {
//      console.log(`hello ${name}`);
// }

// greet("Aman");

// multiple Default parameters

// function calculate(price=2000,tax=18)
// {
//      console.log(price + (price * tax /100))
// }

// calculate();

// fallback value

// function greet(name)
// {
//      // null || "Guest";  fallback values

//      console.log(`Hello ${name}`);
// }
// greet();

// returning statements and Returning values

// function add(a,b)
// {
//      return a + b
// }

// let result = add(10,20)

// console.log(result);

// console.log vs return

// console.log

// function add (a,b)
// {
//      console.log(a +b)
// }

// return

// function add (a,b)
// {
//      return a + b
// }

// let result = add(20,20)

// console.log(result)
// ;

// Function naming and Single responsibility

// bad

// function doSomething()
// {
//      //
// }

// good practice

// function calculateTotal()
// {
//      // code
// }

// Single responsibility

// poor design

// function processOrder()
// {
//      // validate user

//      // calculate price

//      // save order

//      // send email

//      // update cart
// }

// better

// function validateUser()
// {
//      // user
// }

// function calculateTotal()
// {
//      // calculateTotal
// }

// Scope in javascript

// Global Scope

// var a = 10;

// let b = 20;

// const c = 30;

// if(true)
// {

//      console.log(a)
//      console.log(b);
//      console.log(c);
// }

// for(let i =1;i<=10;i++)
// {
//      console.log(a)
//      console.log(b)
//      console.log(c)
// }

// console.log(a)
// console.log(b)
// console.log(c)

// block scope

// {
//   var a = 1;
//   let b = 2;
//   const c = 3;

//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// if (true) {
//   var a = 1;
//   let b = 2;
//   const c = 3;

//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// function scope

// function variables() {
//   var a = 1;
//   let b = 2;
//   const c = 3;

//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// variables();

// console.log(a);
// console.log(b);
// console.log(c);


// Lexical Scope

// example 1

// let name = "Aman";

// function outer()
// {
//      let age = 22;

//      function inner()
//      {
//           console.log(name);
//           console.log(age);
//      }
//      inner()
// }

// outer();



// let name = "shubham";

// function outer()
// {
//      let num = 12;

//           function inner()
//           {

//                console.log(name);
//                console.log(num);
//           }
//           inner()
// }

// outer()


// Varibale shadowing

// let name  = "Aman";

// function outer()
// {
//      let name ="Rahul";

//      console.log(name);
// }

// outer();

// console.log(name);


// Naming collision

// let age = 20;
// let age = 25;

// console.log(age);


// Hosting =>Very Important for Interview

// var age;

// console.log(age);

// age = 20;


// let 

// let age;

// console.log(age);

// let age = 20;


// const 

// const age;
// console.log(age);
// const age = 23;



// function declaration

// greet();

// function greet()
// {
//      console.log("Hello");
// }


// function expression in hoisting

// greet();

// const greet = function()
// {
//      console.log("Hello");
// }

// var case in function expression

// greet();

// var greet = function()
// {
//      console.log("Hello");
// }


// Arrow function 

// syntax

// const functionName = (parameter)=>{
//      // code
// }

// functionName()


// Example

// const greet = ()=>{
//      console.log("Hello");
// }
// greet();

// Arrow function shorthand

// Normal

// const square = (num)=>{
//      return num * num
// }

// console.log(square(5));

// Shorthand

// const square = num =>{
//      return num * num
// }

// console.log(square(5));


// Implicit vs Explicit return in Arrow

// Explicit return

// const add = (a,b)=>{
//      return a + b
// }

// console.log(add(10,20));

// Implicit return

// const add = (a,b)=> a + b

// console.log(add(10,40));


// const add = (a,b)=>{
//      return a + b
// }


// early return

// Without early return

// function checkAge(age)
// {
//      if(age >= 18)
//      {
//           console.log("Eligible");
//      }
//      else{
//           console.log("Not eligible");
//      }
// }

// checkAge(16);


// early return

// function checkAge(age)
// {
//      if (age < 18)
//      {
//           return "Not eligible";
//      }
//      return "Eligible"
// }
// console.log(checkAge(20));


// HOF =>Higher Order function 

// Example

// function greet(name)
// {
//      console.log("hello" + name);
// }

// function processuser(greet2)
// {
//      greet2("Aman");
// }

// processuser(greet);


// Callback function

// function greet(name)
// {
//      console.log("hello" + name);
// }

// function processuser(greet2)
// {
//      greet2("Aman");
// }

// processuser(greet); => Callback function is greet


// Closure

// function Outer()
// {
//      let count  = 0;

//      function inner()
//      {
//           count++;
//           console.log(count);
//      }
//      return inner;
// }

// const counter = Outer();

// counter();
// counter();
// counter();


// IIFE =>Immediately invoked function expression

// Syntax

// (function(){
//      console.log("Hello");
// })();


// Arrow function in IIFE

// (()=>{
//      console.log("Hello js");
// })();


// Parameter in IIFE

// (function(name)
// {
//      console.log(`Hello ${name}`);
// })("Aman");



// Rest Parameter 

// function sum(...numbers)
// {
//      console.log(numbers);
// }

// sum(10,20,30,40);


// important write rest parameter in last 

// function test(a,...values){
//      console.log(a)
//      console.log(values);
// }

// test(10,20,30,40);


// Spread Operator 

// const numbers = [1,2,3];
// console.log(...numbers);


// combine array

// const a = [1,2,3]
// const b = [4,5,6];

// const result = [...a,...b];

// console.log(result);

// Spread in Object 

// const user = {
//      name : "Aman",
//      age : 22
// };

// const updatedUser = {
//      ...user,
//      city:"Delhi"
// };

// console.log(updatedUser);


// Functional Programming concept 

// function as value

// const greet = ()=>{
//      console.log("hello");
// }


// function ko argument bana sakte hai

// someFunction(greet)

// function return bhi kar sakte hai

// function createFunction()
// {
//      return greet
// }


// Pure function 

// example

// function add(a,b)
// {
//      return a + b
// }

// console.log(add(10,20))
// console.log(add(10,20))
// console.log(add(10,20))
// console.log(add(10,20))
// console.log(add(10, 20))


// This keyword in Js

// Inside an Object

// const user = {
//      name : "Aman",

//      greet : function()
//      {
//           console.log(this.name);
//      }
// };

// user.greet()


// this with multiple properties

// const students = {
//      name : "Aman",
//      age : 23,

//      introduce : function()
//      {
//           console.log(`My name is ${this.name}`);
//           console.log(`My age is ${this.age}`)
//      }
// };

// students.introduce();


// Arrow function this 

const user = {
     name :"Aman",

     greet : ()=>{
          console.log(this.name);
     }
};

user.greet()


// greet : function ()
// {
//      console.log(this.name)
// }