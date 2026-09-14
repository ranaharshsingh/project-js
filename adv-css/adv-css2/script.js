let para=document.querySelector("p");
let alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let text=para.innerHTML;
para.addEventListener('mouseover',function(){
    
    setInterval(()=>{
        
    const str=text.split('').map((char,idx)=>{
        return alpha.split("")[Math.floor(Math.random()*52)]
    }).join("")

    para.innerHTML=str;

    },100)
})