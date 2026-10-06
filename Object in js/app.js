// Object stores data in key value pair 

// {} notation for creating objects

// creating objects

// let obj = {

// }

// console.log(obj);

let obj = {
     name : "Aman",
     age : 23
}

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

console.log(obj["name"]);


// Object methods

let obj1 = {
     name : "Aman",

     greet : function()
     {
          console.log(`Hello ${this.name}`)
     }
}

obj1.greet()

