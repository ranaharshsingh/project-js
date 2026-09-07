const reels = [
  {
    username: "aarav.sharma",
    likecount: 358,
    isliked: false,
    commentcount: 18,
    caption: "Some moments are better left unplanned ✨",
    video: "./reels/reels1.mp4",
    userprofile: "https://i.pravatar.cc/150?img=12",
    sharecount: 15,
    isfollowed: true
  },
  {
    username: "riya.verma",
    likecount: 1247,
    isliked: true,
    commentcount: 64,
    caption: "Golden hour hits different 🌅",
    video: "./reels/reels2.mp4",
    userprofile: "https://i.pravatar.cc/150?img=47",
    sharecount: 83,
    isfollowed: false
  },
  {
    username: "rohan.mehta",
    likecount: 892,
    isliked: false,
    commentcount: 31,
    caption: "Weekend mood activated 😎",
    video: "./reels/reels3.mp4",
    userprofile: "https://i.pravatar.cc/150?img=33",
    sharecount: 42,
    isfollowed: true
  },
  {
    username: "ananya.singh",
    likecount: 2341,
    isliked: true,
    commentcount: 97,
    caption: "Coffee, music and a little peace ☕🎶",

    video: "./reels/reels4.mp4",

    userprofile: "https://i.pravatar.cc/150?img=44",
    sharecount: 126,
    isfollowed: false
  },
  {
    username: "kabir.khan",
    likecount: 674,
    isliked: false,
    commentcount: 22,
    caption: "Keep going. Your time is coming. 🚀",
    video: "./reels/reels3.mp4",
    
    userprofile: "https://i.pravatar.cc/150?img=11",
    sharecount: 29,
    isfollowed: true
  },
  {
    username: "meera.patel",
    likecount: 1568,
    isliked: false,
    commentcount: 73,
    caption: "A little sunshine makes everything better ☀️",
    video: "./reels/reels1.mp4",
    
    userprofile: "https://i.pravatar.cc/150?img=49",
    sharecount: 91,
    isfollowed: true
  },
  {
    username: "dev.malhotra",
    likecount: 431,
    isliked: true,
    commentcount: 16,
    caption: "Building things, breaking things, learning things 💻",
    video: "./reels/reels3.mp4",
    
    userprofile: "https://i.pravatar.cc/150?img=13",
    sharecount: 18,
    isfollowed: false
  },
  {
    username: "isha.raj",
    likecount: 3189,
    isliked: true,
    commentcount: 142,
    caption: "Life lately has been pretty good ❤️",
    video: "./reels/reels4.mp4",
    
    userprofile: "https://i.pravatar.cc/150?img=32",
    sharecount: 217,
    isfollowed: true
  },
  {
    username: "yash.thakur",
    likecount: 967,
    isliked: false,
    commentcount: 38,
    caption: "No destination, just enjoying the journey 🛣️",
    video: "./reels/reels2.mp4",
    
    userprofile: "https://i.pravatar.cc/150?img=68",
    sharecount: 54,
    isfollowed: false
  },
  {
    username: "sana.kapoor",
    likecount: 1876,
    isliked: false,
    commentcount: 81,
    caption: "Collecting memories, not things 🌸",
    video: "./reels/reels3.mp4",
    
    userprofile: "https://i.pravatar.cc/150?img=45",
    sharecount: 103,
    isfollowed: true
  }
];


let sum=''
reels.forEach(function(elem){
    sum=sum+`  <div class="reel">
                <video autoplay loop muted  src="${elem.video}"></video>
                <div class="bottom">
                   <div class="user">
                       <img src="${elem.userprofile}" alt="">
                       <h4>${elem.username}</h4>
                       <button>${elem.isfollowed?'Unfollow':'Follow'}</button>
                   </div>
                   <h3>${elem.caption}</h3>
                </div>    
                <div class="right">
                    <div class="like">
                        <h4 class="like-icon icon">${elem.isliked?'<i class=" love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                        <h6>${elem.likecount}</h6>
                    </div>
                    <div class="comment">
                        <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                        <h6>${elem.commentcount}</h6>
                    </div>
                      <div class="share">
                        <h4 class="share-icon icon"><i class="ri-send-ins-line"></i></h4>
                        <h6>${elem.sharecount}</h6>
                    </div>
                    <div class="menu">
                        <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                         
                    </div>

                </div>
            </div>            `
})

let allReels=document.querySelector('.allreels');
allReels.innerHTML=sum;

console.log(sum)

let btn=document.querySelector('button');
btn.addEventListener('click',function(){
    if(btn.innerHTML=='Follow'){
        btn.innerHTML='Unfollow';
    }else{
        btn.innerHTML='Follow';
    }
})