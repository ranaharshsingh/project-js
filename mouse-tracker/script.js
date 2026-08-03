let main=document.querySelector("#main");

// main.addEventListener("mouseover",function(dets){
//    main.style.backgroundColor="yellow";
// });

// main.addEventListener("mouseout",function(dets){
//    main.style.backgroundColor="red";
// });

window.addEventListener("mousemove",function(dets){
   main.style.left=dets.clientY + "px";
   main.style.top= dets.clientX + "px";
});