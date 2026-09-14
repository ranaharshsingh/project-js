let para=document.querySelector("p");
let text=para.innerHTML;
let alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let iteration=0;
function randomText (){     
    const str=text.split('').map((char,idx)=>{
        if(idx < iteration){
           return char
        }
        return alpha.split("")[Math.floor(Math.random()*52)]
    }).join("")

    para.innerHTML=str;
    iteration +=0.2

    
}

setInterval(randomText,20)
    