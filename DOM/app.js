// Selecting HTML Elements


// let heading = document.getElementById("heading");
// console.log(heading);

// let para = document.getElementsByClassName("para");
// console.log(para);

// let h1 = document.getElementsByTagName("h1")
// console.log(h1);

// let heading1 = document.querySelector("#heading");
// console.log(heading1);


// let heading2 = document.querySelectorAll("#heading");
// console.log(heading2);


// Reading Content 

// textContent

// let box  = document.getElementById("box");
// box.textContent = "Hello Students";\

// let heading = document.getElementById("heading");
// heading.textContent = "Abhay";


// innerText
// let heading = document.getElementById("heading");
// heading.innerText = "Abhay Singh"


// innerHTML

// let para = document.getElementById("heading");
// para.innerHTML = "<h1>Hello Students </h1>";


// Managing Attributes in HTMl

// getAttribute

// let image = document.getElementById("image");

// console.log(image.getAttribute("src"));

// setAttributes

// console.log(image.setAttribute("width","500px"))

// classList

// let para = document.getElementById("para");

// para.classList.add("highlight");

// para.classList.remove("text");

// para.classList.toggle("highlight");

// para.classList.add("highlight")


// let heading = document.getElementById("heading");

// heading.classList.add("highlight");


// updating inline Css

// let box = document.getElementById("box");

// box.textContent = "Hello Class";

// box.style.backgroundColor = "red";

// box.style.height = "200px"

// box.style.width = "250px"

// box.style.color = "white"

// box.style.fontSize = "24px"

// box.style.fontWeight = "700"


// Event and addEventListener()


// let button = document.getElementById("btn");
// let paragraph = document.getElementById("para");


// button.addEventListener("click",()=>{
//      paragraph.textContent = "Clicked";
// });


let inputEl = document.getElementById("input");
let button = document.getElementById("btn");
let heading = document.getElementById("heading");

// button.addEventListener("click",()=>{
//      let inputVal = inputEl.value
//      heading.textContent = `Welcome ${inputVal}`
//      inputEl.value = ""
// })


// button.addEventListener("click",(event)=>{
//      console.log(event);
// })


// let parent = document.getElementById("parent")

// parent.addEventListener("click",(event)=>{

//      console.log(event.target)

//      console.log(event.currentTarget);
// })

// inputEl.addEventListener("keypress",(event)=>{
//      let inputVal = inputEl.value
//      if(event.key =="Enter")
//      {
//           heading.textContent = `Welcome ${inputVal}`
//      }
// })


// // Conditional UI Rendering

// let inputEl = document.getElementById("input");
// let button = document.getElementById("btn");
// let message  = document.getElementById("message");

// button.addEventListener("click",()=>{
//      if(inputEl.value.trim() == "")
//      {
//           message.textContent = "Please Enter Your Name"
//      }
//      else
//      {
//           message.textContent = `Welcome ${inputEl.value}`
//      }
// })


// Creating and Inserting Element

// let box  = document.getElementById("container");

// let h1 = document.createElement("h1");

// h1.textContent = "Hello Class";

// box.append(h1);

// box.appendChild(h1,"Welcome");

// Update Element

// h1.textContent = "Hello Students";

// remove element

// h1.remove();


// Client side Validation

let form = document.getElementById("myForm");
let email = document.getElementById("email");
let error = document.getElementById("error");

form.addEventListener("submit",(event)=>{
     event.preventDefault();

     let emailValue = email.value;
     

     if(email.value.trim() === "")
     {
          error.textContent = "Please Enter a valid email"
          error.style.color = "red"
     }
     else
     {
          error.textContent = `Register Successfully and email is ${emailValue}`;
          error.style.color = "green";
          
     }
})









