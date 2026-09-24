let city = document.querySelector("#city");
let btn = document.querySelector("#search");
let h2=document.querySelector("#cityName");
let h1=document.querySelector("#temp");
let p=document.querySelector("#weather");

async function getWeather(city){
    let apiKey=`b9f025fb703f9cef33ebcfb4db1238de`

    let row= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

    let realdata= await row.json();
    console.log(realdata);
    h2.innerHTML=realdata.name;
    h1.innerHTML=realdata.main.temp;
    p.innerHTML=realdata.weather[0].main;
}

btn.addEventListener("click",function(){
    getWeather(city.value);

})


