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
// let isharsh=false;
// let isritika=false;
// let israjput=false;
// let arrow=document.querySelector("#icon");
// arrow.addEventListener("click",()=>{
//     if(isharsh===false){
//         showProfile(object);
//         isharsh=true;
//     }else if(isharsh===true&&isritika===false){
//         showProfile(object2);
//         isritika=true;
//     }  else {
//         showProfile(object3)
//         israjput=true;
//     }
    
// });
let countt=0;
let arrow=document.querySelector("#icon");
arrow.addEventListener('click',()=>{
    showProfile(profiles[countt]);
    countt++;
    if(countt===profiles.length){
        countt=0;
    }

});

let card=document.querySelector("#card");
let search=document.querySelector(".searchbtn");
let searchcard=document.querySelector("#searchbtnn");
let chat=document.querySelector("#chatsection");
let chatbtn=document.querySelector(".chatbtn");


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
            card.style.display="block";
            searchcard.style.display="none";
            chat.style.display="none";

        }
    }
});

card.style.display="block";
searchcard.style.display="none";
chat.style.display="none";

function hideAll(){
    chat.style.display="none";
    searchcard.style.display="none";
    card.style.display="none";
}

chatbtn.addEventListener('click',function(){
    hideAll();
    chat.style.display="block";
});
search.addEventListener("click",function(){
    hideAll();
    searchcard.style.display="block";
});