// Object stores data in key value pair 

// {} notation for creating objects

// creating objects

// let obj = {

// }

// console.log(obj);

// let obj = {
//      name : "Aman",
//      age : 23
// }

// adding values in object

// obj.city = "delhi"

// updating value in object

// obj.age = 24


// delete value inside object

// delete obj.city

// console.log(obj)


// destructuring in object

// let {name,age} = obj

// console.log(name,age)

// Bracket Notation 

// console.log(obj["name"]);


// Object methods

// let obj1 = {
//      name : "Aman",

//      greet : function()
//      {
//           console.log(`Hello ${this.name}`)
//      }
// }

// obj1.greet()


// shallow copy 

// let obj = {
//      name : "Aman",
//      age : 23,

//      address : {
//           city : "delhi",
//           email : "amansinghhdi951@gmail.com"
//      }
// }

// let copy = {...obj}

// copy.name = "Rahul"

// console.log(obj)
// console.log(copy)


// copy.address.city = "lucknow";

// console.log(obj)
// console.log(copy)



// Deep Copy

let obj = {
  name: "Aman",
  age: 23,

  address: {
    city: "delhi",
    email: "amansinghhdi951@gmail.com",
  },
};

// let copy  = structuredClone(obj);

// console.log(obj)
// console.log(copy)


// copy.address.city = "lucknow"

// console.log(obj)
// console.log(copy)

// let copy = JSON.parse(JSON.stringify(obj));

// console.log(copy)
// console.log(obj)



// optional chaining

// let obj1 = {
//      name : "Aman",
//      age : 23,

//      address : {
//           city : "Delhi"
//      }

// }


// console.log(obj1.address?.city)



// JSON Structure

// JSON is a light weight data format which is used to exchange data between client and server

// let obj2 = `{
//      "name" : "Aman",
//      "age" : 28
//      "city" : "Delhi"
// }`


// console.log(obj2)
// console.log(typeof obj2)


// JSON support 
// Number 
// Boolean
// string
// Array
// Object
// null


// JSON Serialization and JSON Deserialization

// let object = {
//      name : "Aman",
//      age : 26,
//      isLoggedIn : true,
//      skills : ["Javascript","react","node.js"],
//      address : {
//           city:"delhi",
//           country : "India"
//      },
//      greet : function()
//      {
//           console.log(`Hello my name is ${this.name}`)
//      },
//      isSignIn : true
// }

// let jsonData = JSON.stringify(object)

// console.log(jsonData)


// let realObject = JSON.parse(jsonData);

// console.log(realObject);

