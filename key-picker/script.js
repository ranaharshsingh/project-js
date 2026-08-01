// since we are directly giving input to the screen ie window; 

let h1=document.querySelector("h1");
window.addEventListener("keydown",function(dets){
    if(dets.key===" "){
        h1.textContent="space";
    }else{
        h1.textContent=dets.key;
    }
});