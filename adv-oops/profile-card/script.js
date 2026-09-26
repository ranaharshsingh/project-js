
let song=document.querySelector(".song");
let audio=document.querySelector(".song audio");
let postMusic=document.querySelector("#audio-post i")
let dhun=document.querySelector("#audio-post audio");

song.addEventListener("click",function(){
    // audio.play();
    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }
});

postMusic.addEventListener('click',function(){
    if(dhun.paused){
        dhun.play();
        postMusic.className="ri-volume-down-line"
    }else{
        dhun.pause();
        postMusic.className="ri-volume-mute-line"
    }


});
let object1={
    namee:"ranaharshkr",
    profile:"./images/rana.jpeg",
    aud:"./music/meri.mp3",
    user:" Rana harsh singh",
    posts:9,
    followers:352,
    following:269,
    caption1:"Rajput....",
    caption2:"I Know To be happy by HeArt",
    caption3:"Aggression on mind....",
    caption4:"i prefer to be Decent and passione...",
    button:"@ranaharshkr",

    mutual:"Followed by _ritika._.sharma_, rana_prashen_singh,and 92 others"
}
let object2 = {
    namee:"_ritika._.sharma_",
    user: "Ritika♡",
    profile: "./images/rinkle.png",
    aud: "./music/ruposh.mp4.mp3",

    posts: 17,
    followers: 231,
    following: 223,

    caption1: "....Not every thing needs a caption,some things are just felt....",
    caption2: "Laughaholic 😁",
    caption3: "Other than this i am ,gentle,preety,cute.....",

    mutual: "Followed by khushi_sharma_930, _vivek_gupta0 and 4 others"
};

let object3={
    namee:"_oyyye_harsh_",
    profile:"./images/knoxx.jpeg",
    aud:"./music/dil.mp3",
    user:" harsh singh rajput",
    posts:9,
    followers:352,
    following:269,
    caption1:"Rajput....",
    caption2:"I Know To be happy by HeArt",
    caption3:"Aggression on mind....",
    caption4:"i prefer to be Decent and passione...",
    button:"@ranaharshkr",

    mutual:"Followed by _ritika._.sharma_, rana_prashen_singh,and 92 others"
}
let object4={
    namee:"ashok",
    profile:"./images/knoxx.jpeg",
    aud:"./music/dil.mp3",
    user:" harsh singh rajput",
    posts:9,
    followers:352,
    following:269,
    caption1:"Rajput....",
    caption2:"I Know To be happy by HeArt",
    caption3:"Aggression on mind....",
    caption4:"i prefer to be Decent and passione...",
    button:"@ranaharshkr",

    mutual:"Followed by _ritika._.sharma_, rana_prashen_singh,and 92 others"
}
let object5={
    namee:"rhl.kumar",
    profile:"./images/knoxx.jpeg",
    aud:"./music/dil.mp3",
    user:" harsh singh rajput",
    posts:9,
    followers:352,
    following:269,
    caption1:"Rajput....",
    caption2:"I Know To be happy by HeArt",
    caption3:"Aggression on mind....",
    caption4:"i prefer to be Decent and passione...",
    button:"@ranaharshkr",

    mutual:"Followed by _ritika._.sharma_, rana_prashen_singh,and 92 others"
}
let object6={
    namee:"ritesh",
    profile:"./images/knoxx.jpeg",
    aud:"./music/dil.mp3",
    user:" harsh singh rajput",
    posts:9,
    followers:352,
    following:269,
    caption1:"Rajput....",
    caption2:"I Know To be happy by HeArt",
    caption3:"Aggression on mind....",
    caption4:"i prefer to be Decent and passione...",
    button:"@ranaharshkr",

    mutual:"Followed by _ritika._.sharma_, rana_prashen_singh,and 92 others"
}
let object7={
    namee:"hrk",
    profile:"./images/knoxx.jpeg",
    aud:"./music/dil.mp3",
    user:" harsh singh rajput",
    posts:9,
    followers:352,
    following:269,
    caption1:"Rajput....",
    caption2:"I Know To be happy by HeArt",
    caption3:"Aggression on mind....",
    caption4:"i prefer to be Decent and passione...",
    button:"@ranaharshkr",

    mutual:"Followed by unique.raj , rana_prashen_singh,and 92 others"
}
let object8={
    namee:"unique_raj._",
    profile:"./images/knoxx.jpeg",
    aud:"./music/dil.mp3",
    user:" rajkumarsahu",
    posts:3,
    followers:497,
    following:292,
    caption1:"Meraki  |Becoming myself!!!",
    caption2:"I Know To be happy by HeArt",
    caption3:"Aggression on mind....",
    caption4:"i prefer to be Decent and passione...",
    button:"@ranaharshkr",

    mutual:"Followed by ranaharshkr, rana_prashen_singh,and 92 others"
}

let name=document.querySelector("#username h1");
let profile=document.querySelector("#profile img");
let aud=document.querySelector("#profile audio");
let user=document.querySelector("#user h3");
let post=document.querySelector("#posts h5");
let followers=document.querySelector("#followers h5");
let following=document.querySelector("#following h5");
let captions=document.querySelectorAll("#caption p");


let mutual=document.querySelector("#mutual-text h5");

function showProfile (data){
    name.innerText=data.namee;
    profile.src=data.profile;
    aud.src=data.aud;
    user.innerText=data.user;
    post.innerText=data.posts;
    followers.innerText=data.followers;
    following.innerText=data.following;
    mutual.innerText=data.mutual;
    captions[0].innerText=data.caption1
    captions[1].innerText=data.caption2
    captions[2].innerText=data.caption3
    // captions[3].innerText=data.caption4
}

let countt=1;
let arrow=document.querySelector("#icon");
arrow.addEventListener('click',()=>{
    setTimeout(()=>{

        showProfile(profiles[countt]);
        countt++;
        if(countt===profiles.length){
            countt=0;
        }
    },300);

});

let card=document.querySelector("#card");
let search=document.querySelector(".searchbtn");
let searchcard=document.querySelector("#searchbtnn");
let chat=document.querySelector("#chatsection");
let chatbtn=document.querySelector(".chatbtn");
let reel=document.querySelector(".reelsbtn");
let section=document.querySelector("#reeel");
let profilee=document.querySelector(".profilebtn");
let home=document.querySelector("#home-page");
let homebtn=document.querySelector(".homebtn");
let first_page=document.querySelector("#starter");
let load=document.querySelector("#starter button img");
let butt=document.querySelector("#starter button ");

let profiles=[object1,object2,object3,object4,object5,object6,object7,object8];
let searchinput=document.querySelector("#searchinput");
searchinput.addEventListener('keypress',(ele)=>{
    
    if(ele.key==="Enter"){
        let value=searchinput.value;

        let found=profiles.find((profile)=>{
            return profile.namee===value||profile.user===value;
        });
        if(found){
            showProfile(found);
            home.style.display="none"
            card.style.display="block";
            searchcard.style.display="none";
            chat.style.display="none";
            section.style.display="none";

        }
    }
});
home.style.display="none"
card.style.display="none";
searchcard.style.display="none";
chat.style.display="none";
section.style.display="none";
first_page.style.display="block";

function hideAll(){
    home.style.display="none"
    chat.style.display="none";
    searchcard.style.display="none";
    card.style.display="none";
    section.style.display="none";
    first_page.style.display="none";
}
load.addEventListener('click',()=>{
    let h1=document.createElement("h1");
    // button.style.display="flex";
    butt.appendChild(h1);
    // button.style.flexdirection="column";
    
    h1.style.color="white";
    h1.innerHTML="Loading...";
    h1.style.display="block";
    setTimeout(()=>{
        h1.style.display="none";
        hideAll();
        home.style.display="block";   
    },1000);
});

homebtn.addEventListener("click",()=>{
    hideAll();
    home.style.display="block";
});
chatbtn.addEventListener('click',function(){
    hideAll();
    chat.style.display="block";
});
search.addEventListener("click",function(){
    hideAll();
    searchcard.style.display="block";
});
reel.addEventListener("click",function(){
    hideAll();
    section.style.display="block";
});
profilee.addEventListener("click",()=>{
    hideAll();
    card.style.display="block";
    showProfile(profiles[0]);  
})