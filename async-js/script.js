let count=0;
let btn=document.querySelector("button");
let h2=document.querySelector("h2");
let inner=document.querySelector('#inner')

btn.addEventListener("click",function(){

    btn.style.pointerEvents='none';

    let num=50 + Math.floor(Math.random()*50);
    console.log(num);

    let interval= setInterval(() => {
        count++;
        h2.innerHTML=count+'%'
        inner.style.width=count+'%'
        
    }, num);

    setTimeout(() => {
        clearInterval(interval);
        btn.innerHTML="downloaded";
        btn.style.opacity=0.5;
        console.log("downloaded in ",num/10," seconds")
    }, num*100);
})
