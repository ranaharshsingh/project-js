let btn = document.querySelector("#btn");
let fileinp=document.querySelector("#file-inp");

btn.addEventListener("click",function(){
    fileinp.click();                          
});

fileinp.addEventListener("click",function(dets){
    //console.log(dets.target.files[0].name);
   // btn.textContent=dets.target.files[0].name;

   const file=dets.target.files[0];
   if(file){
    btn.textContent=file.name;
   }
});