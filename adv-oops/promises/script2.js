// fetching data from  whether API and making a promise;
async function getWeather(city){
    let apiKey= `b9f025fb703f9cef33ebcfb4db1238de`;

    let row= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

    let realdata= await row.json();
    console.log(realdata);

}
getWeather("ranchi");