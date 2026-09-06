let allBtn=document.querySelectorAll("button");

allBtn.forEach(function(elem){
    elem.addEventListener("click",function(){
        if(elem.innerHTML==="Add Friend"){
            elem.innerHTML='remove friend';
        }else{
            elem.innerHTML="Add Friend";
        }
    })
})