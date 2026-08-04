let email=document.querySelector("#email");
let password=document.querySelector("#password");
let form=document.querySelector("form");

form.addEventListener("submit",function(dets){
    dets.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans=emailRegex.test(email.value);
    let passwordans=passwordRegex.test(password.value);

    let isvalid=true;
    if(!emailans){
        document.querySelector("#emailError").textContent="email income";
        document.querySelector("#emailError").style.display="initial";
        isvalid=false;

    }
    if(!passwordans){
        document.querySelector("#passwordError").textContent="password income";
        document.querySelector("#passwordError").style.display="initial";
        isvalid=false;

    }

    if(isvalid){
        document.querySelector("#resultMessage").textContent="everything is correct";
    }
        
});