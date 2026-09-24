let song=document.querySelector(".song");
let audio=document.querySelector(".song audio");

song.addEventListener("click",function(){
    // audio.play();
    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }
});
