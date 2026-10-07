// Introduction about Array

// let arr = ["Apple","Orange","banana"];

// console.log(arr);

// Array index 

// start indexing from 0

// let arr = ["Apple","Orange","banana"];

// console.log(arr[0]);


// Array length

// let arr = ["Apple", "Orange", "banana",2,3,45,6,7,8,,9,0];

// console.log(arr.length)

// Array can store multiple data types

// let arr = ["Apple",12,null,undefined,false,true];

// console.log(arr);


// Array operations

// push
// pop
// unshift
// shift

// push

// let arr = ["Apple","Orange","banana"];
// console.log(arr);

// arr.push("pineapple")


// console.log(arr);


// pop

// let arr = ["Apple","Orange","banana"];

// console.log(arr)

// console.log(arr.pop())

// console.log(arr);

// unshift

// let arr = ["Apple","Orange","banana"];

// console.log(arr);

// arr.unshift("pineapple");

// console.log(arr);


// shift

// let arr = ["Apple","Orange","banana"];

// console.log(arr);

// arr.shift();

// console.log(arr)


// splice  => add,remove,replace elements in array

// remove

// let arr = ["apple","banana","orange"];

// console.log(arr);

// arr.splice(1,1);

// console.log(arr);


// add

// let arr = ["apple","banana","orange"];

// console.log(arr);

// arr.splice(1,0,"pineapple");

// console.log(arr);


// slice return a new portion of array from original array

// let arr = [10,20,30,40,50];

// let newArr = arr.slice(1,4)

// console.log(newArr);


// includes  check whether element exist or not 

// let arr = ["apple","mango","orange"];

// console.log(arr.includes("Mango"));


// Array Iteration methods

// let arr = [10,20,30,40,50]

// for(let i=0;i<arr.length;i++)
// {
//      console.log(arr[i]);
// }

// forEach

// let arr = [10,20,30,40,50];

// arr.forEach(function(number){
//      console.log(number*2);
// })


// arrow function in for each

// let arr =[10,20,30,40,50];

// arr.forEach((number)=>{
//      console.log(number)
// })

// forEach with value and index

// let fruits = ["apple","banana","mango"];

// fruits.forEach((value,index)=>{
//      console.log(value,index)
// })


// for of loop

// let arr = [1,2,3,4,5,6,7];

// for(let num of arr)
// {
//      console.log(num * 2);
// }


// Array functional methods

// map()

// let arr = [1,2,3,4,5,6,7,8];

// let newArr = arr.map((num)=>{
//      return num *3
// })

// console.log(newArr);

// filter()

// let arr = [1,2,3,4,5,6,7,8];

//  let newArr = arr.filter((number)=>{
//           return number % 2 !== 0
// })


// console.log(newArr)



// reduce

// let arr = [10,20,30,40,50];

// let newValue = arr.reduce((sum,num)=>{
//      return sum + num
// },0)

// console.log(newValue);

// find()

// let arr = [1,2,3,4,5,6,7,8,9];

// let newValue = arr.find((number)=>{
//      return number > 2
// })

// console.log(newValue)

// some()

// let arr = [1,2,3,4,5,6,7,8];

// let newValue = arr.some((number)=>{
//      return number > 2
// })

// console.log(newValue)


// every

// let arr = [1,2,3,4,5,6,7,8];

// let newValue = arr.every((number)=>{
//      return number > 2
// })

// console.log(newValue)

// sort method 

// let arr =[10,90,20,80,30,70,40,60,50,100];

// arr.sort()

// console.log(arr);


// Array destructuring

// let arr = [10,20,30];

// let [a,b,c,d=40] = arr

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// concat()

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

let newArr = arr1.concat(arr2)

console.log(newArr);















