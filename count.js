let decrement=document.querySelector("#decrement");
 let dispayvalue=document.querySelector("#dispayvalue");
 let increment=document.querySelector("#increment");
let reset=document.querySelector("#reset");

// This  is the decrement value.
 decrement.addEventListener("click",()=>{
  
let value=Number(dispayvalue.innerHTML);
// console.log(value);
if(value>0){
   dispayvalue.innerHTML=value-1;
}
else{
    alert("negativ number not allowed");
}
 });


// This is the increment value.
 increment.addEventListener("click",()=>{
    let value=Number(dispayvalue.innerHTML);
    if(value>=20){
       alert("+20 number not allowed");
    }
    else{
    dispayvalue.innerHTML=value+1;
    }
     });
  //This is the reset value. 
     reset.addEventListener("click",()=>{
        dispayvalue.innerHTML=0;
     });