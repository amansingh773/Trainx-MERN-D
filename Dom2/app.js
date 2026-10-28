let outerDiv = document.getElementById("outer");
let middleDiv = document.getElementById("middle");
let innerDiv  = document.getElementById("inner");

outerDiv.addEventListener("click",()=>{
     console.log("Outer Div clicked");
},true)

middleDiv.addEventListener("click",(e)=>{
     console.log("Middle Div clicked");
     // e.stopPropagation()


},true)

innerDiv.addEventListener("click",(e)=>{
     console.log("Inner Div clicked");
     // e.stopPropagation();
},true)

