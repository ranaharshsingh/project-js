let btn=document.querySelector("button");
let box=document.querySelector("#box");

btn.addEventListener("click",function(){
    let a=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let c=Math.floor(Math.random()*256);

    box.style.backgroundColor=`rgb( ${a},${b},${c})`;
    box.innerHTML=Math.floor(Math.random()*10);
});