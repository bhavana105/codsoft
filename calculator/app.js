
let string ="";
let buttons = document.querySelectorAll(".grid-item");
   buttons.forEach( button =>{
    button.addEventListener("click",(e) =>{
if(e.target.innerText == "C"){
    string="";
    document.querySelector(".upper").innerText = string;
}else if(e.target.innerText == "="){
   document.querySelector(".upper").innerText = string;
   string = eval (string)
}
else{
    string = string + e.target.innerHTML;
    document.querySelector(".upper").innerText = string;

}
        
    })
   })

//    let string = "";
// let buttons = document.querySelectorAll(".grid-item");

// buttons.forEach(button => {
//     button.addEventListener("click", (e) => {
//         let value = e.target.innerText;

//         if (value === "C") {
//             string = "";
//             document.querySelector(".upper").innerText = string;
//         } else if (value === "=") {
//             if (string !== "") {
//                 document.querySelector(".upper").innerText = eval(string);
//                 string = eval(string).toString();
//             }
//         } else {
//             string += value;
//             document.querySelector(".upper").innerText = string;
//         }
//     });
// });

