let users=[
    {
        Name:"arav mehta",
        image: "https://plus.unsplash.com/premium_photo-1672239496412-ab605befa53f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5mbHVlbmNlcnMlMjBtZW58ZW58MHx8MHx8fDA%3D "   ,
        profession: "ux designer",
        age:20,
        tags:["figma", "ui/ux","design system","freelancer"]
    },
    {
        name:'harsh rajput',
        image: "https://images.unsplash.com/photo-1648692792913-9510b0b39cea?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        profession:'web developer',
        age:32,
        tags:["figma", "ui/ux","design system","freelancer"]
    },
    {
        name:'raj sahu',
        image: "https://images.unsplash.com/photo-1613420568020-0c0e3764d499?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
        profession:'dsa',
        age:12,
        tags:["figma", "ui/ux","design system","freelancer"]
    },
    {
        name:'ashvin khatri',
        image: "https://plus.unsplash.com/premium_photo-1661301093012-cf876d46e873?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
        profession:'telegram',
        age:98,
        tags:["figma", "ui/ux","design system","freelancer"]
    },
];

let sum = ` `
users.forEach(function(elem){
    sum = sum + ` <div id="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.name}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.tags}</p>
        </div> `
});



let main =document.querySelector("main");
main.innerHTML=sum;
console.log(sum)
