// without Event Delegation


// const a = document.getElementById("a");
// const b = document.getElementById("b");
// const c = document.getElementById("c");
// const d = document.getElementById("d");

// a.addEventListener("click",()=>{
//      console.log(`${a.textContent} is clicked`)
// })


// b.addEventListener("click",()=>{
//      console.log(`${b.textContent} is clicked`)
// })

// c.addEventListener("click", () => {
//   console.log(`${c.textContent} is clicked`);
// });

// d.addEventListener("click", () => {
//   console.log(`${d.textContent} is clicked`);
// });


// event delegation

let parent = document.getElementById("parent");

parent.addEventListener("click",(e)=>{
     if(e.target.tagName = "Div")
     {
          console.log(`${e.target.textContent} is Clicked`)
     }
})

