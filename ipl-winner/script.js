let arr=[
    {
        team:"rcb",
        primary:"red",
        secondary:" green"
    },
    {
        team:"mi",
        primary:"blue",
        secondary:" grey"
    },
    {
        team:"csk",
        primary:"yellow",
        secondary:" black"
    },
    {
        team:"gt",
        primary:"purple",
        secondary:" bluish"
    },
    {
        team:"srh",
        primary:"orange",
        secondary:" black"
    }
]

let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let body=document.querySelector("body");

btn.addEventListener('click',function(){
    let num=Math.floor(Math.random()*arr.length); 
    console.log(arr[num].team);
    h1.innerHTML=arr[num].team;
    h1.style.backgroundColor=arr[num].secondary;
    body.style.backgroundColor=arr[num].primary;
        
});