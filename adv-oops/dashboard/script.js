let allelem=document.querySelectorAll(".elem");
let allfullelem=document.querySelectorAll("#fullelem");
allelem.forEach((elem)=>{
    elem.addEventListener('click',function(){
    
        allfullelem[elem.id].style.display="block";
    });
});